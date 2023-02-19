import clx from "classnames";
import { CalendarIcon, ChatIcon, HomeIcon } from "../../../icons";

import { PoweredBy } from "../powered-by";

import styles from "./footer.module.scss";

export const WidgetNavFooter = () => {
  return (
    <>
      <footer className={styles.widgetFooter}>
        <nav className={styles.widgetFooterContent}>
          <ul className={styles.widgetFooterNavContent}>
            <li>
              <button
                className={clx(
                  styles.widgetFooterNavContent__button,
                  true && styles["widgetFooterNavContent__button--active"]
                )}
              >
                <span>
                  <HomeIcon />
                </span>
                <span>Home</span>
              </button>
            </li>

            <li>
              <button className={clx(styles.widgetFooterNavContent__button)}>
                <span className={styles.badgeWrapper}>
                  <ChatIcon />
                  <span className={styles.badge}>8</span>
                </span>
                <span>Chat</span>
              </button>
            </li>

            <li>
              <button className={clx(styles.widgetFooterNavContent__button)}>
                <span>
                  <CalendarIcon />
                </span>
                <span>Meetings</span>
              </button>
            </li>
          </ul>
        </nav>
        <PoweredBy />
      </footer>
    </>
  );
};
