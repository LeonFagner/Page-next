
import styles from "../styles/page.module.scss";
import Header from "../components/header/Header";
import Wellcome from "../components/Wellcome/Wellcome"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Wellcome/>
    </div>
  );
}
