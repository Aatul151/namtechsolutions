import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Loader } from './components/ui/Loader';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Stats } from './components/sections/Stats';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Testimonials } from './components/sections/Testimonials';
import { CTASection } from './components/sections/CTASection';
import { useEffect, useState } from 'react';
import { useComponyDetail } from './context/componyContext';
import { getFormEntriesByFormName } from './services/formservices';
import { FORMNAMES } from './utilities/codes';
import { fetchGuestUserToken } from './services/authservices';
import { useLoader } from './context/LoaderContext';

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
          <main className="pt-0 md:pt-2">
            <Hero />
            <Services />
            <Stats />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
          </main>
          <Footer />
        </div>
      }
    </>
  );
}

export default App;
