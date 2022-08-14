export interface IMenu {
  key?: string;
  title: string;
  subMenu?: IMenu[];
  exact?: boolean;
  to?: string;
  active?: string;
  href?: string;
}
