import { WidgetHeroSection } from "./widget-hero";

import styles from "./widget.module.scss";

export const Widget = () => {
  return (
    <div className={styles.widget}>
      <WidgetHeroSection />
    </div>
  );
};
