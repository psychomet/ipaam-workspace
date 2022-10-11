import styles from './footer.module.less';
import { useMediaQuery } from '../../hooks';
import { Col, Row, Space, Divider } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import cx from 'classnames';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const isDesktop = useMediaQuery('(min-width: 1366px)');

  return (
    <footer className={styles.app__layout__footer}>
      <div className="container">
        <Space direction="vertical" className={'w-100'} size={24}>
          <Row gutter={[45, 45]} align="middle" justify="space-between">
            <Col xs={24} lg={14}>
              <Row
                gutter={[56, 32]}
                wrap={!isDesktop}
                align="middle"
                justify={!isDesktop ? 'center' : 'start'}
              >
                <Col xs={24} sm={8}>
                  <img
                    src="/images/tobank-logo.svg"
                    alt=""
                    className="img-fluid"
                    width={200}
                  />
                </Col>
                <Col xs={24} md={16}>
                  <span className={styles.app__layout__footer__intro_text}>
                    TOBANK، یک شعبه مجازی همراه شماست!
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider className={styles.app__layout__divider} />
          <Row gutter={isDesktop ? 80 : 40}>
            <Col xs={24} lg={{ span: 6 }}>
              <Space direction="vertical" size={32}>
                <span className={styles.app__layout__footer__list_title}>
                  ارتباط با ما
                </span>
                <Space direction="vertical" size={16}>
                  <Space direction="horizontal">
                    <EnvironmentOutlined />
                    <span className={styles.app__layout__footer__list_text}>
                      تهران،سعادت آباد، بلوار فرهنگ، نبش کوچه نور، پلاک 6
                    </span>
                  </Space>
                  <Space direction="horizontal">
                    <PhoneOutlined />
                    <span className={styles.app__layout__footer__list_text}>
                      <a href="tel:+982123950"> 021-23950 / داخلی 7</a>
                    </span>
                  </Space>
                  <Space direction="horizontal">
                    <MailOutlined />
                    <span className={styles.app__layout__footer__list_text}>
                      <a href="mailto:info@tobank.ir">info@tobank.ir</a>
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
                  لینک‌های مهم
                </span>
                <Space direction="vertical" size={16}>
                  <Link href="/check-services/pichak-system">
                    <a className={styles.app__layout__footer__list_text}>
                      چک صیادی درTOBANK
                    </a>
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
                    <a className={styles.app__layout__footer__list_text}>
                      قوانین و مقررات
                    </a>
                  </Link>
                  <Link href="/faq">
                    <a className={styles.app__layout__footer__list_text}>
                      سوالات متداول
                    </a>
                  </Link>
                  <Link href="/contact-us">
                    <a className={styles.app__layout__footer__list_text}>
                      تماس با ما
                    </a>
                  </Link>
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
                  مجوز‌‌های ما
                </span>
                <Space direction="horizontal" size={16}>
                  <img
                    referrerPolicy={'origin'}
                    id="rgvjjxlznbqefukzjxlzjxlz"
                    style={{ cursor: 'pointer', height: '100px' }}
                    onClick={() =>
                      window.open(
                        'https://logo.samandehi.ir/Verify.aspx?id=312611&p=xlaorfthuiwkgvkarfthrfth',
                        'Popup',
                        'toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30'
                      )
                    }
                    alt="logo-samandehi"
                    src="https://logo.samandehi.ir/logo.aspx?id=312611&p=qftinbpdodrfwlbqnbpdnbpd"
                  />
                  <a
                    href={
                      'https://logo.saramad.ir/verify.aspx?CodeShamad=1-2-694072-63-0-2'
                    }
                    className={styles.app__layout__footer__intro_small_text}
                  >
                    <img
                      src="/assets/saramad-logo.svg"
                      style={{ height: '100px' }}
                      alt=""
                    />
                  </a>
                  {/*<img src="/images/Group%2010387.svg" width={93} alt="" />*/}
                </Space>
              </Space>
            </Col>
          </Row>
          <Row
            className={`${styles.app__layout__footer__contact_us}`}
            gutter={[12, 12]}
            align="middle"
            style={{ minHeight: 100 }}
          >
            <Col xs={24} md={{ span: 8 }}>
              <span
                className={`styles.app__layout__footer__list_text`}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                ما را در شبکه های اجتماعی دنبال کنید
              </span>
            </Col>
            <Col
              style={{ textAlign: 'right' }}
              xs={12}
              md={{ span: 4 }}
              className={styles.textSocialGardesh}
            >
              <a href="https://instagram.com/tourism.bank?igshid=YmMyMTA2M2Y=">
                <Space>
                  <img src="/images/Button.svg" alt="" />
                  <span className={styles.app__layout__footer__list_text}>
                    بانک گردشگری
                  </span>
                </Space>
              </a>
            </Col>
            <Col
              style={{ textAlign: 'right' }}
              xs={12}
              md={{ span: 4 }}
              className={styles.textSocialToBank}
            >
              <a href="https://www.instagram.com/tobank.ir/">
                <Space>
                  <img src="/images/Button.svg" alt="" />
                  <span className={styles.app__layout__footer__list_text}>
                    TOBANK
                  </span>
                </Space>
              </a>
            </Col>
            <Col md={{ span: 8 }}>
              {/*<span className={styles.app__layout__footer__intro_small_text}>*/}
              {/*  کلیه حقوق این وب‌سایت متعلق به بانک گردشگری است.*/}
              {/*</span> */}
              <a
                href={'https://gardeshpay.ir'}
                className={styles.app__layout__footer__intro_small_text}
              >
                <Space>
                  <small>قدرت گرفته از</small>
                  <img src="/images/لوگوی%20گردش%20پی@2x.svg" alt="" />
                </Space>
              </a>
              {/* <a
                href={
                  'https://logo.saramad.ir/verify.aspx?CodeShamad=1-2-694072-63-0-2'
                }
                className={styles.app__layout__footer__intro_small_text}
              >
                <Space>
                  <small>مجوز نشر</small>
                  <img src="/assets/saramad-logo.svg" alt="" />
                </Space>
              </a> */}
            </Col>
          </Row>
        </Space>
        <Row
          gutter={[12, 12]}
          align="middle"
          justify={'center'}
          className={cx('py-3', styles.app__layout__powered)}
        >
          <Col>
            <small>کلیه حقوق این وب‌سایت متعلق به شرکت ایده پرداز دانش نوین آرشام است.</small>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
