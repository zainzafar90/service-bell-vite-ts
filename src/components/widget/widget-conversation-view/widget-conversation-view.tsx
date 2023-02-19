import { useContext } from "react";

import { AppContext } from "../../../context/app-context";
import { ChevronIcon } from "../../../icons";
import { AgentType } from "../../../types";
import styles from "./widget-conversation-view.module.scss";

const agents: AgentType[] = [
  {
    id: 1,
    name: "Eleneor Pena",
    designation: "Sales Trainee",
    imgUrl: "./img/avatars/avatar-1.jpeg",
    status: "online",
  },

  {
    id: 2,
    name: "Kathryne Murphy",
    designation: "Financial Advisor",
    imgUrl: "./img/avatars/avatar-2.jpeg",
    status: "offline",
  },

  {
    id: 3,
    name: "Leslie Watkins",
    designation: "Customer Support",
    imgUrl: "./img/avatars/avatar-3.jpeg",
    status: "online",
  },
];

export const WidgetConversationView = () => {
  const { setIsConversationViewOpen } = useContext(AppContext);

  return (
    <div className={styles.widgetConversationView}>
      <div className={styles.widgetConversationView__Header}>
        <div className={styles.widgetConversationView__HeaderBackground}>
          <img src="./img/pattern.png" alt="background" />
        </div>
        <h6 className={styles.widgetConversationView__Title}>Chats</h6>

        {/* Back Button */}
        <button
          className={styles.widgetConversationView__BtnClose}
          onClick={() => {
            setIsConversationViewOpen(false);
          }}
        >
          <ChevronIcon />
        </button>
        <div
          className={styles.widgetConversationView__HeaderRoundedBottom}
        ></div>
      </div>
    </div>
  );
};
