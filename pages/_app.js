import '@/styles/globals.css';
import MailSideBar from '@/components/MailSideBar';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <SocialLinks />
      <Component {...pageProps} />
      <MailSideBar />
      <Footer />
    </>
  );
}
