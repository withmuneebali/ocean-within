import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import About from "./pages/About";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/aroya-cruises" element={<ComingSoon title="AROYA Cruises" />} />
              <Route path="/packages" element={<ComingSoon title="Stay & Sail Packages" />} />
              <Route path="/packages/:slug" element={<ComingSoon title="Package Details" />} />
              <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
              <Route path="/booking" element={<ComingSoon title="Booking Inquiry" />} />
              <Route path="/resources" element={<ComingSoon title="Resources" />} />
              <Route path="/visa-guide" element={<ComingSoon title="Visa Guide" />} />
              <Route path="/privacy-policy" element={<ComingSoon title="Privacy Policy" />} />
              <Route path="/terms" element={<ComingSoon title="Terms & Conditions" />} />
              <Route path="/complaints" element={<ComingSoon title="Complaints Policy" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
