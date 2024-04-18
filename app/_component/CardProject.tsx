import styles from './cardProject.module.css';

import Image, { StaticImageData } from 'next/image';
import CustomSwiper from '@/app/_component/CustomSwiper';
import Sakura from '@/public/img/sakura.png';
import Link from 'next/link';

type Props = {
  subTitle: string;
  images: StaticImageData[];
  urls: {
    key: string;
    value: string;
  }[];
};

export default function CardProject({ subTitle, images, urls }: Props) {
  const ImageJSX = images.map((image, index) => <Image key={index} className={styles.image} src={image} alt="image" />);

  return (
    <div className={styles.container}>
      <h4 className={styles.subTitle}>{subTitle}</h4>
      <div className={styles.layer}>
        <CustomSwiper slide={ImageJSX} />
        <div style={{ width: '450px' }}>
          <article className={styles.readmeArticle}>
            <div>
              <Image src={Sakura} alt="sakura" width={20} height={20} />
              <strong>소개</strong>
              <p>
                소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개
              </p>
              <p>
                소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개
              </p>
            </div>
            <div>
              <Image src={Sakura} alt="sakura" width={20} height={20} />
              <strong>사용 스택</strong>
              <p>Next.js, React-Query, MSW</p>
            </div>
          </article>
          <div>
            <button type="button">ReadMe</button>
            <button type="button">ReadMe</button>
            <button type="button">ReadMe</button>
          </div>
          <div className={styles.border} />
          <article className={styles.infoArticle}>
            {urls.map((url) => (
              <div key={url.key}>
                <Image src={Sakura} alt="sakura" width={20} height={20} />
                <strong>{url.key}</strong>
                <Link href={url.value} target="_blank">
                  {url.value}
                </Link>
              </div>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
