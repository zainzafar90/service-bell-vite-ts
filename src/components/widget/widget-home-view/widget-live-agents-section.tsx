import { Card } from "../../card";
import styles from "./widget-live-agents-section.module.scss";

interface WidgetLiveAgentSectionProps {
  agents: { id: number; question: string; answer: string }[];
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
          <img src="./img/icons/right-chevron.svg" />
        </div>

        {props.agents?.length > 0 && (
          <div className={styles.widgetLiveAgentSection__LiveAgentItems}>
            {props.agents.map((agent) => (
              <div
                className={styles.widgetLiveAgentSection__LiveAgentItem}
                key={agent.id}
              >
                <h5
                  className={styles.widgetLiveAgentSection__LiveAgentItemTitle}
                >
                  {agent.question}
                </h5>
                <img src="./img/icons/right-chevron.svg" />
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};
