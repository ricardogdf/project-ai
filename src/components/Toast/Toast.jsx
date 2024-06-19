import parse from "html-react-parser";
import { toast } from "react-hot-toast";

import { Icons } from "../Icons";
import Spacer from "../Spacer";
import Row from "../Row";
import { Button, NotificationBody } from "./Toast.styles";

const Toast = {
  success: ({ message }) => {
    toast.success(message, {
      position: "center",
      duration: 5000,
    });
  },
  error: ({ message }) => {
    toast.error(message, {
      position: "center",
    });
  },
  warning: ({ message }) => {
    toast(message, {
      icon: "⚠️",
      position: "center",
    });
  },
};

export const Notification = (message, t, onDismiss, navigate) => {
  function dismiss(toast, id) {
    onDismiss(message);
    toast.dismiss(id);
  }

  function handleClick(toast, id) {
    if (message.link && message.destino === "ticket") {
      onDismiss(message);
      toast.dismiss(id);

      navigate("/helpDesk/view", {
        state: { ticketID: message.link },
      });
    }
  }

  toast(
    (toasty) => (
      <NotificationBody>
        <Row alignItems="center">
          <div
            onClick={() => handleClick(toast, toasty.id)}
            className={`${
              message.link && message.destino === "ticket" ? "pointer" : ""
            }`}
          >
            <Row alignItems="center" className={`title ${message.tipo}`}>
              <Icons icon={message.tipo === "alert" ? "warning" : "bell"} />
              {message.titulo}
            </Row>
            {message.mensagem && parse(message.mensagem)}
          </div>
          <Spacer width={10} />
          <Button onClick={() => dismiss(toast, toasty.id)}>
            {t("label.dismiss")}
          </Button>
        </Row>
      </NotificationBody>
    ),
    {
      position: "bottom-right",
      duration: 5000,
    }
  );
};

export default Toast;
