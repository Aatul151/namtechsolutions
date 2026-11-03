import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Loader } from "./components/ui/Loader";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { WhyChooseUsPage } from "./pages/WhyChooseUsPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import ScrollToTop from "./components/sections/Scroller";
import { useEffect } from "react";
import { useComponyDetail } from "./context/componyContext";
import NotFoundPage from "./components/ui/NotFoundPage";
import TeamPage from "./pages/TeamPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { CelebrationPage } from "./pages/CelebrationPage";
import { CookieConsent } from "./components/layout/CookieConsent";
import { DiwaliFloat } from "./components/layout/DiwaliFloat";

function App() {
  const { pathname } = useLocation();
  const { setComponyProfile } = useComponyDetail();
  const isCelebration = pathname === "/celebration";

  useEffect(() => {
    fetch("/lib/detail.json")
      .then((res) => res.json())
      .then((data) => {
        setComponyProfile(data);
        const profile = data?.profile;
        const root = document.documentElement;
        if (profile?.primary_color) {
          root.style.setProperty("--color-primary", profile.primary_color);
        }
        if (profile?.secondary_color) {
          root.style.setProperty("--color-secondary", profile.secondary_color);
        }
      });
  }, []);

  const navMenu = [
    { label: "Home", path: "/" },
    {
      label: "Company",
      // path: "/team",
      children: [
        {
          label: "About",
          path: "/about",
          description: "Company overview"
        },
        {
          label: "Team",
          path: "/team",
          description: "Achievements"
        }
      ]
    },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Why Us", path: "/why-us" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact", isFooterLink: true },

  ];


  return (
    <>
      <Loader />
      <div className={`min-h-screen ${isCelebration ? "bg-[#12081f]" : "bg-bg-main"}`}>
        {!isCelebration && <ScrollToTop />}
        {!isCelebration && <Header navMenu={navMenu} />}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/why-us" element={<WhyChooseUsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/celebration" element={<CelebrationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        {!isCelebration && <Footer navMenu={navMenu} />}
        <DiwaliFloat />
        <CookieConsent />
      </div>
    </>
  );
}

export default App;
