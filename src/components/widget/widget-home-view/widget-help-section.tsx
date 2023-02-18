import { Input } from "../../input";
import styles from "./widget-help-section.module.scss";

export const WidgetHelpSection = () => {
  return (
    <div className={styles.widgetHelpSection}>
      <div className={styles.widgetHelpSection__Header}>
        <h3 className={styles.widgetHelpSection__Title}>
          <img
            className={styles.widgetHelpSection__Icon}
            src="./img/icons/help.svg"
          />
          Search for help
        </h3>
        <img src="./img/icons/right-chevron.svg" />
      </div>
      <div className={styles.widgetHelpSection__Input}>
        <Input type="text" placeholder="Search for help..." />
        <img
          src="./img/icons/search.svg"
          className={styles.widgetHelpSection__InputIcon}
        />
      </div>
    </div>
  );
};
