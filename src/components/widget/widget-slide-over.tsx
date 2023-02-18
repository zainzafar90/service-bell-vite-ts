import { WidgetHomeView } from "./widget-home-view/";

import styles from "./widget-slide-over.module.scss";

export const WidgetSlideOver = () => {
  return (
    <div className={styles.widgetSlideOver}>
      <WidgetHomeView />
    </div>
  );
};
