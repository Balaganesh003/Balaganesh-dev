import '@/styles/globals.css';
import MailSideBar from '@/components/MailSideBar';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Provider } from 'react-redux';
import store from '../store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navigation />
      <SocialLinks />
      <Component {...pageProps} />
      <MailSideBar />
      <Footer />
    </Provider>
  );
}
