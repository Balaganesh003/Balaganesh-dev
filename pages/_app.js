import '@/styles/globals.css';
import MailSideBar from '@/components/MailSideBar';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import { Provider } from 'react-redux';
import store from '../store';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navigation />
      <SocialLinks />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
      <MailSideBar />
      <Footer />
      <ScrollToTop />
    </Provider>
  );
}
