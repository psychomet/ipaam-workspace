import { IMenu } from '../interfaces/menu';

function getItem(
  label: React.ReactNode,
  key: React.Key,
  href: string,
  children?: IMenu[],
  type?: 'group'
): IMenu {
  return {
    key,
    children,
    label,
    type,
    href,
  } as IMenu;
}

export const items: IMenu[] = [
  getItem('خانه', 'home', '/'),
  getItem('خدمات چک', '2', null, [
    getItem(' چک صیادی', '3', '/check-services/pichak-system'),
    getItem('ثبت، تایید و انتقال چک', '4', '/check-services/check-transfer'),
    getItem(' چک تایید شده', '5', '/check-services/check-guide'),
  ]),
  getItem('آموزش', '6', null, [
    getItem(' ویدیوهای آموزشی', '7', '/instructional-videos'),
    getItem('سوالات متداول', '8', '/faq'),
  ]),
  getItem('قوانین و مقررات', '9', '/terms'),
  getItem('پذیرندگان', '10', null, [
    getItem(' IPG', '11', 'https://gardeshpay.ir/'),
    getItem('POS', '12', 'https://gardeshpay.ir/pos'),
  ]),
  getItem('درباره ما', '13', '/about-us'),
];
