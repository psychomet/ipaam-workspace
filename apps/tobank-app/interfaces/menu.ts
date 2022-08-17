export interface IMenu {
  key?: string;
  label: string;
  children?: IMenu[];
  exact?: boolean;
  to?: string;
  active?: string;
  href?: string;
}
