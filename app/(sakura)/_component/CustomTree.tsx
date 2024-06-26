'use client';

import { GrTreeOption } from 'react-icons/gr';
import styles from './customTree.module.css';
import { useColor } from 'react-color-palette';
import 'react-color-palette/css';
import { Tree } from '@byoungyoon/by-asset';
import { useState } from 'react';
import CustomTreeOption from '@/app/(sakura)/_component/CustomTreeOption';

const sakuraColor = '#ffc5d0';

export default function CustomTree() {
  const [option, setOption] = useState({
    reset: 0,
    level: window.innerHeight / 250 - 1,
  });

  const [open, setOpen] = useState(false);
  const [color, setColor] = useColor(sakuraColor);

  const isMobile =
    window.navigator.userAgent.indexOf('iPhone') > -1 || window.navigator.userAgent.indexOf('Android') > -1;

  const onToggle = () => {
    setOpen(!open);
  };

  const onReset = () => {
    setOption({ ...option, reset: option.reset + 1 });
  };

  return (
    <div className={styles.container}>
      <Tree
        target="header"
        isResize={!isMobile}
        color={color.hex}
        defaultDepth={12}
        defaultCount={isMobile ? 2 : 6}
        {...option}
      />
      <div className={styles.optionLayer}>
        <CustomTreeOption color={color} setColor={setColor} onReset={onReset} open={open} />
        <div className={styles.optionButton} onClick={onToggle}>
          <GrTreeOption className={styles.option} />
        </div>
      </div>
    </div>
  );
}
