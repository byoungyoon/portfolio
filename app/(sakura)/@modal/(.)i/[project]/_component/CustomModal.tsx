'use client';

import styles from './customModal.module.css';
import { MouseEventHandler, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { MdClose } from 'react-icons/md';

type Props = {
  children: ReactNode;
};

export default function CustomModal({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const onClickIcon = () => {
    router.back();
  };

  const onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    router.back();
  };

  const onClickArticle: MouseEventHandler<HTMLElement> = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <article className={styles.modal} onClick={onClickArticle}>
        {children}
        <MdClose className={styles.close} onClick={onClickIcon} />
      </article>
    </div>
  );
}
