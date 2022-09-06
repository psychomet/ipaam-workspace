import styles from './index.module.less';
import { items } from '../../../mocks/menu-data';
import { Space } from 'antd';
import { useEffect, useState } from 'react';
import { downupToCode } from '../../../utils';

/* eslint-disable-next-line */
export interface ContactUsProps {
  html: string;
}

export function ContactUs(props: ContactUsProps) {
  const [html, setHtml] = useState<string>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://appapi.gardeshpay.ir/api/v1.0/page/contact`
      );
      const data = await res.json();
      setHtml(JSON.parse(downupToCode(data.data))['data'].data.html_content);
    };
    fetchData();
  }, []);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
}

export default ContactUs;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
