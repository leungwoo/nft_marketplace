import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import { Footer, Navbar } from '../components/index';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (

  <ThemeProvider attribute="class">
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/6e770e1687.js" crossorigin="anonymous" />
  </ThemeProvider>

);
export default MyApp;
