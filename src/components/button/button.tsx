import { PropsWithChildren } from "react";
import clx from "classnames";

import styles from "./button.module.scss";

interface ButtonProps {
  type: "primary" | "secondary";
  fullWidth?: boolean;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={clx(styles.widgetButton, {
        [styles.widgetButton__Primary]: props.type === "primary",
        [styles.widgetButton__Secondary]: props.type === "secondary",
        [styles.widgetButton__FullWidth]: props.fullWidth,
      })}
    >
      {props.children}
    </button>
  );
};
