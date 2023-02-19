import { AgentType } from "../../../types";
import { Card } from "../../card";
import { Agent } from "../agent";

import styles from "./widget-live-agents-section.module.scss";

interface WidgetLiveAgentSectionProps {
  agents: AgentType[];
}

export const WidgetLiveAgentSection = (props: WidgetLiveAgentSectionProps) => {
  return (
    <div className={styles.widgetLiveAgentSection}>
      <Card>
        {/* Ideally this header should be extracted into its own component and used in both help and agent sections */}
        <div className={styles.widgetLiveAgentSection__Header}>
          <h3 className={styles.widgetLiveAgentSection__Title}>
            <img
              className={styles.widgetLiveAgentSection__Icon}
              src="./img/icons/user-signal.svg"
            />
            Live Agents
          </h3>
          <div className={styles.widgetLiveAgentSection__Right}>
            <span className={styles.widgetLiveAgentSection__Badge}>9</span>
            <img src="./img/icons/right-chevron.svg" />
          </div>
        </div>

        {props.agents?.length > 0 && (
          <ul
            role="list"
            className={styles.widgetLiveAgentSection__LiveAgentItems}
          >
            {props.agents.map((agent) => (
              <Agent agent={agent} key={agent.id} />
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
};
