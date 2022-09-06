import React, { useState } from 'react';

import {
  PageHeader,
  Space,
  Typography,
  List,
  Row,
  Col,
  Card,
  Menu,
  MenuProps,
  Collapse,
} from 'antd';

import styles from './styles.module.less';
import { CaretLeftOutlined } from '@ant-design/icons';
import { CaretRightOutlined } from '@ant-design/icons';
import { useMediaQuery } from '../../hooks';
import { FAQData } from '../../mocks/faq-data';

const { Title, Text } = Typography;
const { Panel } = Collapse;

interface IProps {}

const ContactUs: React.FC<IProps> = (props) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="container">
      <PageHeader title="تماس با ما">
        <Space direction="vertical" className="w-100" size={64}>
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={8}>
              <div className={styles.contactus__card}>
                <Space direction="vertical" size={16}>
                  <img
                    src="/images/vuesax_outline_location.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <Text className={styles.contactus__card__text}>
                    تهران،سعادت آباد، بلوار فرهنگ، نبش کوچه نور، پلاک 6
                  </Text>
                </Space>
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <div className={styles.contactus__card}>
                <Space direction="vertical" size={16}>
                  <img
                    src="/images/vuesax_outline_sms.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <Text className={styles.contactus__card__text}>
                    info@tobank.ir
                  </Text>
                </Space>
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <div className={styles.contactus__card}>
                <Space direction="vertical" size={16}>
                  <img
                    src="/images/vuesax_outline_call.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <Text className={styles.contactus__card__text}>
                    021-23950 / داخلی 7
                  </Text>
                </Space>
              </div>
            </Col>
          </Row>
          <Row gutter={[16, 32]} justify="space-between" align="middle">
            <Col>
              <Space direction="vertical" size={16}>
                <span className={styles.contactus__social_media__title}>
                  ما را در شبکه‌‌ های اجتماعی دنبال کنید ‌
                </span>
                <Space size={10}>
                  <a href="https://instagram.com/tourism.bank?igshid=YmMyMTA2M2Y=">
                    <img
                      src="/images/Button.svg"
                      className={styles.contactus__social_media__logo}
                      alt=""
                    />
                    <span className={styles.contactus__social_media__text}>
                      بانک گردشگری
                    </span>
                  </a>
                </Space>
                <Space size={10}>
                  <a href="https://www.instagram.com/tobank.ir/">
                    <img
                      src="/images/Button.svg"
                      className={styles.contactus__social_media__logo}
                      alt=""
                    />
                    <span className={styles.contactus__social_media__text}>
                      TOBANK
                    </span>
                  </a>
                </Space>
              </Space>
            </Col>
            <Col lg={16}>
              <a
                href="https://www.google.com/maps/place/Tourism+bank+central+building/@35.7767682,51.3846946,18z/data=!4m5!3m4!1s0x3f8e07b4798fbebf:0xd088fd53f30c7068!8m2!3d35.7767357!4d51.3858115"
                target="_blank"
              >
                <img src="/images/map.png" className="img-fluid" alt="" />
              </a>
            </Col>
          </Row>
          <div className={styles.contactus__banner}>
            <Row gutter={[56, 32]} align="middle">
              <Col>
                <img
                  src="/images/3d-24-hour-customer-service.png"
                  className="img-fluid"
                  alt=""
                />
              </Col>
              <Col lg={15}>
                <Space direction="vertical" size={16}>
                  <span className={styles.contactus__banner__title}>
                    پشتیبانی آنلاین
                  </span>

                  <p className={styles.contactus__banner__text}>
                    TOBANK یک بانک کاملا آنلاین و به‌صورت شبانه روزی است. شما
                    می‌توانید علاوه بر شماره تماس، از طریق اپلیکیشن TOBANK و
                    انتخاب گزینه هدفون، سوالات و مشکلات خود را با ما در میان
                    بگذارید.
                  </p>
                </Space>
              </Col>
            </Row>
          </div>
        </Space>
      </PageHeader>
    </div>
  );
};
export default ContactUs;

export const getStaticProps = async () => {
  return {
    props: {
      name: 'تماس با ما',
    },
  };
};
