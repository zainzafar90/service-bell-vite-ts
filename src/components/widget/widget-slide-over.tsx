import clx from "classnames";
import { useContext } from "react";
import { AppContext } from "../../context/app-context";

import { WidgetHomeView } from "./widget-home-view/";

import styles from "./widget-slide-over.module.scss";

export const WidgetSlideOver = () => {
  const { isWidgetExpanded } = useContext(AppContext);

  return (
    <div
      className={clx(styles.widgetSlideOver, {
        [styles.widgetExpanded]: isWidgetExpanded,
      })}
    >
      <WidgetHomeView />
    </div>
  );
};
