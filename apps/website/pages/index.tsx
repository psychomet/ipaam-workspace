import styles from './index.module.less';
import { Typography } from 'antd';

const { Text, Link } = Typography;
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.less file.
   */
  return (
    <div className={styles.page}>
      <Text>Ant Design (default)</Text>
    </div>
  );
}

export default Index;
