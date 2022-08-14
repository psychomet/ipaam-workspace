import styles from './sidebar.module.less';
import { Layout } from 'antd';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar({ menu }) {
  return (
    <Layout.Sider
      className={styles.sidebar}
      breakpoint={'lg'}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
    </Layout.Sider>
  );
}
