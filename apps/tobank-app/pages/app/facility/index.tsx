import styles from './index.module.less';

/* eslint-disable-next-line */
export interface FacilityProps {}

export function Facility(props: FacilityProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Facility!</h1>
    </div>
  );
}

export default Facility;
