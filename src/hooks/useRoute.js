// import { useEffect, useState } from "react";

// export function createRouteHelpers({ navItems, getUniversityByPath }) {
//   const normalisePath = (pathname) => {
//     const clean = pathname.replace(/\/$/, "") || "/";
//     if (getUniversityByPath(clean)) return clean;
//     return navItems.some(([, path]) => path === clean) ? clean : "/";
//   };

//   return function useRoute() {
//     const [path, setPath] = useState(() => normalisePath(window.location.pathname));

//     useEffect(() => {
//       const syncRoute = () => setPath(normalisePath(window.location.pathname));
//       window.addEventListener("popstate", syncRoute);
//       return () => window.removeEventListener("popstate", syncRoute);
//     }, []);

//     const navigate = (to) => {
//       const next = normalisePath(to);
//       if (next !== path) {
//         window.history.pushState({}, "", next);
//         setPath(next);
//       }
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     return { path, navigate };
//   };
// }

// src/component/hooks/useRoute.js
import { useEffect, useState } from "react";

export function createRouteHelpers({ navItems, getUniversityByPath, getCertificationByPath }) {
  const normalisePath = (pathname) => {
    const clean = pathname.replace(/\/$/, "") || "/";
    
    // 1. Agar university ka path hai toh allow karo
    if (getUniversityByPath && getUniversityByPath(clean)) return clean;
    
    // 2. Agar certification ka path hai toh allow karo (HOME PAR RESET NA HO)
    if (getCertificationByPath && getCertificationByPath(clean)) return clean;
    if (clean.startsWith("/certification/")) return clean;

    // 3. Normal nav items
    return navItems.some(([, path]) => path === clean) ? clean : "/";
  };

  return function useRoute() {
    const [path, setPath] = useState(() => normalisePath(window.location.pathname));

    useEffect(() => {
      const syncRoute = () => setPath(normalisePath(window.location.pathname));
      window.addEventListener("popstate", syncRoute);
      return () => window.removeEventListener("popstate", syncRoute);
    }, []);

    const navigate = (to) => {
      const next = normalisePath(to);
      if (next !== path) {
        window.history.pushState({}, "", next);
        setPath(next);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return { path, navigate };
  };
}