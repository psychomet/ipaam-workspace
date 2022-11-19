


import styles from './index.module.less';
import {Card, Col, Divider, Layout, List, PageHeader, Row, Space, Typography} from 'antd';
import classNames from 'classnames';
const { Content } = Layout;
const { Title,Text } = Typography;
/* eslint-disable-next-line */
export interface MarriageLoanAmountConditionsProps {}
const data = [
  '۱ . سایت گردش پی در ایران مدیریت‌ شده و تابع قوانین جمهوری اسلامی ایران است. لذا چنانچه کاربری اقدام به انتقال وجه و یا خرید و فروش محصولات غیرقانونی کند اطلاعات وی به مراجع ذیصلاح ارجاع داده خواهد شد.',
  '۲ . علاوه بر خرید و فروش موارد خلاف قوانین جمهوری اسلامی ایران در گردش پی، خرید و فروش پول، وجوه مالی و اوراق بهادار (مبادله پول با پول) نیز در گردش پی ممنوع می‌باشد. به طور مثال دریافت وجه ریالی و یا تومانی درون گردش پی و پرداخت دلاری از طریق پی‌پال در گردش پی ممنوع می‌باشد و در صورت مشاهده، حساب کاربری کاربران خاطی مسدود خواهد شد. ',
  '۳ . استفاده از سرویس گردش پی در سایت‌هایی که دارای مضامین غیرقانونی، مضر، تهدیدکننده، توهین‌آمیز، زیان‌آور، غیراخلاقی، افترا‌آمیز و مبتذل باشد و همینطور سایت‌هایی که به نژاد، گروه و یا دسته خاصی از مردم توهین کرده باشند مجاز نمی‌باشد و در صورت مشاهده، شناسه کاربری خاطی توقیف خواهد شد. ',
  ' ۴ . استفاده از سرویس گردش پی به منظور خرید و فروش غیرقانونی محصولات دارای حق چاپ و نشر (copyright) مجاز نمی‌باشد و در صورت مشاهده و یا گزارش، شناسه کاربری خاطی متوقف خواهد شد. ',
  ' ۵ . استفاده از سرویس گردش پی در سایت‌های حراج و مزایده ممنوع می‌باشد.',
];

export function MarriageLoanAmountConditions(props: MarriageLoanAmountConditionsProps) {
  return (
    <div>
      <PageHeader
        title={
          <Title className={classNames(styles.rules__title, 'primary-color')}>
            مبالغ تسهیلات ازدواج
          </Title>
        }
      >
        <Content>
          <Card title="مبالغ تسهیلات ازدواج">

                <Row justify="space-between" gutter={[30,10]} className='my-2'>
                  <Col span={16}>
                    <Text>

                    </Text>
                    مبلغ تسهیلات:
                  </Col>
                  <Col span={8}>
                    <Row justify='end'>
                      1،200،000،000ریال
                    </Row>


                  </Col>
                </Row>


                <Row justify="space-between" gutter={[30,10]} className='my-2'>
                  <Col span={16}>
                    مبلغ گواهی کسر از حقوق:
                  </Col>
                  <Col span={8}>
                    <Row justify='end'>
                      1،464،000،000ریال

                    </Row>

                  </Col>
                </Row>
                <Row justify="space-between" gutter={[30,10]} className='my-2'>
                  <Col span={16}>
                    مدت:
                  </Col>
                  <Col span={8}>
                    <Row justify='end'>

                        120 ماه


                    </Row>

                  </Col>

                </Row>
            <Row>
              <Text>

              </Text>
            </Row>

          </Card>
        </Content>
      </PageHeader>
    </div>
  );
}

export default MarriageLoanAmountConditions;
export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
