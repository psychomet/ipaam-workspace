import { AppProps } from 'next/app';
import Head from 'next/head';

import '../public/css/font.css';
import '../public/css/bootstrap.css';
import './styles.less';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { ConfigProvider, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { Footer, Navbar, Sidebar, TopicMenu } from '../components';

function CustomApp({ Component, pageProps }: AppProps) {
  const topics = ['First topic', 'Second topic', 'Third topic'];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState('0');
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );

  return (
    <>
      <Head>
        <title>توبانک | ToBank</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className="app" dir={'rtl'}>
        <ConfigProvider direction="rtl">
          {pageLoading ? (
            <div className="loading-page">
              <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} />} />
            </div>
          ) : (
            <>
              <Navbar menu={Menu} />
              <Layout>
                {/* <Sidebar menu={Menu} /> */}
                <Layout.Content className="content">
                  <Component {...pageProps} />
                </Layout.Content>
                <Footer />
              </Layout>
            </>
          )}
        </ConfigProvider>
      </main>
    </>
  );
}

export default CustomApp;
