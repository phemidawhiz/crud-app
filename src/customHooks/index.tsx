import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
};

export const useNotifications = () => {
  const successAlert = (str: string) => toast.success(str);
  const errorAlert = (str: string) => toast.error(str);
  const infoAlert = (str: string) => toast(str);

  return {
    successAlert,
    errorAlert,
    infoAlert,
  };
};
