import { useState } from 'react';
import { Drawer, Button, Space, Dropdown, Menu } from 'antd';
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './navbar.module.less';
import { menuData } from '../../mocks/menu-data';
import Link from 'next/link';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar({ menu }) {
  const { pathname, route, query } = useRouter();
  const [visible, setVisible] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={'container'} style={{ position : 'relative' }}>
        <Button
          className={styles['menu']}
          type="primary"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />
        <a href="/">
          <img src="/images/tobank-logo.svg" className="img-fluid" alt="logo" />
        </a>
        <Space className={styles.all_menu}>
          {menuData.map((menu, index) =>
            !menu.subMenu ? (
              <Button
                className={
                  (pathname === menu.active || pathname === menu.to) &&
                  styles.navLinkActive
                }
                key={Math.random().toString(36).substr(2, 9)}
                type="text"
              >
                <Link href={menu.to || '.'}>
                  <a className={styles.link}>{menu.title}</a>
                </Link>
              </Button>
            ) : (
              <Dropdown
                key={Math.random().toString(36).substr(2, 9)}
                overlay={
                  <Menu>
                    {menu.subMenu.map((subMenu, index) => (
                      <Menu.Item key={Math.random().toString(36).substr(2, 9)}>
                        {subMenu.href ? (
                          <a className={styles.link} href={subMenu.href}>
                            {subMenu.title}
                          </a>
                        ) : (
                          <Link href={subMenu.to}>
                            <a className={styles.link}>{subMenu.title}</a>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <Button
                  className={
                    (pathname === menu.active || pathname === menu.to) &&
                    styles.navLinkActive
                  }
                  type="text"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    <span className={styles.link}> {menu.title}</span>{' '}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            )
          )}
        </Space>
        <div className={styles['download-link']}>
          <Button href="#download-panel" type="primary" icon={<DownloadOutlined />} size="middle">
          دانلود توبانک
        </Button>
        </div>
        
      </div>

      <Drawer
        title="Topics"
        placement="left"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Menu
      
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items= {menuData.map((menu, index) =>
            !menu.subMenu ? (
              <Button
                className={
                  (pathname === menu.active || pathname === menu.to) &&
                  styles.navLinkActive
                }
                key={Math.random().toString(36).substr(2, 9)}
                type="text"
              >
                <Link href={menu.to || '.'}>
                  <a className={styles.link}>{menu.title}</a>
                </Link>
              </Button>
            ) : (
              <Dropdown
                key={Math.random().toString(36).substr(2, 9)}
                overlay={
                  <Menu>
                    {menu.subMenu.map((subMenu, index) => (
                      <Menu.Item key={Math.random().toString(36).substr(2, 9)}>
                        {subMenu.href ? (
                          <a className={styles.link} href={subMenu.href}>
                            {subMenu.title}
                          </a>
                        ) : (
                          <Link href={subMenu.to}>
                            <a className={styles.link}>{subMenu.title}</a>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <Button
                  className={
                    (pathname === menu.active || pathname === menu.to) &&
                    styles.navLinkActive
                  }
                  type="text"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    <span className={styles.link}> {menu.title}</span>{' '}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            )
          )}
    />
      </Drawer>
    </nav>
  );
}
