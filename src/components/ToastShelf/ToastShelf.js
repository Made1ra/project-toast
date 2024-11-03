import React, { useContext } from "react";

import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
