import Card from '@/app/_component/Card';
import CardTable from '@/app/_component/CardTable';
import { Hue, IColor, Saturation } from 'react-color-palette';
import { Dispatch, SetStateAction } from 'react';
import styles from './customTreeOption.module.css';

type ColorPickerProps = {
  color: IColor;
  setColor: Dispatch<SetStateAction<IColor>>;
};

function ColorPicker({ color, setColor }: ColorPickerProps) {
  return (
    <>
      <div
        style={{
          background: color.hex,
          width: '20px',
          height: '20px',
          border: '1px solid black',
        }}
      />
      <div style={{ width: '300px', marginTop: '0.5rem' }}>
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
    <button className={styles.resetButton} type="button" onClick={onReset}>
      reset
    </button>
  );
}

type Props = {
  color: IColor;
  setColor: Dispatch<SetStateAction<IColor>>;
  onReset: () => void;
};

export default function CustomTreeOption({ color, setColor, onReset }: Props) {
  return (
    <div>
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
  );
}
