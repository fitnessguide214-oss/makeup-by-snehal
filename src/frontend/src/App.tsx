import FloatingButtons from "@/components/FloatingButtons";
import Navbar from "@/components/Navbar";
import AboutPage from "@/pages/AboutPage";
import AcademyPage from "@/pages/AcademyPage";
import BlogPage from "@/pages/BlogPage";
import BridalPackagesPage from "@/pages/BridalPackagesPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import OffersPage from "@/pages/OffersPage";
import PortfolioPage from "@/pages/PortfolioPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/bridal-packages" element={<BridalPackagesPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}
