import { createContext, useCallback, useState } from "react";

import useKeyDown from "../../hooks/useKeyDown";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const popToast = (variant, message) => {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        variant,
        message,
      },
    ]);
  };

  const dismissToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const dismissAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  useKeyDown("Escape", dismissAllToasts);

  return (
    <ToastContext.Provider value={{ toasts, popToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
