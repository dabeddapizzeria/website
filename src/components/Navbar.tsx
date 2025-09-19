import { useState, useRef } from "react";
import { Menu, X, PhoneCall, MessageCircle, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
    { name: "Pizze", href: "#pizze" },
    { name: "Rosticceria", href: "#rosticceria" },
    { name: "Fast Food", href: "#fastfood" },
    { name: "Le Nostre Bibite", href: "#bibite" },
    { name: "Specialità della Casa", href: "#specialita" },
  ];

  const handlePhoneCall = () => {
    window.location.href = "tel:+393715987959"; // Removed spaces for better compatibility
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/393715987959", "_blank");
  };

  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/niTZy7NW5vZW2Sxd9", "_blank");
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dropdown handlers
  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsMenuDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(
      () => setIsMenuDropdownOpen(false),
      200 // Slightly longer delay to prevent accidental closes
    );
  };

  // Mobile-friendly dropdown toggle
  const toggleDropdown = () => {
    setIsMenuDropdownOpen(!isMenuDropdownOpen);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 transition-colors duration-200"
              style={{ background: "none", border: "none", padding: 0 }}
              aria-label="Home"
            >
              <img
                src="/logo.png"
                alt="Trattoria Da Bedda Logo"
                className="h-16 w-auto"
                style={{ display: "inline-block" }}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Menu Dropdown */}
              <div
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  aria-haspopup="true"
                  aria-expanded={isMenuDropdownOpen}
                  type="button"
                  onClick={toggleDropdown} // Added click handler for mobile
                >
                  Menu
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isMenuDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-md shadow-lg z-50"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="py-1">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors duration-200"
                          onClick={() => setIsMenuDropdownOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Us Buttons */}
              <button
                onClick={handlePhoneCall}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <PhoneCall size={16} />
                Ordina
              </button>

              <button
                onClick={handleWhatsApp}
                className="text-green-600 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <MessageCircle size={16} />
                WhatsApp
              </button>

              <button
                onClick={handleLocation}
                className="text-blue-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <MapPin size={16} />
                Dove Siamo
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Improved for mobile */}
        <div className="md:hidden">
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 pt-2 pb-4 space-y-1 bg-card border-t border-border">
              {/* Mobile Menu Dropdown */}
              <div>
                <button
                  onClick={toggleDropdown}
                  className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-foreground"
                  aria-expanded={isMenuDropdownOpen}
                >
                  <span>Menu</span>
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isMenuDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuDropdownOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="pl-6 space-y-1">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        onClick={() => {
                          setIsOpen(false);
                          setIsMenuDropdownOpen(false);
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Contact Buttons */}
              <button
                onClick={() => {
                  handlePhoneCall();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left rounded-md"
              >
                <PhoneCall size={20} />
                Ordina
              </button>

              <button
                onClick={() => {
                  handleWhatsApp();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-3 text-base font-medium text-green-600 hover:text-green-700 transition-colors duration-200 w-full text-left rounded-md"
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>

              <button
                onClick={() => {
                  handleLocation();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-3 text-base font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 w-full text-left rounded-md"
              >
                <MapPin size={20} />
                Dove Siamo
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
