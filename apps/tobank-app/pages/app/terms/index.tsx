import { useEffect, useState } from 'react';
import { downupToCode } from '../../../utils';

/* eslint-disable-next-line */
export interface TermsProps {
  html: string;
}

export function Terms(props: TermsProps) {
  const [html, setHtml] = useState<string>(
    props.html['data'].data.html_content
  );

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
}

export default Terms;

// export const getStaticProps = async () => {
//   return {
//     props: {
//       layout: 'app',
//     },
//   };
// };

export async function getServerSideProps(context) {
  const res = await fetch(`https://appapi.gardeshpay.ir/api/v1.0/page/tos`);
  const data = await res.json();
  return {
    props: {
      layout: 'app',
      html: JSON.parse(downupToCode(data.data)),
    }, // will be passed to the page component as props
  };
}
