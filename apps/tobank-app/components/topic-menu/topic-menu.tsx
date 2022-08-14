import styles from './topic-menu.module.less';
import { Menu } from 'antd';

/* eslint-disable-next-line */
export interface TopicMenuProps {}

export function TopicMenu({ topics, selectedKey, changeSelectedKey }) {
  const styledTopics = [];
  topics.forEach((topic, index) =>
    styledTopics.push(
      <Menu.Item key={index} onClick={changeSelectedKey}>
        {topic}
      </Menu.Item>
    )
  );

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
}
