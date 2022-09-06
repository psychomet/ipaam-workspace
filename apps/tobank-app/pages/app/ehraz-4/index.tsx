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
      {/*<div fxLayout="column" fxLayoutGap="32px" className="pb-3 d-flex flex-column">*/}
      {/*  <div fxLayout="column" fxLayoutGap="16px">*/}
      {/*    /!*<div fxLayout="row" fxLayoutAlign="center ">*!/*/}
      {/*    /!*  <div className="box">*!/*/}
      {/*    /!*    <div fxLayout="row" fxLayoutGap="10px">*!/*/}
      {/*    /!*      <img src="assets/images/app/path_4804.svg" alt="" />*!/*/}
      {/*    /!*      <span> الگوی قابل قبول </span>*!/*/}
      {/*    /!*    </div>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    <div fxLayout="row" fxLayoutAlign="center ">*/}
      {/*      <div fxLayout="column" fxLayoutGap="10px">*/}
      {/*        <div fxLayout="row" fxLayoutGap="5px" fxLayoutAlign=" center">*/}
      {/*          <div style="width: 5px; background: #707070; height: 2px"></div>*/}
      {/*          <small style="font-size: 10px">*/}
      {/*            تصویر شناسنامه کاملا واضح باشد*/}
      {/*          </small>*/}
      {/*        </div>*/}
      {/*        <div fxLayout="row" fxLayoutGap="5px" fxLayoutAlign=" center">*/}
      {/*          <div style="width: 5px; background: #707070; height: 2px"></div>*/}
      {/*          <small style="font-size: 10px">*/}
      {/*            تصویر شناسنامه جدید یا قدیم قابل قبول است*/}
      {/*          </small>*/}
      {/*        </div>*/}
      {/*        <img*/}
      {/*          src="assets/images/app/Group 12666.png"*/}
      {/*          className="img-fluid"*/}
      {/*          alt=""*/}
      {/*        />*/}
      {/*        <img*/}
      {/*          src="assets/images/app/شناسنامه (4).png"*/}
      {/*          className="img-fluid"*/}
      {/*          alt=""*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div fxLayout="column" fxLayoutGap="16px">*/}
      {/*    <div fxLayout="row" fxLayoutAlign="center ">*/}
      {/*      <div className="box">*/}
      {/*        <div fxLayout="row" fxLayoutGap="10px">*/}
      {/*          <img*/}
      {/*            src="assets/images/app/path_4805.svg"*/}
      {/*            className="img-fluid"*/}
      {/*            alt=""*/}
      {/*          />*/}
      {/*          <span> الگوی غیر قابل قبول </span>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div fxLayout="row" fxLayoutAlign="center ">*/}
      {/*      <div fxLayout="column" fxLayoutGap="10px">*/}
      {/*        <div fxLayout="row" fxLayoutGap="5px" fxLayoutAlign=" center">*/}
      {/*          <div style="width: 5px; background: #707070; height: 2px"></div>*/}
      {/*          <small style="font-size: 10px">*/}
      {/*            تصویر شناسنامه به صورت افقی قابل قبول نیست*/}
      {/*          </small>*/}
      {/*        </div>*/}
      {/*        <img*/}
      {/*          src="assets/images/app/شناسنامه (3).png"*/}
      {/*          className="img-fluid"*/}
      {/*          alt=""*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div fxLayout="row" fxLayoutAlign="center ">*/}
      {/*      <div fxLayout="column" fxLayoutGap="10px">*/}
      {/*        <div fxLayout="row" fxLayoutGap="5px" fxLayoutAlign=" center">*/}
      {/*          <div style="width: 5px; background: #707070; height: 2px"></div>*/}
      {/*          <small style="font-size: 10px">*/}
      {/*            تصویر شناسنامه به صورت کامل در کادر قرار بگیرد*/}
      {/*          </small>*/}
      {/*        </div>*/}
      {/*        <img*/}
      {/*          src="assets/images/app/Group 12671.png"*/}
      {/*          className="img-fluid"*/}
      {/*          alt=""*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
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
