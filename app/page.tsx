import styles from './page.module.css';
import Navigation from '@/app/_component/Navigation';
import CustomSakura from '@/app/_component/CustomSakura';
import { data as ArchivingData } from '@/app/_data/archivingData';
import { data as SkillsData } from '@/app/_data/skillsData';
import { data as ProjectsData } from '@/app/_data/projectsData';
import Card from '@/app/_component/Card';
import CardBasic from '@/app/_component/CardBasic';
import CustomTree from '@/app/_component/CustomTree';
import { IoIosArrowDown } from 'react-icons/io';
import CardProject from '@/app/_component/CardProject';

export default function Home() {
  return (
    <main id="page-top" className={styles.main}>
      <CustomSakura total={80}>
        <Navigation />
        <header id="header" className={styles.header}>
          <CustomTree />
          <div className={styles.headerLayer}>
            <h2 className={styles.headerLayerTitle}>
              안녕하세요. 웹 프론트엔드 개발자 <span className={styles.accent}>이병윤</span>입니다.
            </h2>
            <h3 className={styles.headerLayerContent}>
              <span className={styles.accent}>꾸준히 발전</span>해야 하는 프론트엔드를 좋아합니다.
            </h3>
            <h3 className={styles.headerLayerContent}>
              어제의 코드보다 더 좋은 <span className={styles.accent}>오늘의 코드</span>를 희망합니다.
            </h3>

            <IoIosArrowDown className={styles.headerLayerIcon} />
          </div>
        </header>
        <div className={styles.container}>
          <section id="skills" className={styles.skillSection}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
              {SkillsData.map((value) => (
                <Card
                  key={value.title}
                  title={value.title}
                  content={<CardBasic title={value.subTitle} content={value.subContent} />}
                />
              ))}
            </div>
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
            <h2 className={styles.title}>Projects & Development</h2>
            <div className={styles.content}>
              {ProjectsData.map((value) => (
                <Card key={value.title} title={value.title} content={<CardProject {...value} />} />
              ))}
            </div>
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
