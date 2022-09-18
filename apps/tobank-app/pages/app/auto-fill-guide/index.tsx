import styles from './index.module.less';
import { items } from '../../../mocks/menu-data';
import { Space } from 'antd';

/* eslint-disable-next-line */
export interface AutoFillGuideProps {}

export function AutoFillGuide(props: AutoFillGuideProps) {
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
                طبق دستورالعمل بانک مرکزی و به جهت جلوگیری از کلاهبرداری،
                امکان ورود کد پیامک شده به صورت دستی وجود ندارد لذا
                می‌بایست طبق تصویر، کد پیامک شده را انتخاب کنید.
              </p>
            </li>
          </ul>
          <img src="/app/group_12752.webp" className="img-fluid" alt="" />
        </Space>
      </Space>
    </>
  );
}

export default AutoFillGuide;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
