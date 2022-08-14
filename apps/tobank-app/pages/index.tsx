import styles from './index.module.less';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '../hooks';
import { Button, Col, Modal, Row, Space, Typography } from 'antd';
const { Title, Text } = Typography;
import cx from 'classnames';
import { homeData } from '../mocks/home-data';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.less file.
   */
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [androidAddress, setAndroidAddress] = useState<{
    regular: string;
    armeab: string;
  }>();

  const isDesktop = useMediaQuery('(min-width: 1366px)');

  const bsDeUr = (str: string) => {
    if (str.length % 4 != 0) str += '==='.slice(0, 4 - (str.length % 4));
    return str.replace(/-/g, '+').replace(/_/g, '/');
  };

  const downupToCode = (tk: string): string => {
    const mnTk: string = String(tk).substring(0, tk.length - 2);

    let index: number = 1;
    for (let i = 1; i < mnTk.length; i++) {
      if (/^[a-z]+$/i.test(tk[i])) {
        break;
      }
      index += 1;
    }

    const rndNum: string = mnTk.substring(1, index);
    const fnTk: string = mnTk.substring(index + 1);

    const fPart: string = fnTk.substring(fnTk.length - Number(rndNum));
    const lPart: string = fnTk.substring(0, fnTk.length - Number(rndNum) - 20);

    const exTk: string = fPart + lPart;

    const rvTk: string = exTk.split('').reverse().join('');
    const dcTk: string = decodeURIComponent(escape(window.atob(bsDeUr(rvTk))));

    return dcTk;
  };

  useEffect(() => {
    fetch(
      `https://appapi.gardeshpay.ir/api/v1.0/config/apps/version/last?type=and&time=${new Date().getTime()}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          const res = JSON.parse(downupToCode(result.data));
          // this.androidAddress = ;
          setAndroidAddress({
            regular: res?.data?.link,
            armeab: res.data.link_32,
          });
          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // this.setState({
          //   isLoaded: true,
          //   error
          // });
        }
      );
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Space className="w-100" direction="vertical" size={64}>
      <div className="container">
        <div className={styles.home__intro}>
          <Row gutter={[32, 43]}>
            <Col offset={isDesktop && 2}>
              <img
                src="/images/Group%2010353@2x.png"
                className="img-fluid"
                width={450}
                alt=""
              />
            </Col>
            <Col lg={11}>
              <Space
                className="h-100 justify-content-center"
                direction="vertical"
                align="end"
              >
                <Title level={!isDesktop ? 3 : 1}>
                  <span className="primary-color">توبانک،</span> یک نئوبانک
                  همراه شماست!
                </Title>
                <Text className={styles.home__intro__text}>
                  روی گوشیت حساب باز کن! از احراز هویت آنلاین و افتتاح سپرده آنی
                  گرفته تا صندوق سرمایه‌گذاری و ثبت‌نام وام ازدواج.
                </Text>

                <Row className="mt-5" gutter={[isDesktop ? 32 : 0, 16]}>
                  <Col xs={{ order: 1 }}>
                    <Button href="#download-panel" type="primary" size="large">
                      <img
                        src="/images/Download.svg"
                        className={styles.download_icon_2}
                      ></img>
                      دانلود اپلیکیشن
                    </Button>
                  </Col>
                  <Col>
                    <Button type="text" size="large" href="/faq">
                      چطور کار می‌کند؟
                      <img
                        src="/images/next-arrow.svg"
                        className={styles.download_icon_1}
                      ></img>
                    </Button>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.home__edgeImageArea}>
        <img
          src="/images/Ellipse%20126.svg"
          className={cx(styles.home__edgeImage, 'img-fluid')}
          alt=""
        />
        <div className="container">
          <Row gutter={32} align="middle">
            <Col lg={{ span: 14, offset: 1 }}>
              <Space direction="vertical" size={64}>
                <Title level={2} className={styles.section_title}>
                  شعبه شخصی
                  <br />
                  <span className="primary-color">توبانک</span>
                </Title>
                <Row gutter={[32, 40]}>
                  {homeData.secondSection.features.map((feature, index) => (
                    <Col key={index} lg={12}>
                      <Space direction="vertical" size={12}>
                        <span className={styles.home__edgeFeatureBoxTitle}>
                          {feature.title}
                        </span>
                        <Text className={styles.home__edgeFeatureBoxDesc}>
                          <div className={styles.home__home_desc}></div>

                          {feature.text}
                        </Text>
                      </Space>
                    </Col>
                  ))}
                </Row>
              </Space>
            </Col>
            <Col>
              <img
                src="/images/2.png"
                className={`${styles.home__edgeImagePhone} img-fluid`}
                alt=""
              />
              <img
                src="/images/ToBank%20Logo%20Shape%201.png"
                className={styles.home__edgeSmallImage}
                alt=""
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="container" style={{ zIndex: 500, marginTop: 100 }}>
        <Space direction="vertical" size={56} align="center">
          <span className={styles.home__sectionThree__title}>خدمات توبانک</span>
          <Row gutter={[0, 32]}>
            {homeData.sectionThree.map((item, index) => (
              <Col lg={6} key={index} xs={{ span: 12 }}>
                <Space size={16}>
                  <img
                    src={item.image}
                    className={styles.home__sectionThree__featureIcon}
                    alt=""
                  />
                  <span className={styles.home__sectionThree__featureTitle}>
                    {item.label}
                  </span>
                </Space>
              </Col>
            ))}
          </Row>
        </Space>
      </div>
      <div className="container" style={{ marginTop: 100 }}>
        <Row gutter={[32, 32]} align="middle" justify="space-between">
          <Col lg={8}>
            <Space direction="vertical" size={32}>
              <span className={styles.home__sectionFour__title}>
                انتخاب رنگ دلخواه شما
              </span>
              <Text className={styles.home__sectionFour__text}>
                علاوه بر کارت‌های متنوع بانک گردشگری، رنگ کارت بانکی خودتون رو
                نیز انتخاب کنید.
              </Text>
            </Space>
          </Col>
          <Col>
            <img src="/images/Group 10388.png" className="img-fluid" alt="" />
          </Col>
        </Row>
      </div>
      <div className="container">
        <div className={styles.home__sectionFive__card}>
          <Row gutter={[32, 32]}>
            <Col>
              <img
                src="/images/3.png"
                className={`${styles.home__sectionFive__image} img-fluid`}
                alt=""
              />
              <img
                src="/images/Ellipse%20127.svg"
                className={`${styles.home__sectionFive__absolute__image_2} img-fluid`}
                alt=""
              />
            </Col>
            <Col lg={13}>
              <Space direction="vertical" size={32}>
                <span className={styles.home__sectionFive__title}>
                  باشگاه مشتریان توبانک
                </span>
                <p className={styles.home__sectionFive__desc}>
                  شما می‌توانید در باشگاه مشتریان توبانک از خدمات تخفیفی باشگاه
                  بهره‌مند شده یا امتیازهای خود را به شانس شرکت در قرعه‌کشی بانک
                  گردشگری تبدیل کنید.
                </p>
                <Row gutter={[0, 32]}>
                  <Col lg={12}>
                    <Space size={16}>
                      <img
                        src="/images/vuesax_outline_tick-square.svg"
                        className="img-fluid"
                        alt=""
                        style={{ width: 24, marginTop: 25 }}
                      />
                      <span
                        className={styles.home__sectionFive__feature__title}
                      >
                        پیش‌بینی مسابقات فوتبال
                      </span>
                    </Space>
                  </Col>
                  <Col lg={12}>
                    <Space size={16}>
                      <img
                        src="/images/vuesax_outline_tick-square.svg"
                        className="img-fluid"
                        alt=""
                        style={{ width: 24 }}
                      />
                      <span
                        className={styles.home__sectionFive__feature__title}
                      >
                        دریافت کد تخفیف
                      </span>
                    </Space>
                  </Col>
                  <Col lg={12}>
                    <Space size={16}>
                      <img
                        src="/images/vuesax_outline_tick-square.svg"
                        className="img-fluid"
                        alt=""
                        style={{ width: 24 }}
                      />
                      <span
                        className={styles.home__sectionFive__feature__title}
                      >
                        مشاهده سابقه امتیازها
                      </span>
                    </Space>
                  </Col>
                  <Col lg={12}>
                    <Space size={16}>
                      <img
                        src="/images/vuesax_outline_tick-square.svg"
                        className="img-fluid"
                        alt=""
                        style={{ width: 24 }}
                      />
                      <span
                        className={styles.home__sectionFive__feature__title}
                      >
                        شرکت در قرعه‌کشی
                      </span>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
          <img
            src="/images/Ellipse%20128.svg"
            className={`${styles.home__sectionFive__absolute__image_1} img-fluid`}
            alt=""
          />
          <div className={`${styles.home__sectionFive__line} mb-5`} />
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} lg={8}>
              <Space size={16}>
                <img
                  src="/images/vuesax_bulk_medal-star.svg"
                  className="img-fluid"
                  alt=""
                />
                <span className={styles.home__sectionFive__subtitle}>
                  نحوه دریافت امتیاز
                </span>
              </Space>
            </Col>
            {homeData.sectionFive.map((item, index) => (
              <Col xs={24} key={index} lg={8}>
                <div className={styles.home__sectionFive__featureBox}>
                  <Space size={16}>
                    <img src={item.image} className="img-fluid" alt="" />
                    <span
                      className={styles.home__sectionFive__featureBox__title}
                    >
                      {item.label}
                    </span>
                  </Space>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="container" style={{ marginTop: 100, marginBottom: 100 }}>
        <Row gutter={[32, 32]} align="middle" justify="space-between">
          <Col lg={13}>
            <Space direction="vertical" size={32}>
              <span className={styles.home__sectionSix__title}>
                کد دعوتت با ارزشه!
              </span>
              <p className={styles.home__sectionSix__desc}>
                فقط کافیه بعد از افتتاح سپرده و صدور کارت بانکی در شعبه شخصی
                اپلیکیشن توبانک، کد دعوت خودتو برای دوستات ارسال کنی تا بعد از
                ورود و صدور کارت توسط دوستتون تا سقف مبلغ ۵۰۰.۰۰۰ ریال به کارت
                شما واریز بشه. افتتاح حساب در شعبه شخصی بانک گردشگری کاملا
                رایگانه .
              </p>
            </Space>
          </Col>
          <Col lg={8} xs={{ order: 1 }}>
            <img src="/images/Group%2010366.png" className="img-fluid" alt="" />
          </Col>
        </Row>
      </div>
      <div className="container" id="download-panel">
        <div className={styles.home__sectionSix__card}>
          <Row gutter={[32, 32]} align="middle" justify="space-between">
            <Col>
              <img
                src="/images/4.png"
                className={`${styles.home__sectionSix__image} img-fluid`}
                alt=""
              />
            </Col>
            <Col lg={15}>
              <Row gutter={[16, 16]}>
                <Col lg={12}>
                  <Space direction="vertical" size={32}>
                    <Space size={15}>
                      <img
                        src="/images/Frame%2020.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <span className={styles.home__sectionSix__list__title}>
                        دریافت نسخه IOS
                      </span>
                    </Space>
                    <Row gutter={15}>
                      {homeData.sectionSix.iosLinks.map((item, index) => (
                        <Col className="mb-4" key={index} span={12}>
                          <a target="_blank" href={item.link}>
                            <img
                              src={item.image}
                              className="img-fluid w-100"
                              alt=""
                            />
                          </a>
                        </Col>
                      ))}
                    </Row>
                  </Space>
                </Col>
                <Col lg={12}>
                  <Space direction="vertical" size={32}>
                    <Space size={16}>
                      <img
                        src="/images/Frame%2019.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <span className={styles.home__sectionSix__list__title}>
                        دریافت نسخه اندروید
                      </span>
                    </Space>
                    <Row gutter={16}>
                      {homeData.sectionSix.androidLinks.map((item, index) => (
                        <Col className="mb-4" key={index} span={12}>
                          <a href={item.link}>
                            <img
                              src={item.image}
                              className="img-fluid w-100"
                              alt=""
                            />
                          </a>
                        </Col>
                      ))}
                      <Col className="mb-4" span={12}>
                        <a href={androidAddress?.regular} onClick={showModal}>
                          <img
                            src="/images/Group 10350.svg"
                            className="img-fluid w-100"
                            alt=""
                          />
                        </a>
                      </Col>
                    </Row>
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Row gutter={16}>
            <Col span={12}>
              <Button href={androidAddress?.armeab} block>
                دانلود توبانک
              </Button>
            </Col>
            <Col span={12}>
              <Button block onClick={handleCancel}>
                بستن
              </Button>
            </Col>
          </Row>,
        ]}
      >
        <Space className="w-100" align="center" direction="vertical" size={16}>
          <img src="/images/Download.svg" className="img-fluid" alt="" />
          <Text>
            <strong>
              در صورت دریافت پیام "app not installed"،
              <br />
              توبانک{' '}
              <a href={androidAddress?.armeab}>
                (نسخهarmeabi-v7a) را دانلود
              </a>{' '}
              نمایید.
            </strong>
          </Text>
        </Space>
      </Modal>
    </Space>
  );
}

export default Index;
