// /pages/index.js

import styles from "../styles/Home.module.css"; // Import local styles

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>DEREK WOOD</h1>
      <p className={styles.description}>Welcome to my portfolio!</p>
      <a href="#contact" className={styles.ctaButton}>Contact Me</a>
    </div>
  );
}