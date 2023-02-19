import clx from "classnames";
import { AgentType } from "../../../types";

import { Avatar } from "../../avatar";

import styles from "./agent.module.scss";

export const Agent = (props: { agent: AgentType }) => {
  const { agent } = props;

  return (
    <li key={agent.id} className={styles.widgetLiveAgentSection__AgentItem}>
      <div className={styles.widgetLiveAgentSection__AgentItemLeft}>
        <div className={styles.widgetLiveAgentSection__AgentItemAvatar}>
          <Avatar src={agent.imgUrl} />
          <span
            className={clx(
              styles.widgetLiveAgentSection__AgentItemStatus,
              styles[`widgetLiveAgentSection__AgentItemStatus--${agent.status}`]
            )}
          />
        </div>
        <div className={styles.widgetLiveAgentSection__AgentItemDetails}>
          <h5 className={styles.widgetLiveAgentSection__AgentItemName}>
            {agent.name}
          </h5>
          <span className={styles.widgetLiveAgentSection__AgentItemDesignation}>
            {agent.designation}
          </span>
        </div>
      </div>
      <div className={styles.widgetLiveAgentSection__AgentItemRight}>
        <img src="./img/icons/right-chevron.svg" />
      </div>
    </li>
  );
};
