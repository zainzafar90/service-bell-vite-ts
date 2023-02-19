import clx from "classnames";
import { useContext } from "react";
import { AppContext } from "../../../context/app-context";
import { CalendarIcon, ChatIcon, HomeIcon } from "../../../icons";

import { PoweredBy } from "../powered-by";

import styles from "./footer.module.scss";

export const WidgetNavFooter = () => {
  const isActive = true;
  const { setIsConversationViewOpen } = useContext(AppContext);

  return (
    <>
      <footer className={styles.widgetFooter}>
        <nav className={styles.widgetFooterContent}>
          <ul className={styles.widgetFooterNavContent}>
            <li>
              <button
                className={clx(
                  styles.widgetFooterNavContent__button,
                  isActive && styles["widgetFooterNavContent__button--active"]
                )}
              >
                <span>
                  <HomeIcon />
                </span>
                <span>Home</span>
              </button>
            </li>

            <li>
              <button
                className={styles.widgetFooterNavContent__button}
                onClick={() => setIsConversationViewOpen(true)}
              >
                <span className={styles.badgeWrapper}>
                  <ChatIcon />
                  <span className={styles.badge}>8</span>
                </span>
                <span>Chat</span>
              </button>
            </li>

            <li>
              <button className={styles.widgetFooterNavContent__button}>
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
