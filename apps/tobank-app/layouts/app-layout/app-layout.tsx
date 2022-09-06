import styles from './app-layout.module.less';
import { useMediaQuery } from '../../hooks';
import { Col, Row, Space, Divider } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import cx from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface AppLayoutProps {}

export function AppLayout({ children }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const router = useRouter();

  useEffect(() => {
    if (router.query['theme']) {
      setTheme(router.query['theme'] as any);
    }
  }, [router]);

  // const isDesktop = useMediaQuery('(min-width: 1366px)');

  return (
    <>
      <div
        className={`container ${
          theme === 'light' ? styles['is-light'] : styles['is-dark']
        }`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
    </>
  );
}

export default AppLayout;
