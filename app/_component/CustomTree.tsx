'use client';

import { GrTreeOption } from 'react-icons/gr';
import styles from './customTree.module.css';
import { useColor } from 'react-color-palette';
import 'react-color-palette/css';
import { Tree } from '@byoungyoon/by-asset';
import { useState } from 'react';
import CustomTreeOption from '@/app/_component/CustomTreeOption';

const sakuraColor = '#ffc5d0';

export default function CustomTree() {
  const [open, setOpen] = useState(false);
  const [reset, setReset] = useState(0);
  const [color, setColor] = useColor(sakuraColor);

  const onToggle = () => {
    setOpen(!open);
  };

  const onReset = () => {
    setReset(reset + 1);
  };

  return (
    <div className={styles.container}>
      <Tree target="header" color={color.hex} reset={reset} isResize={true} defaultDepth={11} defaultCount={3} />
      <div className={styles.optionLayer}>
        {open && <CustomTreeOption color={color} setColor={setColor} onReset={onReset} />}
        <div className={styles.optionButton} onClick={onToggle}>
          <GrTreeOption className={styles.option} />
        </div>
      </div>
    </div>
  );
}
