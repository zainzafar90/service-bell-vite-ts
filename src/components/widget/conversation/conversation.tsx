import clx from "classnames";
import { AgentType, ConversationType } from "../../../types";

import { Avatar } from "../../avatar";

import styles from "./conversation.module.scss";

export const Conversation = (props: { conversation: ConversationType }) => {
  const { conversation } = props;

  return (
    <li
      key={conversation.id}
      className={styles.widgetLiveAgentSection__AgentItem}
    >
      <div className={styles.widgetLiveAgentSection__AgentItemLeft}>
        <div className={styles.widgetLiveAgentSection__AgentItemAvatar}>
          <Avatar src={conversation.agent.imgUrl} />
          <span
            className={clx(
              styles.widgetLiveAgentSection__AgentItemStatus,
              styles[
                `widgetLiveAgentSection__AgentItemStatus--${conversation.agent.status}`
              ]
            )}
          />
        </div>
        <div className={styles.widgetLiveAgentSection__AgentItemDetails}>
          <h5 className={styles.widgetLiveAgentSection__AgentItemName}>
            {conversation.lastMessage}
          </h5>
          <span className={styles.widgetLiveAgentSection__AgentItemDesignation}>
            {conversation.agent.name} -{conversation.lastMessageTime}
          </span>
        </div>
      </div>
      <div className={styles.widgetLiveAgentSection__AgentItemRight}>
        {conversation.unreadCount > 0 ? (
          <span
            className={styles.widgetLiveAgentSection__AgentItemRightUnread}
          />
        ) : (
          <img src="./img/icons/right-chevron.svg" />
        )}
      </div>
    </li>
  );
};
