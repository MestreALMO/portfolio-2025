import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles.homeMain}`}>
      <div className={`${styles.homeImg}`}></div>
      <h1>Hello World</h1>
      <p className={`${styles.homeText}`}>text1</p>
      <p className={`${styles.homeText}`}>text2</p>
    </main>
  );
}
