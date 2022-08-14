import { IMenu } from '../interfaces/menu';

export const menuData: IMenu[] = [
  {
    title: 'خانه',
    to: '/',
  },
  {
    title: 'خدمات چک',
    subMenu: [
      {
        title: ' سامانه پیچک',
        to: '/check-services/pichak-system',
      },
      {
        title: 'ثبت، تایید و انتقال چک',
        to: '/check-services/check-transfer',
      },
      {
        title: 'چک تایید شده',
        to: '/check-services/check-guide',
      },
    ],
  },
  {
    title: 'آموزش',
    subMenu: [
      {
        title: 'ویدیوهای آموزشی',
        to: '/instructional-videos',
      },
      {
        title: 'سوالات متداول',
        to: '/faq',
      },
    ],
  },
  {
    title: 'قوانین و مقررات',
    to: '/terms',
  },
  {
    title: 'پذیرندگان',
    subMenu: [
      {
        title: 'IPG',
        to: '.',
        href: 'https://gardeshpay.ir/',
      },
      {
        title: 'POS',
        to: '.',
        href: 'https://gardeshpay.ir/pos',
      },
    ],
  },
  {
    title: 'درباره ما',
    to: '/about-us',
  },
];
