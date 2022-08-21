import { useEffect, useState } from 'react';
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
import SubMenu from 'antd/lib/menu/SubMenu';
import { useMediaQuery } from '../../hooks';

/* eslint-disable-next-line */
export interface NavbarProps {}

type IMenu = Required<MenuProps>['items'][number];

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click ', e);
};
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten?.children)
        ? flatten(toFlatten?.children)
        : toFlatten
    );
  }, []);
}
export function Navbar({ menu }) {
  const isDesktop = useMediaQuery('(min-width: 1366px)');

  const { pathname, route, query } = useRouter();
  const [visible, setVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState(
    flatten(items).find((_item) => _item?.href === pathname)?.key
  );

  useEffect(() => {
    setSelectedKey(
      flatten(items).find((_item) => _item?.href === pathname)?.key
    );
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <div
        className={'container'}
        style={{ position: 'relative', height: '75px' }}
      >
        <div className={styles['buttons']}>
          <Button
            className={styles['side-menu']}
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => setVisible(true)}
          />
          <a href="/">
            <img
              src="/images/tobank-logo.svg"
              className="img-fluid"
              alt="logo"
            />
          </a>
        </div>
        <div
          style={{
            float: 'right',
            width: 'calc(100% - 315px)',
          }}
          className={styles['menu']}
        >
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            style={{ fontSize: '1rem', borderBottomStyle: 'hidden' }}
          >
            <Menu.Item key="home">
              <Link href="/">خانه</Link>
            </Menu.Item>
            <SubMenu
              key="2"
              title={
                <span>
                  <span style={{ float: 'right' }}> خدمات چک</span>
                  <span
                    style={{
                      float: 'right',
                      display: 'flex',
                      width: '20px',
                      height: '50px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '0.25rem',
                    }}
                  >
                    <DownOutlined
                      style={{ fontSize: '.6rem', marginLeft: '0' }}
                    />
                  </span>
                </span>
              }
            >
              <Menu.Item key="3">
                <Link href="/check-services/pichak-system">چک صیادی</Link>
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
            <Menu.SubMenu
              key="6"
              title={
                <span>
                  <span style={{ float: 'right' }}>آموزش</span>
                  <span
                    style={{
                      float: 'right',
                      display: 'flex',
                      width: '20px',
                      height: '50px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '0.25rem',
                    }}
                  >
                    <DownOutlined
                      style={{ fontSize: '.6rem', marginLeft: '0' }}
                    />
                  </span>
                </span>
              }
            >
              <Menu.Item key="7">
                <Link href="/instructional-videos">ویدیوهای آموزشی</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link href="/faq"> سوالات متداول</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="10"
              title={
                <span>
                  <span style={{ float: 'right' }}>پذیرندگان</span>
                  <span
                    style={{
                      float: 'right',
                      display: 'flex',
                      width: '20px',
                      height: '50px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '0.25rem',
                    }}
                  >
                    <DownOutlined
                      style={{ fontSize: '.6rem', marginLeft: '0' }}
                    />
                  </span>
                </span>
              }
            >
              <Menu.Item key="11">
                <Link href="https://gardeshpay.ir/">IPG</Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link href="https://gardeshpay.ir/pos">POS</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="9">
              <Link href="/terms">قوانین و مقررات</Link>
            </Menu.Item>

            <Menu.Item key="13">
              <Link href="/about-us">درباره ما</Link>
            </Menu.Item>
          </Menu>
        </div>
        {isDesktop && (
          <div
            className={styles['buttons']}
            style={{ width: '165px !important' }}
          >
            <a
              href="/#download-panel"
              style={{ width: '100%', height: '100%' }}
            >
              <Button
                type="primary"
                size="middle"
                style={{ width: '100%', height: '100%' }}
              >
                دانلود توبانک
              </Button>
            </a>
          </div>
        )}
      </div>
      <Drawer
        bodyStyle={{ padding: 0 }}
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Menu
          mode="inline"
          theme="light"
          inlineCollapsed={false}
          selectedKeys={[selectedKey]}
        >
          <Menu.Item key="home">
            <Link href="/">خانه</Link>
          </Menu.Item>
          <SubMenu key="2" title="خدمات چک">
            <Menu.Item key="3">
              <Link href="/check-services/pichak-system">چک صیادی</Link>
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
          <SubMenu key="10" title="پذیرندگان">
            <Menu.Item key="11">
              <Link href="https://gardeshpay.ir/">IPG</Link>
            </Menu.Item>
            <Menu.Item key="12">
              <Link href="https://gardeshpay.ir/pos">POS</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Link href="/terms">قوانین و مقررات</Link>
          </Menu.Item>

          <Menu.Item key="13">
            <Link href="/about-us">درباره ما</Link>
          </Menu.Item>
        </Menu>
        <div className={'container-fluid'}>
          <div
            className={styles['buttons']}
            style={{ width: '165px !important' }}
          >
            <a
              href="/#download-panel"
              style={{ width: '100%', height: '100%' }}
            >
              <Button
                type="primary"
                size="middle"
                style={{ width: '100%', height: '100%' }}
              >
                دانلود توبانک
              </Button>
            </a>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
