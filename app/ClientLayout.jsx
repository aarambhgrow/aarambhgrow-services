"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { NAVRATRI } from "./data/navratri";
import NavratriOfferBar from "./components/navratri/NavratriOfferBar";
import NavratriProvider from "./components/navratri/NavratriProvider";
import DiwaliOfferBar from "./components/diwali/DiwaliOfferBar";
import DiwaliLayer from "./components/diwali/DiwaliLayer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, {
        immediate: true,
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.05,
        duration: 1.8,
        smoothWheel: true,
        wheelMultiplier: 0.85,
      }}
    >
      {/* Seasonal layers; outside their dates the site renders untouched (app/data/navratri.js, app/data/diwali.js). */}
      <NavratriProvider>
        {NAVRATRI.enabled && <NavratriOfferBar />}
        <DiwaliOfferBar />
        {children}
        <DiwaliLayer />
      </NavratriProvider>
    </ReactLenis>
  );
}