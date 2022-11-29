import React, { useContext, useState } from 'react';
import { Affix, Col, Menu } from 'antd';
import MobileMenu from 'rc-drawer';
import { css } from '@emotion/react';
import SiteContext from '../../providers/SiteContext';
import { MenuProps } from 'antd/es/menu/menu';
import { ItemType } from 'antd/es/menu/hooks/useItems';

const Sidebar: React.FC = () => {
  const { isMobile } = useContext(SiteContext);
  const [selectedKey, setSelectedKey] = useState<string>('test');
  const [menuItems, setMenuItems] = useState<ItemType[]>([
    {
      key: 'test',
      title: 'test',
    },
  ]);

  const menuChild = (
    <Menu
      items={menuItems}
      inlineIndent={30}
      mode="inline"
      selectedKeys={[selectedKey]}
    />
  );

  return isMobile ? (
    <MobileMenu key="Mobile-menu">{menuChild}</MobileMenu>
  ) : (
    <Col xxl={4} xl={5} lg={6} md={6} sm={24} xs={24}>
      <Affix>
        <section style={{ width: '100%' }}>{menuChild}</section>
      </Affix>
    </Col>
  );
};

export default Sidebar;
