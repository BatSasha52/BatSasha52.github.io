import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Nav />

      <div className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/projects/:slug"
              element={
                <PageTransition>
                  <ProjectDetail />
                </PageTransition>
              }
            />
            <Route
              path="/experience"
              element={
                <PageTransition>
                  <Experience />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
