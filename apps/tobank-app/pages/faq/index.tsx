import React, { useState } from 'react';

import {
  PageHeader,
  Space,
  Typography,
  List,
  Row,
  Col,
  Card,
  Menu,
  MenuProps,
  Collapse,
} from 'antd';
import styles from './styles.module.less';
import { CaretLeftOutlined } from '@ant-design/icons';
import { CaretRightOutlined } from '@ant-design/icons';
import { useMediaQuery } from '../../hooks';
import { FAQData } from '../../mocks/faq-data';
import { items } from '../../mocks/menu-data';

const { Title, Text } = Typography;
const { Panel } = Collapse;

interface IProps {}

const FAQ: React.FC<IProps> = (props) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [questions, setQuestions] = useState<any>(FAQData[0]);

  const selectedItem = (item) => {
    setQuestions(FAQData.find((f) => f.id === parseInt(item.key)));
  };

  return (
    <div className="container">
      <PageHeader title="سوالات متداول"> </PageHeader>
      <div className={styles.faq_row}>
        <Col xs={24} flex="300px" className={styles.faq_containers}>
          <Menu
            mode={isMobile ? 'horizontal' : 'vertical'}
            defaultSelectedKeys={['1']}
            onClick={selectedItem}
          >
            {FAQData.map((item) => (
              <Menu.Item key={item.id}>{item.title}</Menu.Item>
            ))}
          </Menu>
        </Col>
        <Col xs={24} flex="auto">
          <Collapse
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => (
              <CaretLeftOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            {questions.data.map((item) => (
              <Panel
                header={item.title}
                key={Math.random().toString(36).substr(2, 9)}
              >
                <p>{item.description}</p>
              </Panel>
            ))}
          </Collapse>
        </Col>
      </div>
      <br></br>
    </div>
  );
};
export default FAQ;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'master',
      name: items[2].children[1].label,
    },
  };
};
