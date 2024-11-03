import { createContext, useState } from "react";

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

  const handleDismiss = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, popToast, handleDismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
