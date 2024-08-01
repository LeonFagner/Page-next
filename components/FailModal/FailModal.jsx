

import { FiXSquare } from "react-icons/fi";
import Button from "../Button/Button";
import styles from "./FailModal.module.scss";

export default function FailModal({ closeModal }){
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiXSquare />
        <p>Não foi possível enviar no momento, tente novamente mais tarde.</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button title="fechar" />
        </div>
      </div>
    </div>
  );
};