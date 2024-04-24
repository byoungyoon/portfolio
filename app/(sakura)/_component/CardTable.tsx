import { ReactNode } from 'react';
import styles from './cardTable.module.css';

type Props = {
  data: {
    key: string;
    value: string | ReactNode;
  }[];
};

export default function CardTable({ data }: Props) {
  return (
    <div>
      {data.map((datum) => (
        <div className={styles.layer} key={datum.key}>
          <h4 className={styles.key}>{datum.key}</h4>
          <span>{datum.value}</span>
        </div>
      ))}
    </div>
  );
}
