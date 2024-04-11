import styles from './card.module.css';
import { ReactNode } from 'react';
import cx from 'classnames';
import Link from 'next/link';

type Props = {
  title: string;
  content: ReactNode | string;

  redirect?: string;
};

export default function Card({ title, content, redirect }: Props) {
  const ui = (
    <div className={cx(styles.container, redirect && styles.containerCursor)}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{content}</div>
    </div>
  );

  if (!redirect) return ui;

  return (
    <Link href={redirect} target="_blank">
      {ui}
    </Link>
  );
}
