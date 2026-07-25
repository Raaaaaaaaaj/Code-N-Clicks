"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/shared/StickyCTA";
import ExitIntentPopup from "@/components/shared/ExitIntentPopup";

import ScrollProgressIndicator from "@/components/shared/ScrollProgressIndicator";
import CustomCursor from "@/components/shared/CustomCursor";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: `
          html, body, a, button, select, input, textarea, [role="button"], .group {
            cursor: auto !important;
          }
        `}} />
        <main className="flex-grow">{children}</main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 lg:pt-[104px]">
        {children}
      </main>
      <Footer />
      <ScrollProgressIndicator />
      <CustomCursor />
      <StickyCTA />
      <ExitIntentPopup />
    </>
  );
}
