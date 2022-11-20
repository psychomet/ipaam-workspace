


import styles from './index.module.less';
import {Card, Col, Descriptions, Divider, Layout, PageHeader, Row, Typography} from 'antd';
import classNames from 'classnames';
const { Content } = Layout;
const { Title,Text } = Typography;
/* eslint-disable-next-line */
export interface MarriageLoanAmountConditionsProps {}


export function MarriageLoanAmountConditions(props: MarriageLoanAmountConditionsProps) {
  return (
    <div>
      <PageHeader
        title=' تسهیلات قرض‌الحسنه ازدواج'>
      </PageHeader>

      <Content className='my-4'>
          <Row gutter={[20,20]}>
            <Col md={12} >
              <Descriptions title="User Info" column={1}>

                  <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>

                  <Descriptions.Item label="Telephone">1810000000 توضیحات:</Descriptions.Item>

                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
                <Descriptions.Item label="Address">
                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
              </Descriptions>
            </Col>
            <Col md={12}>
              <Card title="مبالغ تسهیلات ازدواج">
                <Row>
                  <Col>
                    <p>
                      <Text strong>مبلغ تسهیلات: </Text>
                      1،500،000،000ریال
                    </p>
                    <p>
                      <Text strong>مبلغ گواهی کسر از حقوق: </Text>
                      1،830،000،000ریال</p>
                    <p>
                      <Text strong> مدت: </Text>
                      120 ماه
                    </p>
                  </Col>
                  <Col>
                    <Divider/>
                    <Text strong>توضیحات: </Text>
                    توضیحات: به استناد مفاد جزء (1) بند (الف) تبصره 16 قانون بودجه سال 1401 کل کشور، به متقاضیانی که سن ازدواج آنها در زوج ها زیر 25 سال و در زوجه ها زیر 23 سال می باشد، مبلغ 150 ميليون تومان تسهیلات قرض‌الحسنه ازدواج تعلق می گیرد.
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={12}>
              <Card title="مبالغ تسهیلات ازدواج">
                <Row>
                  <Col>
                    <p>
                      <Text strong>مبلغ تسهیلات: </Text>
                      2،400،000،000ریال
                    </p>
                    <p>
                      <Text strong>مبلغ گواهی کسر از حقوق: </Text>
                      2،928،000،000ریال</p>
                    <p>
                      <Text strong> مدت: </Text>
                      120 ماه
                    </p>
                  </Col>
                  <Col>
                    <Divider/>
                    <Text strong>توضیحات: </Text>
                    توضیحات:  به استناد مفاد جزء (1) بند (الف) تبصره 16 قانون بودجه سال 1401 کل کشور،  به هر یک از زوجین که مشمول ماده (50) قانون جامع خدمات رساني به ايثارگران باشند، مبلغ  240 ميليون تومان تسهیلات قرض‌الحسنه ازدواج تعلق می‌گیرد.                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={12}>
              <Card title="مبالغ تسهیلات ازدواج">
                <Row>
                  <Col>
                    <p>
                      <Text strong>مبلغ تسهیلات: </Text>
                      3،000،000،000ریال
                    </p>
                    <p>
                      <Text strong>مبلغ گواهی کسر از حقوق: </Text>
                      3،660،000،000ریال</p>
                    <p>
                      <Text strong> مدت: </Text>
                      120 ماه
                    </p>
                  </Col>
                  <Col>
                    <Divider/>
                    <Text strong>توضیحات: </Text>
                    توضیحات:  به استناد مفاد جزء (1) بند (الف) تبصره 16 قانون
                    بودجه سال 1401 کل کشور، به متقاضیانی که سن ازدواج آنها
                    در زوج ها زیر 25 سال و در زوجه ها زیر 23 سال می باشد و
                    مشمول ماده (50) قانون جامع خدمات رساني به ايثارگران
                    باشند، مبلغ  300 ميليون تومان تسهیلات قرض‌الحسنه ازدواج
                    تعلق می گیرد.                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

        </Content>
    </div>
  );
}

export default MarriageLoanAmountConditions;
export const getStaticProps = async () => {
  return {
    props: {
      layout: 'app',
    },
  };
};
