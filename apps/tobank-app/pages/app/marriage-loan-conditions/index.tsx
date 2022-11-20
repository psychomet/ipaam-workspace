import styles from './index.module.less';
import {Card, Col, Divider, Layout, List, PageHeader, Row, Table, Typography} from "antd";
const { Content } = Layout;
const { Title,Text } = Typography;
/* eslint-disable-next-line */
export interface MarriageLoanConditionsProps {}

const data = [
  '* تصویر سند ازدواج (صفحات 2-3-4-5-19 عقدنامه)',
  '* تصویر صفحات شناسنامه متقاضی، همسر و ضامن',
  '* تصویر روی و پشت کارت ملی متقاضی، همسر و ضامن ',
  '* نشانی کامل پستی، کدپستی دقیق محل سکونت متقاضی و ضامن',
  '* کد رهگیری ده رقمی',
  '* تصویر چک وثیقه',
  '* تصویر گواهی کسر از حقوق رسمی بابت تضمین',
];

const data2 = [
  '* برای دریافت تسهیلات بایستی در سامانه تسهیلات قرض\n' +
  ' الحسنه ازدواج، شعبه مرکزی بانک گردشگری را به عنوان شعبه عامل\n' +
  'اعطاي وام خود انتخاب کرده و کد رهگیری دریافت کرده باشید.',
  '* حداقل مبلغ مورد نیاز برای افتتاح سپرده قرض‌الحسنه پس‌انداز 1.500.000 ریال می باشد که کارمزدهای مورد نیاز برای اعطای تسهیلات ازاین مبلغ کسر می‌گردد.',
  '* وثایق مطابق با ضوابط و قوانین ابلاغی و بر اساس اعتبارسنجی متقاضی\n' +
  'و ضامن تعیین و اخذ می‌گردند. ',
  '* اصل مدارک و وثایق می‌بایست در روز پرداخت تسهیلات به بانک ارائه\n' +
  ' گردند. زمان و مکان مراجعه حضوری پس از انجام ثبت نام و بررسی\n' +
  ' مدارک و مستندات توسط بانک و تصویب پرداخت تسهیلات به اطلاع\n' +
  'شما خواهد رسید.',
  '* لطفاً برای پیگیری روند پرونده پس از ثبت نام به صورت روزانه به\n' +
  'کارتابل خود در سامانه توبانک مراجعه فرمایید.',

];

const dataSource = [
  {
    key: '1',
    amount: '1،200،000،000',
    salary: '1،464،000،000',
    time: '‏120 ماه',
  },
  {
    key: '2',
    amount: '1،500،000،000',
    salary: '1،830،000،000',
    time: '‏120 ماه',
  },
  {
    key: '3',
    amount: '2،400،000،000',
    salary: '2،928،000،000',
    time: '‏120 ماه',
  },
  {
    key: '4',
    amount: '3،000،000،000',
    salary: '3،660،000،000',
    time: '‏120 ماه',
  },
];

const columns = [
  {
    title: 'مبلغ تسهیلات',
    dataIndex: 'amount',
    key: 'مبلغ تسهیلات  ',
  },
  {
    title: 'مبلغ گواهی کسر از حقوق',
    dataIndex: 'salary',
    key: 'مبلغ گواهی کسر از حقوق',
  },
  {
    title: 'مدت',
    dataIndex: 'time',
    key: 'مدت',
  },
];


export function MarriageLoanConditions(props: MarriageLoanConditionsProps) {
  return (
    <div className='container'>
      <PageHeader
        title='شرایط و مدارک موردنیاز درخواست تسهیلات ازدواج'>
      </PageHeader>

      <Content className='my-4'>
        <Row gutter={[20,20]}>
          <Col span={24}>
            <List
              header={<Text strong style={{lineHeight:2}}>مدارک موردنیاز برای ثبت‌ درخواست <p>لطفا جهت ثبت درخواست مدارک زیر را آماده داشته ‌باشید</p></Text>}
              size="large"
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
              split={false}
              bordered={false}
            ></List>
          </Col>
          <Col span={24}>
            <Title level={5}>
              مبالغ تسهیلات ازدواج
            </Title>
            <p>
              *مبالغ به ریال می‌باشند
            </p>
            <Table dataSource={dataSource} columns={columns}  pagination={false}
            />
          </Col>
          <Col span={24}>
            <List
              header={<Text strong style={{lineHeight:2}}>توضیحات تکمیل</Text>}
              size="large"
              dataSource={data2}
              renderItem={(item) => <List.Item>{item}</List.Item>}
              split={false}
              bordered={false}
            ></List>
          </Col>

        </Row>



      </Content>
    </div>
  );
}

export default MarriageLoanConditions;
export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
