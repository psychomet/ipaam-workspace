import { useEffect, useState } from 'react';
import { downupToCode } from '../../../utils';

/* eslint-disable-next-line */
export interface TermsProps {
  html: string;
}

export function Terms(props: TermsProps) {
  const [html, setHtml] = useState<string>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://appapi.gardeshpay.ir/api/v1.0/page/tos`);
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

export default Terms;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
