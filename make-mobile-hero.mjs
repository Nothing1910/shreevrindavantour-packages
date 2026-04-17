import sharp from 'sharp';

async function run() {
  try {
    await sharp('src/assets/hero-temple.webp')
      .resize({ width: 600, withoutEnlargement: true })
      .webp({ quality: 60 - 70 })
      .toFile('src/assets/hero-mobile.webp');
    console.log('Created hero-mobile.webp');
  } catch (e) {
    console.error('Error on hero:', e);
  }
}

run();