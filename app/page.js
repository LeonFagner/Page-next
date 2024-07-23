
import styles from "../styles/page.module.scss";
import Header from "../components/header/Header";
import Wellcome from "../components/Wellcome/Wellcome";
import Features from "../components/Features/Features"


export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Wellcome/>
      <Features/>
    </div>
  );
}
