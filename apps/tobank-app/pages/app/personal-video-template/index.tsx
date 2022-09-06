import styles from './index.module.less';
import { items } from '../../../mocks/menu-data';
import { Space } from 'antd';

/* eslint-disable-next-line */
export interface PersonalVideoTemplateProps {}

export function PersonalVideoTemplate(props: PersonalVideoTemplateProps) {
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
          <div className="box text-center">
            <video
              autoPlay={true}
              loop={true}
              type={'video/mp4'}
              src="/app/20220704_131406.mp4"
              className="img-fluid rounded"
            ></video>
          </div>
        </Space>
      </Space>
    </>
  );
}

export default PersonalVideoTemplate;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
