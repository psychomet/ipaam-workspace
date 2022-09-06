import styles from './index.module.less';
import { items } from '../../../mocks/menu-data';
import { Space } from 'antd';

/* eslint-disable-next-line */
export interface BirthCertificateMainTemplateProps {}

export function BirthCertificateMainTemplate(
  props: BirthCertificateMainTemplateProps
) {
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
          <img src="/app/Group 12663.png" className="img-fluid" alt="" />
        </Space>
        <Space direction={'vertical'} align={'center'} size={16}>
          <Space align={'center'}>
            <div className="box">
              <Space size={16}>
                <img src="/app/path_4805.svg" alt="" />
                <span> الگوی غیر قابل قبول </span>
              </Space>
            </div>
          </Space>
          <Space align={'center'}>
            <img src="/app/Group 12664.png" className="img-fluid" alt="" />
          </Space>
        </Space>
      </Space>
    </>
  );
}

export default BirthCertificateMainTemplate;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
