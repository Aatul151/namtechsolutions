import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Loader } from './components/ui/Loader';
import { useEffect, useState } from 'react';
import { useComponyDetail } from './context/componyContext';
import { getFormEntriesByFormName } from './services/formservices';
import { FORMNAMES } from './utilities/codes';
import { fetchGuestUserToken } from './services/authservices';
import { useLoader } from './context/LoaderContext';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const { setLoading } = useLoader();
  const { setComponyProfile, componyProfile } = useComponyDetail();
  const [guestToken, setGuestToken] = useState<string | null>(null)

  useEffect(() => {
    fetchGuestToken();
  }, []);

  const fetchGuestToken = async () => {
    try {
      setLoading(true)
      const responseToken = await fetchGuestUserToken();
      if (responseToken) {
        setGuestToken(responseToken)
        getComponyProfile();
      }
      setLoading(false)
    } catch (error: any) {
      setLoading(false)
    }
  };


  const getComponyProfile = async () => {
    try {
      const data = await getFormEntriesByFormName(FORMNAMES.PROFILE);
      if (data) {
        const resData = data?.[0]?.payload
        localStorage.setItem('logo', resData?.secondary_logo?.fileUrl)
        setComponyProfile(resData)
      };
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {(guestToken && componyProfile) &&
        <div className="min-h-screen bg-bg-main">
          <Loader />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/why-us" element={<WhyChooseUsPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      }
    </>
  );
}

export default App;
