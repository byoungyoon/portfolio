'use client';

import styles from './navigation.module.css';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import { HiMenu } from 'react-icons/hi';
import cx from 'classnames';

export default function Navigation() {
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);

  const nodeRef = useRef(null);
  const navRef = useRef(null);

  const onToggle = () => {
    setOpen(!open);
  };

  const onScroll = () => {
    console.log(window.scrollY);

    setTop(window.scrollY === 0);
  };

  useEffect(() => {
    setTop(window.scrollY === 0);
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  console.log(top);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={{
        enter: styles['navbar-enter-active'],
        exit: styles['navbar-exit-active'],
        exitDone: styles['navbar-exit-done'],
      }}
      timeout={500}
      in={top}
    >
      <nav ref={nodeRef} className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.layer}>
            <Link className={styles.title} href={'/#page-top'}>
              BY Portfolio
            </Link>
            <HiMenu className={styles.hidden} onClick={onToggle} />
          </div>
          <ul ref={navRef} className={cx(styles.nav, !open && styles.hidden)}>
            <li>
              <Link href={'/#skills'}>Skills</Link>
            </li>
            <li>
              <Link href={'/#archiving'}>Archiving</Link>
            </li>
            <li>
              <Link href={'/#projects'}>Projects</Link>
            </li>
            <li>
              <Link href={'/#career'}>Career</Link>
            </li>
          </ul>
        </div>
      </nav>
    </CSSTransition>
  );
}
