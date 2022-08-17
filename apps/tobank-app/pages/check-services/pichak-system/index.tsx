import React from 'react';

import { PageHeader, Space, Typography, List, Row, Col, Card } from 'antd';
import { items } from '../../../mocks/menu-data';

const { Title, Text } = Typography;

interface IProps {}

const PichakSystem: React.FC<IProps> = (props: any) => {
  return (
    <div className="container">
      <PageHeader>
        <Title level={2}>{props.label}</Title>

        <Space direction="vertical" size={16}>
          <Title level={2}>سامانه پیچک چیست؟</Title>
          <Text>
            یکی از خدمات منحصربه‌فرد سوپر اپلیکیشن توبانک سامانه پیچک است.
            توبانک جزء پیشگامان ارائه دهنده این خدمت به شما عزیزان بوده و شما با
            استفاده از سامانه‌ی پیچک می‌توانید از تمام خدمات مربوط به صدور و نقل
            و انتقال چک و احرازِ اعتبار صادرکننده آن بهره‌مند شوید.
          </Text>
          <Row gutter={[16, 16]} justify="space-between">
            <Col lg={8}>
              <List
                header={<div>ویژگی‌های سامانه پیچک</div>}
                dataSource={[
                  'ثبت اطلاعات چک صادر شده (صدور چک)',
                  'ثبت اطلاعات چک دریافت شده (دریافت چک)',
                  'انتقال چک دریافتی به غیر',
                  'بررسی اعتبار صادرکننده چک',
                  'استعلام آخرین وضعیت چک صادر شده',
                  'دسترسی ۲۴ ساعته به سامانه',
                ]}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Col>
            <Col lg={8}>
              <img
                src="/images/pichak-banner.png"
                className="img-fluid"
                alt=""
              />
            </Col>
          </Row>
          <Title className="text-center" level={5}>
            نمونه چک صیادی
          </Title>
          <Row justify="center">
            <Col lg={12}>
              <img src="/images/sayadSample.png" className="img-fluid" alt="" />
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col lg={12}>
              <Card title="بررسی اعتبار صادرکننده">
                <Text>
                  با وارد کردن شماره صیاد در این قسمت، می‌توانید از اعتبار
                  صادرکننده چک اطمینان حاصل کنید و در صورت وجود، تعداد چک‌های
                  برگشتی صاحب چک را مشاهده کنید.
                </Text>
              </Card>
            </Col>
            <Col lg={12}>
              <Card title="ثبت چک صیادی">
                <Text>
                  برای تکمیل فرآیند صدور چک، صادرکننده باید نسبت به ثبت آن در
                  سامانه پیچک اقدام کند. به این منظور با وارد نمودن شناسه صیادی
                  و تطبیق اطلاعات خود به عنوان صادرکننده، نسبت به افزودن گیرنده
                  یا گیرندگان چک اقدام نمایید.
                </Text>
              </Card>
            </Col>
            <Col lg={12}>
              <Card title="دریافت چک">
                <Text>
                  پس از دریافت برگه چک از صادرکننده و مراجعه به سامانه پیچک،
                  علاوه بر تایید دریافت آن، از صحت اطلاعات مندرج بر روی چک، اعم
                  از نام صادرکننده و دریافت‌کنندگان اطمینان حاصل کنید.
                </Text>
              </Card>
            </Col>
            <Col lg={12}>
              <Card title="انتقال چک صیادی">
                <Text>
                  دریافت کننده چک می‌تواند با مراجعه به این سامانه نسبت به
                  انتقال چک به غیر اقدام کند. در صورتی که گیرندگان بیش از یک نفر
                  باشند تمامی آنان ملزم به انتقال چک به دریافت‌کننده مورد نظر
                  می‌باشند.
                </Text>
              </Card>
            </Col>
          </Row>
        </Space>
      </PageHeader>
    </div>
  );
};
export default PichakSystem;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'master',
      name: items[1].children[0].label,
    },
  };
};
