import styles from './index.module.less';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '../hooks';
import {
  DownloadOutlined,
  LeftCircleOutlined,
  InfoCircleFilled,
} from '@ant-design/icons';
import { Button, Col, Modal, Row, Space, Typography, Badge } from 'antd';
const { Title, Text } = Typography;
import cx from 'classnames';
import { homeData } from '../mocks/home-data';
import { spawn } from 'child_process';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.less file.
   */
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalNewVisible, setIsModalNewVisible] = useState(false);

  const [androidAddress, setAndroidAddress] = useState<{
    regular: string;
    armeab: string;
  }>();

  const handleNewCancel = () => {
    localStorage.setItem('POPUP-REF', JSON.stringify(false));
    setIsModalNewVisible(false);
  };

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
    const modalRef = localStorage.getItem('POPUP-REF');
    if (!modalRef) {
      setIsModalNewVisible(true);
    }
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
          console.log('res', res);
          // this.androidAddress = ;
          setAndroidAddress({
            regular: res?.data?.link,
            armeab: res?.data?.link_32,
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
    <Space className="w-100" direction="vertical" size={32}>
      <Modal
        width={1000}
        onCancel={handleNewCancel}
        title={[
          <Text>
            جشنواره قرعه کشی حساب های قرض الحسنه بانک گردشگری
            <strong>
              <Text type="danger">(مهرریزان)</Text>
            </strong>
          </Text>,
        ]}
        visible={isModalNewVisible}
        footer={[
          <Row gutter={16}>
            <Col span={14} offset={5}>
              <Button
                block
                type="primary"
                size="large"
                onClick={handleNewCancel}
              >
                متوجه شدم
              </Button>
            </Col>
          </Row>,
        ]}
      >
        <img src="/images/popup-ref.jpg" className="img-fluid" alt="" />
        {/* <ul style={{ paddingRight: '1.5rem' }}>
          <li>
            دوره محاسبه امتیازات برای شرکت در قرعه کشی و اعطای جوایز از اول
            مرداد ماه تا 25 مهر ماه 1401 و روز قرعه‌کشی 30 مهر ماه می‏ باشد.{' '}
          </li>
          <li>
            حداقل موجودی حساب‏های قرض‏الحسنه جهت شرکت در قرعه کشی مبلغ
            000‏/000‏/1 ریال می‏ باشد.
          </li>
          <li>
            هر 000‏/000‏/1 ریال مانده موجودی روزانه در سپرده‏های قرض الحسنه،
            برابر 1 شانس قرعه کشی می ‏باشد.
          </li>
          <li>
            ‏ امکان افتتاح حساب هم به صورت حضوری از طریق شعب بانک و هم به صورت
            غیر حضوری توسط اپلیکیشن ToBank و بدون هزینه صدور و ارسال کارت درب
            منزل برای مشتری فراهم می‏ باشد.
          </li>
          <li>
            جوایز در نظر گرفته شده برای قرعه کشی:
            <ul>
              <li>یک سکه تمام بهار آزادی برای 10 نفر</li>
              <li> یک نیم سکه بهار آزادی برای 20 نفر</li>
              <li>یک ربع سکه بهار آزادی برای 40 نفر</li>
              <li> 200 جایزه نقدی 20 میلیون ریالی</li>
              <li> 20 کمک هزینه 50 میلیون ریالی جهت سفر به عتبات عالیات</li>
              <li>
                {' '}
                50 کمک هزینه 100 میلیون ریالی جهت خرید کالای بادوام داخلی و
                هزاران جوایز نقدی و غیر نقدی دیگر
              </li>
            </ul>
          </li>
        </ul> */}
      </Modal>
      <div className="container">
        <div className={styles.home__intro}>
          <Row gutter={[32, 43]}>
            <Col md={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/Group%2010353@2x.png"
                className="img-fluid"
                width={450}
                alt=""
              />
            </Col>
            <Col md={12} style={{ paddingTop: '40px' }}>
              <Space className="h-100" direction="vertical">
                <Row>
                  <Title
                    level={!isDesktop ? 3 : 1}
                    style={{ fontSize: '30px', fontWeight: 'bolder' }}
                  >
                    <span className="primary-color">TOBANK،</span> یک شعبه مجازی
                    همراه شماست!
                  </Title>
                </Row>
                <Row>
                  <Text
                    className={styles.home__intro__text}
                    style={{
                      fontSize: '18px',
                      margin: '3rem 0',
                      lineHeight: '1.8',
                    }}
                  >
                    روی گوشیت حساب باز کن!
                    <br />
                    از احراز هویت آنلاین و افتتاح سپرده آنی گرفته تا صندوق
                    سرمایه‌گذاری و ثبت‌نام وام ازدواج.
                  </Text>
                </Row>
                <Row className={`${styles.home__resBtn} flex-container`}>
                  <Col md={{ span: 6 }}>
                    <Button
                      href="#download-panel"
                      type="primary"
                      size="large"
                      icon={<DownloadOutlined />}
                    >
                      دانلود اپلیکیشن
                    </Button>
                  </Col>
                  <Col md={{ span: 6, offset: 2 }}>
                    <Button type="text" size="large" href="/faq">
                      چطور کار می‌کند؟
                      <LeftCircleOutlined style={{ marginTop: 5 }} />
                    </Button>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container" style={{ marginTop: 100 }}>
        <Row gutter={[32, 32]} align="middle" justify="space-between">
          <Col lg={8}>
            <Space
              direction="vertical"
              size={32}
              className={styles.home__sectionSix__color_cards}
            >
              <span className={styles.home__sectionFour__title}>
                انتخاب رنگ دلخواه شما
              </span>
              <Text className={styles.home__sectionFour__text}>
                علاوه بر کارت‌های متنوع بانک گردشگری، رنگ کارت بانکی خودتون رو
                نیز انتخاب کنید.
              </Text>
              <Space>
                <img
                  src="/images/رنگ کارت های بانکی.png"
                  alt="pic"
                  className="img-fluid"
                />
              </Space>
            </Space>
          </Col>
          <Col>
            <img src="/images/Group 10421.png" className="img-fluid" alt="" />
          </Col>
        </Row>
      </div>
      <div className="container" style={{ zIndex: 500, marginTop: 100 }}>
        <Space direction="vertical" size={56} align="center">
          <span className={styles.home__sectionThree__title}>خدمات TOBANK</span>
          <Row gutter={[32, 32]}>
            {homeData.sectionThree.map((item, index) => (
              <Col xs={12} sm={12} lg={6} key={index}>
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
      <div
        className={`container`}
        style={{ marginTop: 100, position: 'relative', overflow: ' hidden' }}
      >
        <div className={`${styles.sectionCustomers}`}>
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
          >
            <img src="/images/background.png" alt="pic" className="img-fluid" />
          </div>

          <Row gutter={[0, 32]}>
            <Col
              md={{ span: 8 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <img
                src="/images/newcustomer.png"
                className={`img-fluid`}
                alt=""
              />
            </Col>
            <Col md={{ span: 14, offset: 2 }}>
              <Row>
                <Space
                  direction="vertical"
                  align="start"
                  size={32}
                  className={styles.home__sectionFive__title}
                >
                  <span>باشگاه مشتریان TOBANK</span>
                  <Space direction="horizontal" align="center">
                    <img
                      src="/images/medal-star.png"
                      className="img-fluid"
                      alt=""
                    />
                    <span className={styles.home__sectionFive__subtitle}>
                      نحوه دریافت امتیاز
                    </span>
                  </Space>
                </Space>
              </Row>

              <Row
                gutter={[32, 32]}
                style={{ marginTop: 50, marginBottom: 16 }}
              >
                {homeData.sectionFive.map((item, index) => (
                  <Col className="gutter-row" xs={24} sm={12}>
                    <div className={styles.home__sectionFive__featureBox}>
                      <Space size={6} direction="horizontal" align="center">
                        <img src={item.image} className="img-fluid" alt="" />
                        <span
                          className={
                            styles.home__sectionFive__featureBox__title
                          }
                        >
                          {item.label}
                        </span>
                      </Space>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container" style={{ marginTop: 100, marginBottom: 100 }}>
        <Row gutter={[32, 32]} align="middle" justify="space-between">
          <Col lg={13}>
            <Space direction="vertical" size={32}>
              <span className={styles.home__sectionSix__title}>
                نامحدود دعوت کن و پاداش بگیر!
              </span>
              <p className={styles.home__sectionSix__desc}>
                با پایان یافتن طرح دعوت از دوستان TOBANK در 30 شهریور ماه، شما
                تنها یک هفته فرصت دارید تا با افتتاح حساب در اپلیکیشن TOBANK و
                شرکت در طرح دعوت از دوستان، در لحظه هدیه نقدی دریافت نمایید.
                <br />
                <span style={{ fontWeight: 'bolder' }}>
                  به ازای هر مشتری جدید:
                </span>
                <br />
                <span style={{ fontWeight: 'bold' }}>
                  پرداخت 50 هزار تومان به دعوت‌کننده{' '}
                </span>
                <br />
                <span style={{ fontWeight: 'bold' }}>
                  و تا سقف 200 هزار تومان به دعوت‌شونده{' '}
                </span>
                {/* <ul style={{ paddingRight: '1rem', listStyle: 'none' }}>
                  <li>پرداخت 50 هزار تومان به دعوت‌کننده</li>
                  <li>و تا سقف 200 هزار تومان به دعوت‌شونده</li>
                </ul> */}
              </p>
            </Space>
          </Col>
          <Col lg={8} xs={{ order: 1 }}>
            <img src="/images/code-davat.svg" className="img-fluid" alt="" />
          </Col>
        </Row>
      </div>
      <div className={styles.home__edgeImageArea}>
        <div className="container">
          <Row gutter={32} align="middle">
            <Col md={{ span: 8, offset: 1 }}>
              <img
                src="/images/شعبه شخصی@2x.svg"
                className={`${styles.home__edgeImagePhone} img-fluid`}
                alt=""
              />
            </Col>
            <Col md={{ span: 12, offset: 1 }}>
              <Space direction="vertical" size={32}>
                <Title level={2} className={styles.section_title}>
                  شعبه شخصی
                  <span className="primary-color"> TOBANK</span>
                </Title>
                <Row gutter={[32, 8]}>
                  {homeData.secondSection.features.map((feature, index) => (
                    <Col key={index} lg={12}>
                      <Space direction="vertical" size={12}>
                        <Text className={styles.home__edgeFeatureBoxTitle}>
                          <div className={styles.home__home_desc}>
                            {feature.title}
                          </div>
                        </Text>
                      </Space>
                    </Col>
                  ))}
                </Row>
              </Space>
            </Col>
          </Row>
        </div>
      </div>

      <div
        className="container"
        id="download-panel"
        style={{ position: 'relative' }}
      >
        <div className={`${styles.home__sectionSix__qr_code}`}>
          <img
            src="/images/qr_code_tobank.png"
            className={`img-fluid`}
            alt=""
          />
          <Space align="center" direction="vertical" style={{ margin: 30 }}>
            <span>برای دانلود اسکن کنید</span>
            <a style={{ color: '#000' }} href="www.tobank.ir">
              www.tobank.ir
            </a>
          </Space>
        </div>
        <div className={styles.home__sectionSix__card}>
          <Row gutter={[8, 8]} align="middle">
            <Col md={24}>
              <Row gutter={[16, 16]}>
                <Col lg={{ span: 6, offset: 1 }}>
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
                            {item.icon ? (
                              <Badge.Ribbon text="FREE">
                                <img
                                  src={item.image}
                                  className="img-fluid w-100"
                                  alt=""
                                />
                              </Badge.Ribbon>
                            ) : (
                              <img
                                src={item.image}
                                className="img-fluid w-100"
                                alt=""
                              />
                            )}
                          </a>
                        </Col>
                      ))}
                    </Row>
                  </Space>
                </Col>
                <Col lg={{ span: 6, offset: 2 }}>
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
                <Col
                  lg={{ span: 6, offset: 2 }}
                  style={{
                    paddingTop: '1rem',
                    width: '100%',
                    height: '45px',
                  }}
                >
                  <Row className={styles.getVersion} align="middle">
                    <a
                      href="/instructional-videos"
                      style={{
                        color: '#000',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <InfoCircleFilled style={{ fontSize: '1.5rem' }} />
                      <span
                        style={{
                          marginRight: '1rem',
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                      >
                        راهنمای دانلود نسخه مستقیم iOS
                      </span>
                    </a>
                  </Row>
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
                دانلود TOBANK
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
              TOBANK{' '}
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
