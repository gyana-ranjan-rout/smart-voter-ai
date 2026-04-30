import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";

export const metadata: Metadata = {
  title: "Election Assistant | Your Voting Guide",
  description: "An AI-powered assistant to help you understand the election process.",
};

import { LanguageProvider } from "@/lib/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="bg-mesh"></div>
        <div style={{ display: 'flex', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
          {/* Desktop Sidebar */}
          <div style={{ display: 'none' }} className="desktop-sidebar">
            <Sidebar />
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @media (min-width: 768px) {
              .desktop-sidebar { display: block !important; width: 250px; flex-shrink: 0; }
              .mobile-nav-container { display: none !important; }
              .main-content { margin-left: 0; }
            }
            .main-content {
               flex: 1;
               display: flex;
               flex-direction: column;
               padding-bottom: 70px; /* space for mobile nav */
               overflow-x: hidden;
               max-width: 100vw;
            }
            @media (min-width: 768px) {
              .main-content { padding-bottom: 0; }
            }
          `}} />

          {/* Main Content Area */}
          <main className="main-content">
            {children}
          </main>

          {/* Mobile Bottom Navigation */}
          <div className="mobile-nav-container" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50 }}>
             <MobileNav />
          </div>
        </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
