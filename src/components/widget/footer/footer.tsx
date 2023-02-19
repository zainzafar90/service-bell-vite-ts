import { PoweredBy } from "../powered-by";

import styles from "./footer.module.scss";

export const WidgetNavFooter = () => {
  return (
    <footer className={styles.widgetFooter}>
      <nav></nav>
      <PoweredBy />
    </footer>
  );
};
