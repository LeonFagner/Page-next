
import styles from "../styles/page.module.scss";
import Header from "../components/header/Header";
import Wellcome from "../components/Wellcome/Wellcome";
import Features from "../components/Features/Features";
import Contatos from "../components/Contatos/Contatos";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Wellcome/>
      <Features/>
      <Contatos/>
      <Footer/>
    </div>
  );
}
