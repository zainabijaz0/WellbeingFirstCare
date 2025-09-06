import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot, type Root } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Services from "./pages/Services";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import PersonalCare from "./pages/services/PersonalCare";
import DailyLiving from "./pages/services/DailyLiving";
import RespiteCare from "./pages/services/RespiteCare";
import SupportedLiving from "./pages/services/SupportedLiving";
import SDA from "./pages/services/SDA";
import AssistTransport from "./pages/services/AssistTransport";
import Autism from "./pages/services/Autism";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/services/personal-care" element={<PersonalCare />} />
            <Route path="/services/daily-living" element={<DailyLiving />} />
            <Route path="/services/respite-care" element={<RespiteCare />} />
            <Route
              path="/services/supported-living"
              element={<SupportedLiving />}
            />
            <Route
              path="/services/disability-accommodation"
              element={<SDA />}
            />
            <Route path="/services/transport" element={<AssistTransport />} />
            <Route path="/services/autism" element={<Autism />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;
const w = window as unknown as { __app_root?: Root };
if (!w.__app_root) {
  w.__app_root = createRoot(container);
}
w.__app_root.render(<App />);
