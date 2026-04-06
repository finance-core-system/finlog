import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} FINLOG · 금융 도메인 학습 블로그</p>
      </div>
    </footer>
  );
}
