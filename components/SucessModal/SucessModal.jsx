import { FiCheckCircle } from "react-icons/fi";
import Button from "../Button/Button";
import styles from "./SucessModal.module.scss";

export default function SuccessModal({ closeModal }) {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiCheckCircle />
        <p>Email enviado com sucesso!</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button title="fechar" />
        </div>
      </div>
    </div>
  );
}