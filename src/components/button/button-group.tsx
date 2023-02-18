import { PropsWithChildren } from "react";

import styles from "./button-group.module.scss";

export const ButtonGroup = (props: PropsWithChildren<{}>) => {
  return <div className={styles.widgetButtonGroup}>{props.children}</div>;
};
