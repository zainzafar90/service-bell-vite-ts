import { useContext } from "react";

import { AppContext } from "../../context/app-context";
import { WidgetNavFooter } from "./footer";
import { WidgetConversationView } from "./widget-conversation-view";
import { WidgetHeroSection } from "./widget-hero";
import { WidgetSlideOver } from "./widget-slide-over";

import styles from "./widget.module.scss";

export const Widget = () => {
  const { isWidgetExpanded, isConversationViewOpen } = useContext(AppContext);

  return (
    <div className={styles.widget}>
      <WidgetHeroSection />

      {isWidgetExpanded && (
        <>
          <WidgetSlideOver />
          <WidgetConversationView />
          <WidgetNavFooter />
        </>
      )}
    </div>
  );
};
