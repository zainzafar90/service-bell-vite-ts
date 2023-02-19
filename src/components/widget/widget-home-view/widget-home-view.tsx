import { useContext } from "react";

import { AppContext } from "../../../context/app-context";
import { Avatar, AvatarGroup } from "../../avatar";
import { Button, ButtonGroup } from "../../button";
import { WidgetHelpSection } from "./widget-help-section";
import styles from "./widget-home-view.module.scss";
import { WidgetLiveAgentSection } from "./widget-live-agents-section";

const helpItems = [
  {
    id: 1,
    question: "Get setup quickly",
    answer: "...",
  },
  {
    id: 2,
    question: "How can I embed videos?",
    answer: "...",
  },
  {
    id: 3,
    question: "How Servicebell's plans work?",
    answer: "...",
  },
];

export const WidgetHomeView = () => {
  const { setWidgetExpanded } = useContext(AppContext);

  return (
    <div className={styles.widgetHomeView}>
      <div className={styles.widgetHomeView__Content}>
        <div className={styles.widgetHomeView__Header}>
          {/* Customer Logo */}
          <img
            className={styles.widgetHomeView__CustomerLogo}
            src="./img/customer-logo.png"
          />

          {/* Close Button */}
          <button
            className={styles.widgetHomeView__BtnClose}
            onClick={() => {
              setWidgetExpanded(false);
            }}
          >
            <img src="./img/icons/close.svg" />
          </button>
        </div>

        <div className={styles.widgetHomeView__Body}>
          <AvatarGroup>
            <Avatar src="./img/avatars/avatar-1.jpeg" />
            <Avatar src="./img/avatars/avatar-2.jpeg" />
            <Avatar initials="Z" />
            <Avatar src="./img/avatars/avatar-3.jpeg" />
          </AvatarGroup>

          <h5 className={styles.widgetHomeView__Title}>Chat with us</h5>

          <ButtonGroup>
            <Button type="primary" fullWidth>
              <img src="./img/icons/phone.svg" />
              Call Us
            </Button>
            <Button type="secondary" fullWidth>
              <img src="./img/icons/chat.svg" />
              Chat With Us
            </Button>
          </ButtonGroup>

          <WidgetHelpSection helpItems={[]} />

          <WidgetLiveAgentSection agents={[]} />

          <WidgetHelpSection helpItems={helpItems} />
        </div>
      </div>
    </div>
  );
};
