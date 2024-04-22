'use client';

import { GrTreeOption } from 'react-icons/gr';
import styles from './customTree.module.css';
import { useColor } from 'react-color-palette';
import 'react-color-palette/css';
import { Tree } from '@byoungyoon/by-asset';
import { useEffect, useState } from 'react';
import CustomTreeOption from '@/app/_component/CustomTreeOption';

const sakuraColor = '#ffc5d0';

export default function CustomTree() {
  const [option, setOption] = useState({
    reset: 0,
    level: 3,
  });

  const [open, setOpen] = useState(false);
  const [color, setColor] = useColor(sakuraColor);

  const onToggle = () => {
    setOpen(!open);
  };

  const onReset = () => {
    setOption({ ...option, reset: option.reset + 1 });
  };

  useEffect(() => {
    setOption({ ...option, level: window.innerHeight / 250 - 1 });
  }, []);

  return (
    <div className={styles.container}>
      <Tree target="header" isResize={true} color={color.hex} defaultDepth={12} defaultCount={3} {...option} />
      <div className={styles.optionLayer}>
        {open && <CustomTreeOption color={color} setColor={setColor} onReset={onReset} />}
        <div className={styles.optionButton} onClick={onToggle}>
          <GrTreeOption className={styles.option} />
        </div>
      </div>
    </div>
  );
}
