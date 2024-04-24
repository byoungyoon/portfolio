'use client';

import styles from './customModal.module.css';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  children: ReactNode;
};

export default function CustomModal({ children }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        {children}
        <button type="button" onClick={onClick}>
          test
        </button>
      </div>
    </div>
  );
}
