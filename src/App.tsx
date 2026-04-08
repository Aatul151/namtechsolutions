import { Routes, Route } from "react-router-dom";
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

function App() {

  const navMenu = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Why Us", path: "/why-us" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact", isFooterLink: true },
  ];


  return (
    <>
      <Loader />
      {/* {guestToken && componyProfile ? ( */}
      <div className="min-h-screen bg-bg-main">
        <Header navMenu={navMenu} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/why-us" element={<WhyChooseUsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer navMenu={navMenu} />
      </div>
      {/* ) : (
        <ErrorComponent />
      )} */}
    </>
  );
}

export default App;
