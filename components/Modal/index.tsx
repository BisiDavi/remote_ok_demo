import { PropsWithChildren } from "react";
import { Modal } from "react-bootstrap";
import styles from "./modal.module.css";

export default function AppModal({
  children,
  ...props
}: PropsWithChildren<AppModalProps>) {
  return (
    <Modal
      size="lg"
      aria-labelledby="pagemodal"
      {...props}
      centered
      contentClassName={styles.modal}
    >
      <Modal.Header>
        <h1>{props.title}</h1>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

interface AppModalProps {
  show: boolean;
  onHide: () => void;
  title?: string;
  icon?: boolean;
  children;
}
