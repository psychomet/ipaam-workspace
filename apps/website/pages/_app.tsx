import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.less';
import { ConfigProvider, theme } from 'antd';
import faIR from 'antd/locale/fa_IR';
import GlobalLayout from '../layouts/global-layout/global-layout';
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { DirectionType } from 'antd/es/config-provider';
import { useSearchParams } from 'next/navigation';
import SiteContext from '../providers/SiteContext';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

if (!process.browser) React.useLayoutEffect = React.useEffect;
const RESPONSIVE_MOBILE = 768;

function CustomApp({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [direction, setDirection] = React.useState<DirectionType>('ltr');
  // const searchParams = useSearchParams();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const updateMobileMode = () => {
    setIsMobile(window.innerWidth < RESPONSIVE_MOBILE);
  };

  useEffect(() => {
    // Handle direction
    // const queryDirection = searchParams?.get('direction');
    // setDirection(queryDirection === 'rtl' ? 'rtl' : 'ltr');

    // Handle mobile mode
    updateMobileMode();
    window.addEventListener('resize', updateMobileMode);
    return () => {
      window.removeEventListener('resize', updateMobileMode);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <>
      <Helmet
        encodeSpecialCharacters={false}
        htmlAttributes={{ lang: 'fa' }}
        title="Hello next.js!"
        meta={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          { property: 'og:title', content: 'Hello next.js!' },
        ]}
      />
      {/*<main className="app">*/}

      {/*</main>*/}
      <SiteContext.Provider value={{ isMobile, direction }}>
        <GlobalLayout>
          <div className={'example-container'}>
            <Layout className={'example-sidenav-container'}>
              <Header>Header</Header>
              <Content>
                <Component {...pageProps} />
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </div>
        </GlobalLayout>
      </SiteContext.Provider>
    </>
  );
}

export default CustomApp;
