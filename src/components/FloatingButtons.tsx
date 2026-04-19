import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div
    className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
    role="region"
    aria-label="Quick contact actions"
  >
    <a
      href="tel:+918923427393"
      className="w-14 h-14 rounded-full bg-gradient-saffron text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
      aria-label="Call travel support"
    >
      <Phone size={24} aria-hidden="true" />
    </a>

    <a
      href="https://wa.me/918923427393?text=Hi%2C%20I%20want%20more%20information%20about%20the%20tours%20and%20travelling%20to%20the%20destination."
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-primary-foreground" aria-hidden="true" />
    </a>
  </div>
);

export default FloatingButtons;