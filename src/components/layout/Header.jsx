import { Fragment, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Search, X, MessageCircle } from "lucide-react";
import Link from "../navigation/Link.jsx";

function BrandLogo({ logo, variant = "full" }) {
  if (variant === "navigation") {
    return <span className="brand-mark"><img src={logo} alt="LearnifyOps" /></span>;
  }
  return <img className="brand-logo" src={logo} alt="LearnifyOps" />;
}

function MegaMenu({ id, menu, navigate, open, onNavigate }) {
  const [activeTab, setActiveTab] = useState(menu.tabs?.[0]?.label || "");
  const activeDoctoralTab =
    menu.tabs?.find((tab) => tab.label === activeTab) || menu.tabs?.[0];

  const menuClassName = [
    "mega-menu",
    `mega-menu-${menu.key}`,
    menu.type === "doctoral" ? "mega-menu-doctoral" : "",
    open ? "open" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={menuClassName} id={id} role="region" aria-label={`${menu.label} menu`}>
      <div className="mega-menu-main">
        <div className="mega-menu-content">
          {menu.type === "doctoral" ? (
            <div className="doctoral-mega-layout">
              <div className="doctoral-mega-tabs" role="tablist" aria-label="Doctoral route categories">
                {menu.tabs.map((tab) => (
                  <button
                    key={tab.label}
                    type="button"
                    className={
                      activeDoctoralTab?.label === tab.label
                        ? "doctoral-mega-tab active"
                        : "doctoral-mega-tab"
                    }
                    onMouseEnter={() => setActiveTab(tab.label)}
                    onFocus={() => setActiveTab(tab.label)}
                    onClick={() => setActiveTab(tab.label)}
                    role="tab"
                    aria-selected={activeDoctoralTab?.label === tab.label}
                  >
                    <span>{tab.label}</span>
                    <ChevronDown size={14} aria-hidden="true" className="doctoral-tab-arrow" />
                  </button>
                ))}
              </div>

              <div className="doctoral-mega-panel" role="tabpanel">
                {activeDoctoralTab?.items.map((item) =>
                  item.to ? (
                    <Link
                      key={item.title}
                      to={item.to}
                      navigate={navigate}
                      className="doctoral-mega-item doctoral-mega-link"
                      onNavigate={onNavigate}
                    >
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                      </div>
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  ) : (
                    <article className="doctoral-mega-item" key={item.title}>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                      </div>
                    </article>
                  )
                )}
              </div>
            </div>
          ) : (
            <div
              className={
                menu.key === "tools-services"
                  ? "mega-menu-grid mega-menu-grid-tools-services"
                  : "mega-menu-grid"
              }
            >
              {menu.columns.map((column) => (
                <div className="mega-menu-column" key={column.title}>
                  <strong>{column.title}</strong>
                  {column.intro && <p className="mega-menu-column-intro">{column.intro}</p>}
                  {column.items.map((item) =>
                    item.to ? (
                      <Link
                        key={item.title}
                        to={item.to}
                        navigate={navigate}
                        className="mega-menu-card"
                        onNavigate={onNavigate}
                      >
                        <span>{item.title}</span>
                        <p>{item.text}</p>
                      </Link>
                    ) : (
                      <article className="mega-menu-card" key={item.title}>
                        <span>{item.title}</span>
                        <p>{item.text}</p>
                      </article>
                    )
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mega-menu-footer">
        <p>{menu.footer}</p>
        {menu.cta.external ? (
          <a className="mega-menu-cta" href={menu.cta.href} target="_blank" rel="noreferrer">
            {menu.cta.label}
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        ) : (
          <Link className="mega-menu-cta" to={menu.cta.to} navigate={navigate} onNavigate={onNavigate}>
            {menu.cta.label}
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Header({ path, navigate, megaMenus, logo }) {
  const [open, setOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [mobileMenuTop, setMobileMenuTop] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);

  useEffect(() => {
    setOpen(false);
    setOpenMega(null);
  }, [path]);

  // Scroll Down -> Hide | Scroll Up & Hero/Top -> Show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Agar top par hai (Hero section me)
      if (currentScrollY <= 80) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        // Scroll down ho raha hai to navbar hide karo
        if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
          setIsVisible(false);
          setOpenMega(null);
        } else if (currentScrollY < lastScrollY.current) {
          // Scroll up ho raha hai to navbar show karo
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    const closeOnOutsidePointer = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setOpen(false);
        setOpenMega(null);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setOpenMega(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenus = () => {
    setOpen(false);
    setOpenMega(null);
  };

  const toggleNavigation = () => {
    const compactViewport = window.matchMedia("(max-width: 1024px)").matches;
    const headerHeight = Math.ceil(
      headerRef.current?.getBoundingClientRect().height || 80
    );

    setMobileMenuTop(compactViewport ? headerHeight : null);
    setOpen((current) => !current);
    setOpenMega(null);
  };

  const mobileMenuStyle =
    open && mobileMenuTop
      ? {
          position: "fixed",
          zIndex: 1001,
          top: `${mobileMenuTop}px`,
          right: 0,
          bottom: 0,
          left: 0,
          height: "fit-content",
          maxHeight: "none",
          overflowY: "auto"
        }
      : undefined;

  return (
    <>
      <header
        ref={headerRef}
        className={`floating-scroll-header ${isVisible ? "nav-visible" : "nav-hidden"} ${
          isAtTop ? "at-top" : "scrolled"
        }`}
        onMouseLeave={() => setOpenMega(null)}
      >
        <div className="header-container">
          {/* Logo on Left - Bada size */}
          <Link className="brand" to="/" navigate={navigate} aria-label="Home">
            <BrandLogo logo={logo} variant="navigation" />
          </Link>

          {/* Center Pill Navigation */}
          <nav
            className={`center-pill-nav ${open ? "mobile-open" : ""}`}
            style={mobileMenuStyle}
            aria-label="Primary navigation"
          >
            {megaMenus.map((menu) => (
              <div
                key={menu.key}
                className="mega-nav-item"
                onMouseEnter={() => setOpenMega(menu.key)}
                onFocus={() => setOpenMega(menu.key)}
              >
                <button
                  className={`pill-nav-btn ${openMega === menu.key ? "active" : ""}`}
                  type="button"
                  aria-expanded={openMega === menu.key}
                  aria-controls={`mega-${menu.key}`}
                  onClick={() => setOpenMega(openMega === menu.key ? null : menu.key)}
                >
                  <span>{menu.label}</span>
                  <ChevronDown size={14} className="chevron-icon" aria-hidden="true" />
                </button>

                <MegaMenu
                  id={`mega-${menu.key}`}
                  menu={menu}
                  navigate={navigate}
                  open={openMega === menu.key}
                  onNavigate={closeMenus}
                />
              </div>
            ))}

            <Link
              to="/partnership"
              navigate={navigate}
              className={`pill-nav-link ${path === "/partnership" ? "active" : ""}`}
              onMouseEnter={() => setOpenMega(null)}
              onNavigate={closeMenus}
            >
              Universities
            </Link>

            <Link
              to="/admissions"
              navigate={navigate}
              className={`pill-nav-link ${path === "/admissions" ? "active" : ""}`}
              onMouseEnter={() => setOpenMega(null)}
              onNavigate={closeMenus}
            >
              For Businesses
            </Link>
          </nav>

          {/* Right Action Icons */}
          <div className="header-right-actions">
            <button
              className="circle-search-btn"
              type="button"
              onClick={() => {
                closeMenus();
                navigate("/search");
              }}
              onMouseEnter={() => setOpenMega(null)}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={2.2} aria-hidden="true" />
            </button>

            <Link
              to="/contact"
              className="pill-enquire-btn"
              navigate={navigate}
              onMouseEnter={() => setOpenMega(null)}
              onNavigate={closeMenus}
            >
              <MessageCircle size={18} strokeWidth={2} />
              <span>Enquire Now</span>
            </Link>

            <button
              className="mobile-nav-toggle"
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleNavigation}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={openMega ? "mega-page-overlay open" : "mega-page-overlay"}
        aria-hidden="true"
      />
    </>
  );
}

export { BrandLogo };