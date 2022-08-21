import React from 'react';

import { Space, Typography, Card, PageHeader } from 'antd';
import styles from './styles.module.less';
import { items } from '../../mocks/menu-data';

const { Title, Text } = Typography;

interface IProps {}

const CheckGuide: React.FC<IProps> = (props) => {
  return (
    <div className="container">
      <PageHeader title="فیلم های آموزشی"></PageHeader>
      <div className={styles.videos_container} style={{ display: 'flex' }}>
        <Card className={styles.video_card}>
          <div className={styles.video_item}>
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/RIrNa/vt/frame"
              allowFullScreen={true}
              className={styles.iframeVideo}
            ></iframe>
          </div>
          <div className={styles.video_desc_section}>
            <Space direction="vertical" size={16}>
              <Title level={4}>راهنمای دانلود نسخه مستقیم iOS</Title>
              <Text>
                در این ویدیو با نحوه دانلود نسخه مستقیم iOS آشنا می‌شوید.
              </Text>
            </Space>
          </div>
        </Card>
        <Card className={styles.video_card}>
          <div className={styles.video_container}>
            <video controls className={styles.instructional__videos__video}>
              <source src="/videos/shobe-majazi.mp4" />
            </video>
          </div>
          <div className={styles.video_desc_section}>
            <Space direction="vertical" size={16}>
              <Title level={4}>آموزش شعبه شخصی iOS</Title>
              <Text>
                شعبه شخصی و خدمات آن به گونه ای طراحی شده‌اند که همه کاربران به
                سادگی هرچه تمام به تمامی ویژگی های این سامانه دسترسی داشته
                باشند. ویدیو آموزشی شعبه شخصی عمده سوالات شما را درباره این
                سامانه را پاسخ خواهد داد.
              </Text>
            </Space>
          </div>
        </Card>
        <Card className={styles.video_card}>
          <div className={styles.video_container}>
            <video controls className={styles.instructional__videos__video}>
              <source src="/videos/gardeshpay.mp4" />
            </video>
          </div>
          <div className={styles.video_desc_section}>
            <Space direction="vertical" size={16}>
              <Title level={4}>توبانک</Title>
              <Text>
                در دنیای امروز که امور مالی از دغدغه‌های مهم اشخاص شده است، پاسخ
                به این سوال که افراد موفق در این زمینه چگونه عمل کرده‌اند
                می‌تواند کلید اصلی گشودن گره از این معما را به‌دست دهد. آیا کار
                زیاد یا شتاب در اقدام منجر به موفقیت می‌شود؟ در این ویدیو با
                راه‌کاری به‌نام توبانک آشنا خواهید شد.
              </Text>
            </Space>
          </div>
        </Card>
      </div>
      <div className={styles.videos_container} style={{ display: 'flex' }}>
        <Card className={styles.video_card}>
          <div className={styles.video_item}>
            <video controls className={styles.instructional__videos__video}>
              <source src="/videos/fan-card.mp4" />
            </video>
          </div>
          <div className={styles.video_desc_section}>
            <Space direction="vertical" size={16}>
              <Title level={4}>مزایای کارت هواداری باشگاه پرسپولیس</Title>
              <Text>
                با افتتاح سپرده کوتاه مدت طرح هواداری باشگاه پرسپولیس، علاوه بر
                انجام امور مالی روزانه، از خدمات تخفیفی دیگری برخوردار شوید. با
                مشاهده ویدیو از تمام مزایای سپرده کوتاه مدت طرح هواداری باشگاه
                پرسپولیس اطلاع پیدا کنید.
              </Text>
            </Space>
          </div>
        </Card>
        <Card className={styles.video_card}>
          <div className={styles.video_container}>
            <video controls className={styles.instructional__videos__video}>
              <source src="/videos/trust-app-ios.mp4" />
            </video>
          </div>
          <div className={styles.video_desc_section}>
            <Space direction="vertical" size={16}>
              <Title level={4}>
                تراست کردن اپلیکیشن توبانک در گوشی های آیفون iOS
              </Title>
              <Text>
                دارندگان تلفن‌های هوشمند اپل برای نصب، می‌بایست اپلیکیشن را به
                اصطلاح تراست کنند. در این ویدیو نحوه تراست کردن اپلیکیشن توبانک
                را مشاهده می‌کنید.
              </Text>
            </Space>
          </div>
        </Card>
      </div>
      {/* <PageHeader title={props.pageProps.name}>
        <Space direction="vertical" className="w-100" size={16}>
          <Card title="راهنمای دانلود نسخه مستقیم iOS">
            <Row justify="space-between" align="middle" gutter={[16, 16]}>
              <Col>
                <Space direction="vertical" size={16}>
                  <Text>
                    در این ویدیو با نحوه دانلود نسخه مستقیم iOS آشنا می‌شوید.
                  </Text>
                </Space>
              </Col>
              <Col xs={24} lg={8}>
                <div className="h_iframe-aparat_embed_frame">
                  <span style={{ display: 'block' }}></span>
                  <iframe
                    src="https://www.aparat.com/video/video/embed/videohash/RIrNa/vt/frame"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Card>
          <Card title="آموزش شعبه شخصی iOS">
            <Row justify="space-between" align="middle" gutter={[16, 16]}>
              <Col lg={8}>
                <Space direction="vertical" size={16}>
                  <Text>
                    شعبه شخصی و خدمات آن به گونه ای طراحی شده‌اند که همه کاربران
                    به سادگی هرچه تمام به تمامی ویژگی های این سامانه دسترسی
                    داشته باشند. ویدیو آموزشی شعبه شخصی عمده سوالات شما را
                    درباره این سامانه را پاسخ خواهد داد.
                  </Text>
                </Space>
              </Col>
              <Col xs={24} lg={8}>
                <video controls className={styles.instructional__videos__video}>
                  <source src="/videos/shobe-majazi.mp4" />
                </video>
              </Col>
            </Row>
          </Card>
          <Card title="توبانک">
            <Row justify="space-between" align="middle" gutter={[16, 16]}>
              <Col lg={8}>
                <Space direction="vertical" size={16}>
                  <Text>
                    در دنیای امروز که امور مالی از دغدغه‌های مهم اشخاص شده است،
                    پاسخ به این سوال که افراد موفق در این زمینه چگونه عمل
                    کرده‌اند می‌تواند کلید اصلی گشودن گره از این معما را به‌دست
                    دهد. آیا کار زیاد یا شتاب در اقدام منجر به موفقیت می‌شود؟ در
                    این ویدیو با راه‌کاری به‌نام توبانک آشنا خواهید شد.
                  </Text>
                </Space>
              </Col>
              <Col xs={24} lg={8}>
                <video controls className={styles.instructional__videos__video}>
                  <source src="/videos/gardeshpay.mp4" />
                </video>
              </Col>
            </Row>
          </Card>
          <Card title="مزایای کارت هواداری باشگاه پرسپولیس">
            <Row justify="space-between" align="middle" gutter={[16, 16]}>
              <Col lg={8}>
                <Space direction="vertical" size={16}>
                  <Text>
                    با افتتاح سپرده کوتاه مدت طرح هواداری باشگاه پرسپولیس، علاوه
                    بر انجام امور مالی روزانه، از خدمات تخفیفی دیگری برخوردار
                    شوید. با مشاهده ویدیو از تمام مزایای سپرده کوتاه مدت طرح
                    هواداری باشگاه پرسپولیس اطلاع پیدا کنید.
                  </Text>
                </Space>
              </Col>
              <Col xs={24} lg={8}>
                <video controls className={styles.instructional__videos__video}>
                  <source src="/videos/fan-card.mp4" />
                </video>
              </Col>
            </Row>
          </Card>
          <Card title="تراست کردن اپلیکیشن توبانک در گوشی های آیفون">
            <Row justify="space-between" align="middle" gutter={[16, 16]}>
              <Col lg={8}>
                <Space direction="vertical" size={16}>
                  <Title level={4}></Title>
                  <Text>
                    دارندگان تلفن‌های هوشمند اپل برای نصب، می‌بایست اپلیکیشن را
                    به اصطلاح تراست کنند. در این ویدیو نحوه تراست کردن اپلیکیشن
                    توبانک را مشاهده می‌کنید.
                  </Text>
                </Space>
              </Col>
              <Col xs={24} lg={8}>
                <video controls className={styles.instructional__videos__video}>
                  <source src="/videos/trust-app-ios.mp4" />
                </video>
              </Col>
            </Row>
          </Card>
        </Space>
      </PageHeader> */}
    </div>
  );
};
export default CheckGuide;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'master',
      name: items[2].children[0].label,
    },
  };
};
