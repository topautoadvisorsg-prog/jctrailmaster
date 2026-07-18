import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCallBar";
import Home from "./pages/Home";
import ServicesA from "./pages/services/ServicesA";
import ServicesB from "./pages/services/ServicesB";
import ServicesC from "./pages/services/ServicesC";
import ProjectsA from "./pages/projects/ProjectsA";
import ProjectsB from "./pages/projects/ProjectsB";
import ProjectsC from "./pages/projects/ProjectsC";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Client-side nav doesn't auto-scroll to anchors, and the target page may
    // not have painted yet — retry until the element exists, then scroll.
    // scroll-mt-* on the target clears the sticky header.
    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts++ < 20) {
        timer = setTimeout(tryScroll, 50);
      }
    };
    timer = setTimeout(tryScroll, 80);
    return () => clearTimeout(timer);
  }, [pathname, hash]);
  return null;
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-jc-black">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Navigate to="/services/a" replace />} />
          <Route path="/services/a" element={<ServicesA />} />
          <Route path="/services/b" element={<ServicesB />} />
          <Route path="/services/c" element={<ServicesC />} />
          <Route path="/projects" element={<Navigate to="/projects/a" replace />} />
          <Route path="/projects/a" element={<ProjectsA />} />
          <Route path="/projects/b" element={<ProjectsB />} />
          <Route path="/projects/c" element={<ProjectsC />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
