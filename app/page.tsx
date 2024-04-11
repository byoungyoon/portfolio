import styles from './page.module.css';
import Navigation from '@/app/_component/Navigation';
import CustomSakura from '@/app/_component/CustomSakura';
import { data as ArchivingData } from '@/app/_data/archivingData';
import Card from '@/app/_component/Card';
import CardBasic from '@/app/_component/CardBasic';

export default function Home() {
  return (
    <main id="page-top" className={styles.main}>
      <CustomSakura total={80}>
        <Navigation />
        <div className={styles.container}>
          <header className={styles.header}>header</header>
          <section id="skills" className={styles.skillSection}>
            <h2 className={styles.title}>Skills</h2>
          </section>
          <section id="archiving" className={styles.archivingSection}>
            <h2 className={styles.title}>Archiving</h2>
            <div className={styles.content}>
              {ArchivingData.map((value) => (
                <Card
                  key={value.title}
                  title={value.title}
                  redirect={value.redirect}
                  content={<CardBasic title={value.subTitle} content={value.subContent} />}
                />
              ))}
            </div>
          </section>
          <section id="projects" className={styles.projectSection}>
            <h2 className={styles.title}>Project</h2>
          </section>
          <section id="career" className={styles.careerSection}>
            <h2 className={styles.title}>Career</h2>
          </section>
        </div>
      </CustomSakura>
      <footer className={styles.footer}>
        Copyright 2024. Web Front-end developer portfolio -- &nbsp; <b>Lee Byoungyoon</b>
      </footer>
    </main>
  );
}
