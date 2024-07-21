
import styles from "../styles/page.module.scss";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
    </div>
  );
}
