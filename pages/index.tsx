import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={styles.name}>DEREK WOOD</h1>
        <a href="#work" className={styles.ctaButton}>
          <span>Check out my work</span>
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </div>
  );
};

export default Home;