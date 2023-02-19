import { Card } from "../../card";
import { Input } from "../../input";
import styles from "./widget-help-section.module.scss";

interface WidgetHelpSectionProps {
  /* Answers aren't shown in the design but I added them for the sake of the example */
  helpItems: { id: number; question: string; answer: string }[];
}

export const WidgetHelpSection = (props: WidgetHelpSectionProps) => {
  return (
    <div className={styles.widgetHelpSection}>
      <Card>
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

        {props.helpItems?.length > 0 && (
          <div className={styles.widgetHelpSection__HelpItems}>
            {props.helpItems.map((helpItem) => (
              <div
                className={styles.widgetHelpSection__HelpItem}
                key={helpItem.id}
              >
                <h5 className={styles.widgetHelpSection__HelpItemTitle}>
                  {helpItem.question}
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
