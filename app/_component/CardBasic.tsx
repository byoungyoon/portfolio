import styles from './cardBasic.module.css';

type Props = {
  title: string;
  content: string[];
};

export default function CardBasic({ title, content }: Props) {
  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.list}>
        {content.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}
