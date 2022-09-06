import styles from './index.module.less';
import { items } from '../../../mocks/menu-data';
import { Space } from 'antd';

/* eslint-disable-next-line */
export interface SignatureTemplateProps {}

export function SignatureTemplate(props: SignatureTemplateProps) {
  return (
    <>
      <Space direction={'vertical'} size={32} className="pb-3">
        <Space direction={'vertical'} size={16} align={'center'}>
          <Space align={'center'}>
            <div className="box">
              <Space size={16}>
                <img src="/app/path_4804.svg" alt="" />
                <span> الگوی قابل قبول </span>
              </Space>
            </div>
          </Space>
          <ul style={{ paddingRight: '30px', paddingLeft: 0 }}>
            <li>
              <p style={{ fontSize: 12 }}>
                نمونه امضا باید واضح و بدون خط‌خوردگی و در مرکز کادر تعیین شده
                باشد
              </p>
            </li>
          </ul>
          <img src="/app/group_12730.png" className="img-fluid" alt="" />
        </Space>
      </Space>
    </>
  );
}

export default SignatureTemplate;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
