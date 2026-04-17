import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { shouldReduceMotion } from "@/lib/animation";

interface NavChild {
  label: string;
  href: string;
  isRoute?: boolean;
  isSeparator?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
  children?: NavChild[];
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Packages", href: "/#packages" },
  { label: "Destination", href: "/#destinations" },
  {
    label: "Packages From",
    href: "/packages-from",
    isRoute: true,
    children: [
      { label: "Packages from Delhi", href: "/packages-from#delhi" },
      { label: "Packages from Jaipur", href: "/packages-from#jaipur" },
      { label: "Packages from Agra", href: "/packages-from#agra" },
      { label: "Packages from Mumbai", href: "/packages-from#mumbai" },
    ],
  },
  { label: "Our Services", href: "/#services" },
  { label: "Destination Wedding", href: "/destination-wedding", isRoute: true },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "— Travel Guides —", href: "#", isSeparator: true },
      { label: "Temples of Mathura Vrindavan", href: "/temples-mathura-vrindavan", isRoute: true },
      { label: "Packing Tips", href: "/packing-tips-mathura-vrindavan", isRoute: true },
      { label: "Janmashtami Guide", href: "/janmashtami-vrindavan", isRoute: true },
      { label: "Mathura Vrindavan Guide", href: "/mathura-vrindavan-tour-packages", isRoute: true },
      { label: "— Company —", href: "#", isSeparator: true },
      { label: "FAQ", href: "/faq", isRoute: true },
      { label: "Blog", href: "/blog", isRoute: true },
    ],
  },
  { label: "Hotel Booking", href: "/hotel-booking", isRoute: true },
];

const DesktopDropdown = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((evt: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(evt.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary hover:text-saffron-dark transition-colors"
      >
        {item.label}
        <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            role="menu"
            className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-lg border border-saffron-light py-3 px-2 z-50"
          >
            {item.children!.map((childItem) =>
              childItem.isSeparator ? (
                <p
                  key={childItem.label}
                  className="px-3 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider"
                >
                  {childItem.label.replace(/—/g, "").trim()}
                </p>
              ) : (
                <Link
                  key={childItem.label}
                  to={childItem.href}
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  className="block px-3 py-2 text-sm text-foreground hover:bg-saffron-light hover:text-primary rounded-md transition-colors"
                >
                  {childItem.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DesktopLink = ({ item }: { item: NavItem }) => {
  if (item.href.startsWith("/#")) {
    return (
      <a
        href={item.href}
        className="px-3 py-2 text-sm font-medium text-primary hover:text-saffron-dark transition-colors"
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link
      to={item.href}
      className="px-3 py-2 text-sm font-medium text-primary hover:text-saffron-dark transition-colors"
    >
      {item.label}
    </Link>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  const logoSrc = useMemo(() => {
    return new URL("@/assets/Logo.webp", import.meta.url).href;
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className="sticky top-0 z-[100] bg-background/80 backdrop-blur-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 pt-3 pb-2">
        <div className="hidden xl:flex items-center justify-between bg-card rounded-2xl shadow-md border border-saffron-light px-6 py-3">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={logoSrc}
                alt="Shree Vrindavan Packages logo"
                className="w-full h-full object-contain"
                width="48"
                height="48"
              />
            </div>
            <div className="leading-tight">
              <span className="font-heading text-[18px] font-bold text-primary block">
                Shree Vrindavan
              </span>
              <span className="text-[12px] text-black">Tour & Packages</span>
            </div>
          </Link>

          <ul className="flex items-center gap-0.5">
            {navLinks.map((linkItem) => (
              <li key={linkItem.label}>
                {linkItem.children ? (
                  <DesktopDropdown item={linkItem} />
                ) : (
                  <DesktopLink item={linkItem} />
                )}
              </li>
            ))}
          </ul>

          <Link
            to="/hotel-booking"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-heading font-semibold text-sm shadow-md hover:bg-saffron-dark transition-colors"
            aria-label="Check hotel availability"
          >
            <Phone size={15} aria-hidden="true" />
            Check Availability
          </Link>
        </div>

        <div className="xl:hidden flex items-center justify-between bg-card rounded-2xl shadow-md border border-saffron-light px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={logoSrc}
                alt="Shree Vrindavan Packages logo"
                className="w-full h-full object-cover"
                width="48"
                height="48"
              />
            </div>
            <div className="leading-tight">
              <span className="font-heading font-bold text-primary text-sm block">
                Shree Vrindavan
              </span>
              <span className="text-[11px] text-black block">
                Tour & Packages
              </span>
            </div>
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 text-primary"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 pb-3">
              <div className="bg-card rounded-2xl shadow-md border border-saffron-light p-4 max-h-[80vh] overflow-y-auto">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((linkItem) => (
                    <li key={linkItem.label}>
                      {linkItem.children ? (
                        <>
                          <button
                            onClick={() =>
                              setExpandedMobile((prev) =>
                                prev === linkItem.label ? null : linkItem.label
                              )
                            }
                            className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-primary hover:bg-saffron-light transition-colors font-medium"
                            aria-expanded={expandedMobile === linkItem.label}
                          >
                            {linkItem.label}
                            <ChevronDown
                              size={16}
                              aria-hidden="true"
                              className={`transition-transform ${expandedMobile === linkItem.label ? "rotate-180" : ""
                                }`}
                            />
                          </button>

                          <AnimatePresence>
                            {expandedMobile === linkItem.label && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4"
                              >
                                {linkItem.children.map((childItem) => (
                                  <li key={childItem.label}>
                                    {childItem.isSeparator ? (
                                      <p className="px-4 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                        {childItem.label.replace(/—/g, "").trim()}
                                      </p>
                                    ) : (
                                      <Link
                                        to={childItem.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors"
                                      >
                                        {childItem.label}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : linkItem.href.startsWith("/#") ? (
                        <a
                          href={linkItem.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-4 py-3 rounded-lg text-primary hover:bg-saffron-light transition-colors font-medium"
                        >
                          {linkItem.label}
                        </a>
                      ) : (
                        <Link
                          to={linkItem.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-4 py-3 rounded-lg text-primary hover:bg-saffron-light transition-colors font-medium"
                        >
                          {linkItem.label}
                        </Link>
                      )}
                    </li>
                  ))}

                  <li className="mt-2">
                    <Link
                      to="/hotel-booking"
                      onClick={() => setMenuOpen(false)}
                      className="block text-center bg-primary text-primary-foreground px-5 py-3 rounded-full font-heading font-semibold shadow-md"
                      aria-label="Check hotel availability"
                    >
                      Check Availability
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;