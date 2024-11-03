import { createContext, useCallback, useState } from "react";

import { useEscapeKey } from "../../hooks/useEscapeKey";

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

  useEscapeKey(dismissAllToasts);

  return (
    <ToastContext.Provider value={{ toasts, popToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
