'use client';

import Card from '@/app/_component/Card';
import CardTable from '@/app/_component/CardTable';
import { Hue, IColor, Saturation } from 'react-color-palette';
import { Dispatch, SetStateAction, useRef } from 'react';
import styles from './customTreeOption.module.css';
import { CSSTransition } from 'react-transition-group';

type ColorPickerProps = {
  color: IColor;
  setColor: Dispatch<SetStateAction<IColor>>;
};

function ColorPicker({ color, setColor }: ColorPickerProps) {
  return (
    <>
      <div
        className={styles.preview}
        style={{
          background: color.hex,
        }}
      />
      <div className={styles.colorPicker}>
        <Saturation height={300} color={color} onChange={setColor} />
        <Hue color={color} onChange={setColor} />
      </div>
    </>
  );
}

type ResetButtonProps = {
  onReset: () => void;
};

function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button className="button" type="button" onClick={onReset}>
      reset
    </button>
  );
}

type Props = {
  color: IColor;
  setColor: Dispatch<SetStateAction<IColor>>;
  open: boolean;

  onReset: () => void;
};

export default function CustomTreeOption({ color, setColor, open, onReset }: Props) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={{
        enter: styles['option-enter-active'],
        enterDone: styles['option-enter-done'],
        exit: styles['option-exit-active'],
        exitDone: styles['option-exit-done'],
      }}
      timeout={200}
      in={open}
      unmountOnExit
    >
      <div ref={nodeRef}>
        <Card
          title="옵션"
          content={
            <CardTable
              data={[
                {
                  key: 'color',
                  value: <ColorPicker color={color} setColor={setColor} />,
                },
                {
                  key: 'reset',
                  value: <ResetButton onReset={onReset} />,
                },
              ]}
            />
          }
        />
      </div>
    </CSSTransition>
  );
}
