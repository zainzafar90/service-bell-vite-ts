import { PropsWithChildren } from "react";

import styles from "./avatar-group.module.scss";

export const AvatarGroup = (props: PropsWithChildren<{}>) => {
  return <div className={styles.widgetAvatarGroup}>{props.children}</div>;
};
