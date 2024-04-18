import styles from './cardCareer.module.css';

type Props = {
  subTitle: string;
  mainItem: {
    date: string;
    content: string;
  };
  item: {
    title: string;
    date: string;
    content: string[];
  }[];
};

export default function CardCareer({ subTitle, mainItem, item }: Props) {
  return (
    <div className={styles.container}>
      <h4>{subTitle}</h4>
      <div className={styles.mainItem}>
        <h4>{mainItem.date}</h4>
        <p>{mainItem.content}</p>
      </div>
      <div className={styles.item}>
        {item.map((value, index) => (
          <div key={index}>
            <h4>{value.title}</h4>
            <p>{value.date}</p>
            <ul>
              {value.content.map((sValue) => (
                <li key={sValue}>{sValue}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
