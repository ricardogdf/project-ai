import { toast } from "react-hot-toast";

const Toast = {
  success: ({ message }) => {
    toast.success(message, {
      position: "bottom-center",
      duration: 5000,
    });
  },
  error: ({ message }) => {
    toast.error(message, {
      position: "bottom-center",
    });
  },
  warning: ({ message }) => {
    toast(message, {
      icon: "⚠️",
      position: "bottom-center",
    });
  },
};

export default Toast;
