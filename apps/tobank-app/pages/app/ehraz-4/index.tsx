import styles from './index.module.less';
import { items } from '../../../mocks/menu-data';
import { Space } from 'antd';

/* eslint-disable-next-line */
export interface Ehraz4Props {}

export function Ehraz4(props: Ehraz4Props) {
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
          <Space align={'center'}>
            <Space direction={'vertical'} align={'center'} size={10}>
              <Space size={5} align={'center'}>
                <div
                  style={{ width: '5px', background: '#707070', height: '2px' }}
                ></div>
                <small style={{ fontSize: '10px' }}>
                  تصویر شناسنامه کاملا واضح باشد
                </small>
              </Space>
              <Space size={5} align={'center'}>
                <div
                  style={{ width: '5px', background: '#707070', height: '2px' }}
                ></div>
                <small style={{ fontSize: '10px' }}>
                  تصویر شناسنامه کاملا واضح باشد
                </small>
              </Space>
              <img src="/app/Group 12666.png" className="img-fluid" alt="" />
              <img src="/app/شناسنامه (4).png" className="img-fluid" alt="" />
            </Space>
          </Space>
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
            <Space direction={'vertical'} align={'center'} size={10}>
              <Space size={5} align={'center'}>
                <div
                  style={{ width: '5px', background: '#707070', height: '2px' }}
                ></div>
                <small style={{ fontSize: '10px' }}>
                  تصویر شناسنامه کاملا واضح باشد
                </small>
              </Space>
              <Space size={5} align={'center'}>
                <div
                  style={{ width: '5px', background: '#707070', height: '2px' }}
                ></div>
                <small style={{ fontSize: '10px' }}>
                  تصویر شناسنامه به صورت افقی قابل قبول نیست
                </small>
              </Space>
              <img src="/app/شناسنامه (3).png" className="img-fluid" alt="" />
            </Space>
          </Space>
          <Space align={'center'}>
            <Space direction={'vertical'} align={'center'} size={10}>
              <Space size={5} align={'center'}>
                <div
                  style={{ width: '5px', background: '#707070', height: '2px' }}
                ></div>
                <small style={{ fontSize: '10px' }}>
                  تصویر شناسنامه کاملا واضح باشد
                </small>
              </Space>
              <Space size={5} align={'center'}>
                <div
                  style={{ width: '5px', background: '#707070', height: '2px' }}
                ></div>
                <small style={{ fontSize: '10px' }}>
                  تصویر شناسنامه به صورت کامل در کادر قرار بگیرد
                </small>
              </Space>
              <img src="/app/Group 12671.png" className="img-fluid" alt="" />
            </Space>
          </Space>
        </Space>
      </Space>
    </>
  );
}

export default Ehraz4;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
