import styles from './index.module.less';
import { items } from '../../../mocks/menu-data';
import { Space } from 'antd';

/* eslint-disable-next-line */
export interface Ehraz11Props {}

export function Ehraz11(props: Ehraz11Props) {
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
                  تصویر کارت ملی کاملا واضح باشد
                </small>
              </Space>
              <img src="/app/Group 12660.png" className="img-fluid" alt="" />
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
                  تصویر کارت ملی کاملا واضح باشد
                </small>
              </Space>
              <img src="/app/Group 12661.png" className="img-fluid" alt="" />
            </Space>
          </Space>
          <Space align={'center'}>
            <Space direction={'vertical'} align={'center'} size={10}>
              <Space size={5} align={'center'}>
                <div
                  style={{ width: '5px', background: '#707070', height: '2px' }}
                ></div>
                <small style={{ fontSize: '10px' }}>
                  تصویر کارت ملی به صورت کامل در کادر قرار بگیرد
                </small>
              </Space>
              <img src="/app/Group 12662.png" className="img-fluid" alt="" />
            </Space>
          </Space>
          <Space align={'center'}>
            <Space direction={'vertical'} align={'center'} size={10}>
              <Space size={5} align={'center'}>
                <div
                  style={{ width: '5px', background: '#707070', height: '2px' }}
                ></div>
                <small style={{ fontSize: '10px' }}>
                  تصویر کارت ملی قدیمی قابل قبول نمی‌باشد
                </small>
              </Space>
              <img
                src="/app/تصویر روی کارت ملی قدیمی.png"
                className="img-fluid"
                alt=""
              />
            </Space>
          </Space>
        </Space>
      </Space>
    </>
  );
}

export default Ehraz11;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
