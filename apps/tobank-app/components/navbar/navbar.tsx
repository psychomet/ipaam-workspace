import { useState } from 'react';
import { Drawer, Button, Space, Dropdown, Menu, Row } from 'antd';
import {
  MenuOutlined,
  DownOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './navbar.module.less';
import { items } from '../../mocks/menu-data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Col from 'antd/es/grid/col';
import SubMenu from 'antd/lib/menu/SubMenu';

/* eslint-disable-next-line */
export interface NavbarProps {}
type IMenu = Required<MenuProps>['items'][number];

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click ', e);
};

export function Navbar({ menu }) {
  const { pathname, route, query } = useRouter();
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <nav className={styles.navbar}>
      <div className={'container'} style={{ position: 'relative' }}>
        <Button
          className={styles['side-menu']}
          type="primary"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />
        <a href="/">
          <img src="/images/tobank-logo.svg" className="img-fluid" alt="logo" />
        </a>
        <Space className={styles.menu}>
          {items.map((menu, index) =>
            !menu.children ? (
              <Button
                className={
                  (pathname === menu.active || pathname === menu.to) &&
                  styles.navLinkActive
                }
                key={Math.random().toString(36).substr(2, 9)}
                type="text"
              >
                <Link href={menu.href || '.'}>
                  <a className={styles.link}>{menu.label}</a>
                </Link>
              </Button>
            ) : (
              <Dropdown
                key={Math.random().toString(36).substr(2, 9)}
                overlay={
                  <Menu>
                    {menu.children?.map((subMenu, index) => (
                      <Menu.Item key={Math.random().toString(36).substr(2, 9)}>
                        {subMenu.href ? (
                          <a className={styles.link} href={subMenu.href}>
                            {subMenu.label}
                          </a>
                        ) : (
                          <Link href={subMenu.href}>
                            <a className={styles.link}>{subMenu.label}</a>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <Button
                  className={
                    (pathname === menu.active || pathname === menu.href) &&
                    styles.navLinkActive
                  }
                  type="text"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    <span className={styles.link}> {menu.label}</span>{' '}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            )
          )}
        </Space>
        <div className={styles['download-link']}>
          <Button href="#download-panel" type="primary" size="middle">
            دانلود توبانک
          </Button>
        </div>
      </div>
      <Drawer
        bodyStyle={{ padding: 0 }}
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
        className="container-fluid"
      >
        <Menu mode="inline" theme="light" inlineCollapsed={collapsed}>
          <Menu.Item key="1">
            <Link href="#">خانه</Link>
          </Menu.Item>
          <SubMenu key="2" title="خدمات چک">
            <Menu.Item key="3">
              <Link href="/check-services/pichak-system">سامانه پیچک</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/check-services/check-transfer">
                ثبت، تایید و انتقال چک
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link href="/check-services/check-guide">چک تایید شده</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="6" title="آموزش">
            <Menu.Item key="7">
              <Link href="/instructional-videos">ویدیوهای آموزشی</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link href="/faq"> سوالات متداول</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Link href="/terms">قوانین و مقررات</Link>
          </Menu.Item>
          <SubMenu key="10" title="پذیرندگان">
            <Menu.Item key="11">
              <Link href="https://gardeshpay.ir/">IPG</Link>
            </Menu.Item>
            <Menu.Item key="12">
              <Link href="https://gardeshpay.ir/pos">POS</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="13">
            <Link href="/about-us">درباره ما</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
}
