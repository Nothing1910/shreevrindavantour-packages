import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer
    className="bg-secondary text-secondary-foreground pt-16 pb-8"
    role="contentinfo"
    aria-label="Website footer"
  >
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">
            Shree Vrindavan Packages
          </h4>
          <p className="text-secondary-foreground/70 text-sm mb-4">
            Your trusted partner for spiritual pilgrimage tours across India. Experience divine journeys with expert guidance.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/kanhiyaupadhyay60"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Instagram page"
              className="w-8 h-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Instagram size={16} aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/people/Shree-Vrindavan-Tour-Packages/61577870716414/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebook page"
              className="w-8 h-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Facebook size={16} aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/919084397393?text=Hi%2C%20I%20want%20more%20information%20about%20the%20tours%20and%20travelling%20to%20the%20destination."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-8 h-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <MessageCircle size={16} aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/@ShreeVrindavanPackages"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit YouTube channel"
              className="w-8 h-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Youtube size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><a href="/#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="/#packages" className="hover:text-primary transition-colors">Tour Packages</a></li>
            <li><a href="/#destinations" className="hover:text-primary transition-colors">Destinations</a></li>
            <li><Link to="/hotel-booking" className="hover:text-primary transition-colors">Hotel Booking</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>

        <nav aria-label="Resources">
          <h4 className="font-heading font-bold text-lg mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><Link to="/temples-mathura-vrindavan" className="hover:text-primary transition-colors">Temples of Mathura Vrindavan</Link></li>
            <li><Link to="/packing-tips-mathura-vrindavan" className="hover:text-primary transition-colors">Packing Tips</Link></li>
            <li><Link to="/janmashtami-vrindavan" className="hover:text-primary transition-colors">Janmashtami Guide</Link></li>
            <li><Link to="/packages-from" className="hover:text-primary transition-colors">Packages From Your City</Link></li>
            <li><Link to="/destination-wedding" className="hover:text-primary transition-colors">Destination Wedding</Link></li>
            <li><Link to="/mathura-vrindavan-tour-packages" className="hover:text-primary transition-colors">Mathura Vrindavan Guide</Link></li>
          </ul>
        </nav>

        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/70">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary" aria-hidden="true" />
              <a href="tel:+919084397393" className="hover:text-primary">
                +91 90843 97393
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-primary" aria-hidden="true" />
              <a
                href="https://wa.me/919084397393"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                +91 90843 97393
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary" aria-hidden="true" />
              <a href="mailto:info@vrindavanpackages.com" className="hover:text-primary">
                info@vrindavanpackages.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-primary mt-0.5" aria-hidden="true" />
              <span>Mathura, Uttar Pradesh, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 pt-6 text-center text-sm text-secondary-foreground/50">
        <p>© 2026 Shree Vrindavan Tour & Packages — “In the land of Braj, every step becomes a memory of devotion.”</p>
      </div>
    </div>
  </footer>
);

export default Footer;