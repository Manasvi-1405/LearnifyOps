import { Fragment, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, ChevronRight, Menu, Search, X, MessageCircle } from "lucide-react";
import Link from "../navigation/Link.jsx";

function BrandLogo({ logo, variant = "full" }) {
  if (variant === "navigation") {
    return (
      <span className="brand-mark">
        <img src={logo} alt="LearnifyOps" />
      </span>
    );
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
    menu.type === "doctoral" ? "mega-menu-doctoral-sidebar" : "",
    open ? "open" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={menuClassName} id={id} role="region" aria-label={`${menu.label} menu`}>
      <div className="mega-menu-main">
        <div className="mega-menu-content">
          {/* Doctoral Program: Left Sidebar Tabs + Right Side University List */}
          {menu.type === "doctoral" ? (
            <div className="doctoral-vertical-layout">
              {/* Optional Header Intro */}
              <div className="doctoral-layout-header">
                <span className="doctoral-badge-title">{menu.label || "DOCTORAL"}</span>
                <p className="doctoral-tagline">
                  {menu.subtitle ||
                    "Doctoral pathways and honorary recognition from globally accredited institutions."}
                </p>
              </div>

              <div className="doctoral-main-grid">
                {/* Left Side Buttons (DBA, PhD, etc.) */}
                <div className="doctoral-left-tabs" role="tablist" aria-label="Doctoral categories">
                  {menu.tabs?.map((tab) => {
                    const isActive = activeDoctoralTab?.label === tab.label;
                    return (
                      <button
                        key={tab.label}
                        type="button"
                        className={`doctoral-side-btn ${isActive ? "active" : ""}`}
                        onMouseEnter={() => setActiveTab(tab.label)}
                        onFocus={() => setActiveTab(tab.label)}
                        onClick={() => setActiveTab(tab.label)}
                        role="tab"
                        aria-selected={isActive}
                      >
                        <span className="doctoral-side-btn-text">{tab.label}</span>
                        <ChevronRight size={16} aria-hidden="true" className="doctoral-side-chevron" />
                      </button>
                    );
                  })}
                </div>

                {/* Right Side University List */}
                <div className="doctoral-right-panel" role="tabpanel">
                  {activeDoctoralTab?.items?.map((item) =>
                    item.to ? (
                      <Link
                        key={item.title}
                        to={item.to}
                        navigate={navigate}
                        className="doctoral-item-row"
                        onNavigate={onNavigate}
                      >
                        <div className="item-details">
                          <strong className="item-title">{item.title}</strong>
                          {item.text && <p className="item-desc">{item.text}</p>}
                        </div>
                        <ArrowRight size={16} aria-hidden="true" className="item-arrow" />
                      </Link>
                    ) : (
                      <article className="doctoral-item-row" key={item.title}>
                        <div className="item-details">
                          <strong className="item-title">{item.title}</strong>
                          {item.text && <p className="item-desc">{item.text}</p>}
                        </div>
                      </article>
                    )
                  )}
                </div>
              </div>

              {/* Extra Small Screen (<442px) Accordion List view */}
              <div className="xs-compact-list-view">
                {menu.tabs?.map((tab) => (
                  <div key={tab.label} className="xs-category-group">
                    <span className="xs-category-heading">{tab.label}</span>
                    <ul className="xs-bullet-list">
                      {tab.items?.map((item) => (
                        <li key={item.title} className="xs-bullet-item">
                          {item.to ? (
                            <Link to={item.to} navigate={navigate} onNavigate={onNavigate}>
                              {item.title}
                            </Link>
                          ) : (
                            <span>{item.title}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* DBA, Certification & Tools and Services */
            <div
              className={
                menu.key === "tools-services"
                  ? "mega-menu-grid mega-menu-grid-tools-services"
                  : "mega-menu-grid"
              }
            >
              {menu.columns?.map((column) => (
                <div className="mega-menu-column" key={column.title}>
                  <strong className="column-title">{column.title}</strong>
                  {column.intro && <p className="mega-menu-column-intro">{column.intro}</p>}

                  {/* Standard Card List */}
                  <div className="column-standard-cards">
                    {column.items?.map((item) =>
                      item.to ? (
                        <Link
                          key={item.title}
                          to={item.to}
                          navigate={navigate}
                          className="mega-menu-card"
                          onNavigate={onNavigate}
                        >
                          <span>{item.title}</span>
                          <p className="item-desc">{item.text}</p>
                        </Link>
                      ) : (
                        <article className="mega-menu-card" key={item.title}>
                          <span>{item.title}</span>
                          <p className="item-desc">{item.text}</p>
                        </article>
                      )
                    )}
                  </div>

                  {/* Clean Bullet View for <442px screens */}
                  <ul className="xs-bullet-list">
                    {column.items?.map((item) => (
                      <li key={item.title} className="xs-bullet-item">
                        {item.to ? (
                          <Link to={item.to} navigate={navigate} onNavigate={onNavigate}>
                            {item.title}
                          </Link>
                        ) : (
                          <span>{item.title}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {menu.footer && (
        <div className="mega-menu-footer">
          <p>{menu.footer}</p>
          {menu.cta?.external ? (
            <a className="mega-menu-cta" href={menu.cta.href} target="_blank" rel="noreferrer">
              {menu.cta.label}
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          ) : (
            menu.cta && (
              <Link className="mega-menu-cta" to={menu.cta.to} navigate={navigate} onNavigate={onNavigate}>
                {menu.cta.label}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default function Header({ path, navigate, megaMenus = [], logo }) {
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
          setIsVisible(false);
          setOpenMega(null);
        } else if (currentScrollY < lastScrollY.current) {
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
    const compactViewport = window.matchMedia("(max-width: 1083px)").matches;
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
          height: "calc(100vh - " + mobileMenuTop + "px)",
          overflowY: "auto"
        }
      : undefined;

  return (
    <Fragment>
      <style>{`
        /* =========================================================
           LIGHT THEME DOCTORAL (SIDEBAR BUTTONS + RIGHT LIST)
           ========================================================= */
        .mega-menu-doctoral-sidebar {
          background: #ffffff !important;
          border-radius: 16px !important;
          border: 1px solid #e2e8f0 !important;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12) !important;
          padding: 24px 28px !important;
          max-width: 820px !important;
          width: 90vw !important;
        }

        .doctoral-vertical-layout {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .doctoral-layout-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 12px;
        }

        .doctoral-badge-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: #d97706;
          letter-spacing: 0.08em;
        }

        .doctoral-tagline {
          margin: 0;
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.4;
        }

        /* 2-Column Structure: Left Buttons + Right Programs */
        .doctoral-main-grid {
          display: grid;
          grid-template-columns: 210px 1fr;
          gap: 28px;
          align-items: start;
        }

        /* Left Side Vertical Button Tabs */
        .doctoral-left-tabs {
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-right: 1px solid #e2e8f0;
          padding-right: 16px;
        }

        .doctoral-side-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: #475569;
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
        }

        .doctoral-side-btn:hover {
          background: #f8fafc;
          color: #0f172a;
        }

        /* Active Tab Highlight (Emerald / Primary Green Theme) */
        .doctoral-side-btn.active {
          background: #00875a;
          color: #ffffff;
        }

        .doctoral-side-chevron {
          opacity: 0.7;
          transition: transform 0.2s ease;
        }

        .doctoral-side-btn.active .doctoral-side-chevron {
          opacity: 1;
          transform: translateX(2px);
        }

        /* Right Side Program List */
        .doctoral-right-panel {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .doctoral-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 8px;
          text-decoration: none;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .doctoral-item-row:hover {
          background: #f8fafc;
          border-color: #e2e8f0;
        }

        .item-details {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .item-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #0f172a;
        }

        .doctoral-item-row:hover .item-title {
          color: #00875a;
        }

        .item-desc {
          margin: 0;
          font-size: 0.83rem;
          color: #64748b;
          line-height: 1.4;
        }

        .item-arrow {
          color: #00875a;
          flex-shrink: 0;
          opacity: 0.6;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .doctoral-item-row:hover .item-arrow {
          opacity: 1;
          transform: translateX(3px);
        }

        /* Mobile View (< 442px) */
        .xs-compact-list-view,
        .xs-bullet-list {
          display: none;
        }

        @media screen and (max-width: 442px) {
          .mega-menu {
            max-height: none !important;
            overflow: visible !important;
            width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            padding: 8px 0 !important;
            background: transparent !important;
          }

          .column-standard-cards,
          .doctoral-main-grid,
          .doctoral-layout-header,
          .mega-menu-column-intro,
          .item-desc {
            display: none !important;
          }

          .xs-compact-list-view,
          .xs-bullet-list {
            display: flex !important;
            flex-direction: column !important;
            gap: 6px !important;
            list-style: disc !important;
            padding-left: 20px !important;
            margin: 6px 0 12px 0 !important;
          }

          .xs-bullet-item {
            display: list-item !important;
            color: #00875a;
            font-size: 0.88rem;
          }

          .xs-bullet-item a,
          .xs-bullet-item span {
            color: #1e293b;
            text-decoration: none;
            font-weight: 500;
          }
        }
      `}</style>

      <header
        ref={headerRef}
        className={`floating-scroll-header ${isVisible ? "nav-visible" : "nav-hidden"} ${
          isAtTop ? "at-top" : "scrolled"
        }`}
        onMouseLeave={() => setOpenMega(null)}
      >
        <div className="header-container">
          <Link className="brand" to="/" navigate={navigate} aria-label="Home">
            <BrandLogo logo={logo} variant="navigation" />
          </Link>

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

                {openMega === menu.key && (
                  <MegaMenu
                    id={`mega-${menu.key}`}
                    menu={menu}
                    navigate={navigate}
                    open={openMega === menu.key}
                    onNavigate={closeMenus}
                  />
                )}
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
    </Fragment>
  );
}

export { BrandLogo };