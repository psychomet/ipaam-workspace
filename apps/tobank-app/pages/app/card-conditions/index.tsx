import styles from './index.module.less';

/* eslint-disable-next-line */
export interface CardConditionsProps {}

export function CardConditions(props: CardConditionsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CardConditions!</h1>
    </div>
  );
}

export default CardConditions;
