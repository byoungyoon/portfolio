import styles from './customModal.module.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function CustomModal({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}
