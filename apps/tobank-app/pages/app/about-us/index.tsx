import styles from './index.module.less';
import { items } from '../../../mocks/menu-data';
import { Space } from 'antd';
import { useEffect, useState } from 'react';
import { downupToCode } from '../../../utils';

/* eslint-disable-next-line */
export interface AboutUsProps {
  html: string;
}

export function AboutUs(props: AboutUsProps) {
  const [html, setHtml] = useState<string>(
    props.html['data'].data.html_content
  );

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
}

export default AboutUs;

// export const getStaticProps = async () => {
//   return {
//     props: {
//       layout: 'app',
//     },
//   };
// };

export async function getServerSideProps(context) {
  const res = await fetch(`https://appapi.gardeshpay.ir/api/v1.0/page/about`);
  const data = await res.json();
  return {
    props: {
      layout: 'app',
      html: JSON.parse(downupToCode(data.data)),
    }, // will be passed to the page component as props
  };
}
