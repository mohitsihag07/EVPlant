"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [overlayVisible, setOverlayVisible] = useState(true);
  const firstRunRef = useRef(true);

  useEffect(() => {
    // Initial opening splash
    if (firstRunRef.current) {
      firstRunRef.current = false;
      const t = window.setTimeout(() => setOverlayVisible(false), 1100);
      return () => window.clearTimeout(t);
    }

    // Closing/opening overlay on route change
    setOverlayVisible(true);
    const t = window.setTimeout(() => setOverlayVisible(false), 650);
    return () => window.clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    // Prevent accidental scroll/click during transition.
    const prevOverflow = document.body.style.overflow;
    if (overlayVisible) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [overlayVisible]);

  return (
    <>
      <div
        className={`page-transition ${overlayVisible ? "show" : ""}`}
        aria-hidden="true"
      >
        <div className="page-transition__bg" />
        <div className="page-transition__content">
          <div className="page-transition__logo">
            EV<span>Plant</span>
          </div>
          <div className="page-transition__bar" role="progressbar">
            <span className="page-transition__bar-fill" />
          </div>
          <p className="page-transition__text">Assembling electric mobility...</p>
        </div>
      </div>

      <div
        className={`page-transition__wrapper ${
          overlayVisible ? "blur" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}

