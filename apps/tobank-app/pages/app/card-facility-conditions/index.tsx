import styles from './index.module.less';
import { Layout, Space, Typography } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

const data = [
  'تصویر صفحات شناسنامه متقاضی و ضامنین',
  'تصویر سند/ اجاره نامه محل سکونت و کدپستی ده رقمی و آدرس کامل محل سکونت متقاضی و ضامنین',
  'تصویر مدارک اشتغال متقاضی و ضامنین',
  'تصویر گواهی کسر از حقوق رسمی بابت تضمین (در صورت ارائه گواهی کسر از حقوق رسمی به عنوان تضمین، لازم است تصویر گواهی مزبور در سامانه بارگذاری گردد. لازم به ذکر است پذیرش گواهی کسر از حقوق منوط به ارزیابی اعتبار گواهی و سازمان صادرکننده توسط بانک می‌باشد)',

  'تصویر چک یا سفته وثیقه (در صورت ارائه چک به عنوان وثیقه می‌بایست تصویر چک خام متعلق به متقاضی یا ضامن در سامانه بارگذاری گردد)',
];

/* eslint-disable-next-line */
export interface CardConditionsProps {}

export function CardConditions(props: CardConditionsProps) {
  return (
    <div>
      <Space direction="vertical">
        <span className={styles.title}>
          شرایط و مدارک موردنیاز درخواست تسهیلات کارت اعتباری
        </span>
        <span className={styles.subtitle}>
          در حال حاضر پرداخت تسهیلات کارت اعتباری در این سامانه صرفا برای
          متقاضیان ساکن شهر تهران امکان‌پذیر می‌باشد و پرداخت تسهیلات با حضور
          متقاضی و ضامنین در محل شعبه مرکزی بانک گردشگری صورت پذیرد.
        </span>
        <span className={styles.textsm}>
          وثایق مطابق با ضوابط و قوانین ابلاغی و بر اساس اعتبارسنجی متقاضی و
          ضامن .تعیین و اخذ می‌گردند اصل مدارک و وثایق می‌بایست در روز پرداخت
          تسهیلات به بانک ارائه گردند. زمان و مکان مراجعه حضوری پس از انجام ثبت
          نام و بررسی مدارک و مستندات توسط بانک .و تصویب پرداخت تسهیلات به اطلاع
          شما خواهد رسید لطفاً برای پیگیری روند پرونده پس از ثبت نام به صورت
          روزانه به کارتابل خود در .سامانه توبانک مراجعه فرمایید
        </span>
        <span className={styles.subtitle}>
          مدارک موردنیاز برای ثبت‌ درخواست
        </span>
        <span className={styles.subtitle}>
          لطفا جهت ثبت درخواست مدارک زیر را آماده داشته‌باشید
        </span>
        <ul className={styles.list}>
          {data.map((d) => (
            <li>{d}</li>
          ))}
        </ul>
      </Space>
    </div>
  );
}

export default CardConditions;
export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
