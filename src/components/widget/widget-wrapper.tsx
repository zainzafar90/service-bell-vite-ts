import clx from "classnames";
import { useContext } from "react";
import { PropsWithChildren } from "react";

import { AppContext } from "../../context/app-context";
import styles from "./widget-wrapper.module.scss";

export const WidgetWrapper = (props: PropsWithChildren<{}>) => {
  const { isWidgetExpanded } = useContext(AppContext);
  return (
    <div
      className={clx(styles.widgetWrapper, {
        [styles.widgetWrapperExpanded]: isWidgetExpanded,
      })}
    >
      {props.children}
    </div>
  );
};
