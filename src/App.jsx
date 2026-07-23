import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCallBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
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

// Old per-layout-option URLs (/services/a, /projects/b, ...) no longer exist now
// that a single final layout was chosen for each — redirect old links/bookmarks
// to the clean route instead of 404ing, preserving any #category hash.
function RedirectWithHash({ to }) {
  const { hash } = useLocation();
  return <Navigate to={`${to}${hash}`} replace />;
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
          <Route path="/services" element={<Services />} />
          <Route path="/services/a" element={<RedirectWithHash to="/services" />} />
          <Route path="/services/b" element={<RedirectWithHash to="/services" />} />
          <Route path="/services/c" element={<RedirectWithHash to="/services" />} />
          {/* STATUS: Projects hidden pending real client photos (2026-07-22) — swap
              back to <Projects /> (src/pages/Projects.jsx, untouched) once ready. */}
          <Route path="/projects" element={<Navigate to="/" replace />} />
          <Route path="/projects/a" element={<Navigate to="/" replace />} />
          <Route path="/projects/b" element={<Navigate to="/" replace />} />
          <Route path="/projects/c" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
