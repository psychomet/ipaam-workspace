import React from 'react';

import { PageHeader, Space, Typography, Row, Col, Collapse } from 'antd';
import { useMediaQuery } from '../../hooks';
import styles from './styles.module.less';

const { Title, Text } = Typography;
const { Panel } = Collapse;

interface IProps {}

const AboutUs: React.FC<IProps> = (props) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="container">
      <PageHeader title="درباره ما">
        <Space direction="vertical" className="w-100" size={36}>
          <Row
            justify="space-between"
            gutter={[32, 32]}
            align="middle"
            wrap={isMobile}
          >
            <Col flex="auto">
              <Space direction="vertical" size={16}>
                <span className={styles.aboutus__title}>درباره توبانک</span>
                <Text className={styles.aboutus__text}>
                  {' '}
                  توبانک یکی از محصولات شرکت دانش‌بنیان ایپام است که پس از کسب
                  مجوز «پرداخت‌یاری» از بانک مرکزی جمهوری اسلامی و شاپرک به
                  ارائه خدمات متنوع پرداخت می‌پردازد. امنیت، سرعت، سادگی، تجربه
                  کاربری منحصربه‌فرد، پوشش طیف گسترده‌ای از خدمات متنوع،
                  بی‌نیازی از بسترهای مختلف دیگر و قابل اعتماد بودن، تمام آن
                  چیزی است که مصرف‌کنندگان یک بستر خدماتی در حوزه مالی به آن
                  نیاز دارند. با توبانک نیاز به جابه‌جایی‌ها و به‌کارگیری
                  روش‌های سنتی برای هرگونه پرداخت اعم از نقل و انتقال پول و
                  سرمایه‌گذاری، برطرف می‌شود.{' '}
                </Text>
              </Space>
            </Col>
            <Col lg={8}>
              {/*<Space size={[8, 16]} wrap></Space>*/}
              <div className="tile-columns">
                <img
                  src="/images/tobanklogo.png"
                  className="img-fluid tile__image"
                  alt=""
                />

                <img
                  src="/images/Mask%20group.png"
                  className="img-fluid tile__image"
                  alt=""
                />
                <img
                  src="/images/neobank.png"
                  className="img-fluid tile__image"
                  alt=""
                />
                <img
                  src="/images/shape-tobank.png"
                  className="img-fluid tile__image"
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <Row
            justify="space-between"
            align="middle"
            wrap={isMobile}
            gutter={[32, 32]}
          >
            <Col lg={8}>
              {/*<Space size={[8, 16]} wrap></Space>*/}
              <div className="tile-columns">
                <img
                  src="/images/pardakhtsazi.png"
                  className="img-fluid tile__image"
                  alt=""
                />
                <img
                  src="/images/gardeshpay.png"
                  className="img-fluid tile__image"
                  alt=""
                />
                <img
                  src="/images/ipaam.png"
                  className="img-fluid tile__image"
                  alt=""
                />

                <img
                  src="/images/hotel%20sys.png"
                  className="img-fluid tile__image"
                  alt=""
                />
              </div>
            </Col>
            <Col flex="auto">
              <Space direction="vertical" size={16}>
                <span className={styles.aboutus__title}>درباره توبانک</span>
                <Text className={styles.aboutus__text}>
                  {' '}
                  توبانک یکی از محصولات شرکت دانش‌بنیان ایپام است که پس از کسب
                  مجوز «پرداخت‌یاری» از بانک مرکزی جمهوری اسلامی و شاپرک به
                  ارائه خدمات متنوع پرداخت می‌پردازد. امنیت، سرعت، سادگی، تجربه
                  کاربری منحصربه‌فرد، پوشش طیف گسترده‌ای از خدمات متنوع،
                  بی‌نیازی از بسترهای مختلف دیگر و قابل اعتماد بودن، تمام آن
                  چیزی است که مصرف‌کنندگان یک بستر خدماتی در حوزه مالی به آن
                  نیاز دارند. با توبانک نیاز به جابه‌جایی‌ها و به‌کارگیری
                  روش‌های سنتی برای هرگونه پرداخت اعم از نقل و انتقال پول و
                  سرمایه‌گذاری، برطرف می‌شود.{' '}
                </Text>
              </Space>
            </Col>
          </Row>
        </Space>
      </PageHeader>
    </div>
  );
};
export default AboutUs;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'master',
      name: 'درباره ما',
    },
  };
};
