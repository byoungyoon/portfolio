import styles from './page.module.css';
import Navigation from '@/app/_component/Navigation';

export default function Home() {
  return (
    <main id="page-top" className={styles.main}>
      <Navigation />
      <header className={styles.header}>header</header>
      <section id="skills" className={styles.skillSection}>
        skills
      </section>
      <section id="archiving" className={styles.archivingSection}>
        archiving
      </section>
      <section id="projects" className={styles.projectSection}>
        project
      </section>
      <section id="career" className={styles.careerSection}>
        career
      </section>
      <footer className={styles.footer}>footer</footer>
    </main>
  );
}
