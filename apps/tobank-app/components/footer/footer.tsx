import styles from './footer.module.less';
import { useMediaQuery } from '../../hooks';
import { Col, Row, Space } from 'antd';
import cx from 'classnames';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const isDesktop = useMediaQuery('(min-width: 1366px)');

  return (
    <footer className={styles.app__layout__footer}>
      <div className="container">
        <Space direction="vertical" className={'w-100'} size={36}>
          <Row gutter={[45, 45]} align="middle" justify="space-between">
            <Col lg={14}>
              <Row gutter={56} wrap={false} align="middle">
                <Col>
                  <img
                    src="/images/tobank-logo.svg"
                    alt=""
                    className="img-fluid"
                    width={300}
                  />
                </Col>
                <Col>
                  <span className={styles.app__layout__footer__intro_text}>
                    توبانک،
                    <br></br>
                    یک نئوبانک همراه شماست!
                  </span>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              <Space align="center" size={32}>
                <img src="/images/Group%2010387.svg" width={93} alt="" />
                <span className={styles.app__layout__footer__intro_small_text}>
                  کلیه حقوق این وب‌سایت متعلق به شرکت ایده پرداز دانش نوین آرشام
                  است .
                </span>
              </Space>
            </Col>
          </Row>
          <hr className={styles.app__layout__footer__divider} />
          <Row gutter={isDesktop ? 160 : 40}>
            <Col xs={24} lg={{ span: 6 }}>
              <Space direction="vertical" size={32}>
                <span className={styles.app__layout__footer__list_title}>
                  ارتباط با ما
                </span>
                <Space direction="vertical" size={16}>
                  <Space>
                    <img src="/images/Light_Icon.svg" alt="" />
                    <span className={styles.app__layout__footer__list_text}>
                      تهران،سعادت آباد، بلوار فرهنگ، نبش کوچه نور، پلاک 6
                    </span>
                  </Space>
                  <Space>
                    <img src="/images/Light_Icon%20(1).svg" alt="" />
                    <span className={styles.app__layout__footer__list_text}>
                      021-23950 / داخلی 7
                    </span>
                  </Space>
                  <Space>
                    <img src="/images/Light_Icon%20(2).svg" alt="" />
                    <span className={styles.app__layout__footer__list_text}>
                      info@tobank.ir
                    </span>
                  </Space>
                </Space>
              </Space>
            </Col>
            <Col
              xs={24}
              lg={{ span: 6 }}
              className={cx({ 'mt-5': !isDesktop })}
            >
              <Space direction="vertical" size={32}>
                <span className={styles.app__layout__footer__list_title}>
                  دسترسی سریع
                </span>
                <Space direction="vertical" size={16}>
                  <Link href="/check-services/pichak-system">
                    <span className={styles.app__layout__footer__list_text}>
                      سامانه پیچک درتوبانک
                    </span>
                  </Link>
                  <a
                    href="https://gardeshpay.ir/"
                    className={styles.app__layout__footer__list_text}
                  >
                    پذیرندگان
                  </a>
                  <a
                    href="https://gardeshpay.ir/"
                    className={styles.app__layout__footer__list_text}
                  >
                    گردش پی
                  </a>
                </Space>
              </Space>
            </Col>
            <Col
              xs={24}
              lg={{ span: 6 }}
              className={cx({ 'mt-5': !isDesktop })}
            >
              <Space direction="vertical" size={32}>
                <span className={styles.app__layout__footer__list_title}>
                  دسترسی سریع
                </span>
                <Space direction="vertical" size={16}>
                  <Link href="/terms">
                    <span className={styles.app__layout__footer__list_text}>
                      قوانین و مقررات
                    </span>
                  </Link>
                  <Link href="/faq">
                    <span className={styles.app__layout__footer__list_text}>
                      سوالات متداول
                    </span>
                  </Link>
                  <Link href="/contact-us">
                    <span className={styles.app__layout__footer__list_text}>
                      تماس با ما
                    </span>
                  </Link>
                </Space>
              </Space>
            </Col>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 6 }}
              className={cx({ 'mt-5': !isDesktop })}
            >
              <Space direction="vertical" size={32}>
                <span className={styles.app__layout__footer__list_title}>
                  با ما در ارتباط باشید
                </span>
                <Space direction="vertical" size={25}>
                  <Space size={10}>
                    <a href="https://www.instagram.com/gardeshpay/">
                      <img src="/images/Button.svg" alt="" />
                      <span className={styles.app__layout__footer__list_text}>
                        بانک گردشگری
                      </span>
                    </a>
                  </Space>
                  <Space size={10}>
                    <a href="https://www.instagram.com/tobank.ir/">
                      <img src="/images/Button.svg" alt="" />
                      <span className={styles.app__layout__footer__list_text}>
                        {' '}
                        توبانک
                      </span>
                    </a>
                  </Space>
                </Space>
              </Space>
            </Col>
          </Row>
        </Space>
      </div>
    </footer>
  );
}

export default Footer;
