import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'src', 'assets');

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (stat.isFile() && /\.(webp|jpg|jpeg|png)$/i.test(file)) {
            if (stat.size > 300 * 1024) {
                console.log(`Compressing: ${fullPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
                const tempPath = fullPath + '.tmp.webp';
                try {
                    await sharp(fullPath)
                        .resize({ width: 1200, withoutEnlargement: true })
                        .webp({ quality: 60 })
                        .toFile(tempPath);
                    fs.renameSync(tempPath, fullPath);
                    const newStat = fs.statSync(fullPath);
                    console.log(`Reduced to: ${(newStat.size / 1024).toFixed(2)} KB`);
                } catch (e) {
                    console.error("Failed to process", fullPath, e);
                }
            }
        }
    }
}

processDirectory(directoryPath).then(() => console.log('Done compression!'));