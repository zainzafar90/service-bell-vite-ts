import clx from "classnames";
import { useContext } from "react";
import { PropsWithChildren } from "react";

import { AppContext } from "../../context/app-context";
import { ChevronIcon } from "../../icons";
import styles from "./widget-wrapper.module.scss";

export const WidgetWrapper = (props: PropsWithChildren<{}>) => {
  const { isWidgetExpanded, setWidgetExpanded } = useContext(AppContext);

  return (
    <div className={styles.widgetWrapper}>
      <div
        className={clx(styles.Container, {
          [styles.widgetWrapperExpanded]: isWidgetExpanded,
        })}
      >
        {props.children}
      </div>

      <button
        onClick={() => {
          setWidgetExpanded(false);
        }}
        className={clx(styles.widgetToggle, {
          [styles.widgetToggleExpanded]: isWidgetExpanded,
        })}
      >
        <ChevronIcon />
      </button>
    </div>
  );
};
