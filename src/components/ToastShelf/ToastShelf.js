import { useContext, useEffect } from "react";

import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, dismissAllToasts } = useContext(ToastContext);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        dismissAllToasts();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismissAllToasts]);

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
