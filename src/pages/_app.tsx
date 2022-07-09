import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import TagManager from 'react-gtm-module';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const GTM_ID = 'GTM-WCRBTKT';

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({ gtmId: GTM_ID });
    }
  }, []);
  return (
    <ThemeProvider defaultTheme='dark' enableSystem={true} attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
