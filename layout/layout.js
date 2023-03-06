import styles from '/Users/abhi/Documents/daily_cal/week1/nextjs-blog/Layout/components:layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}