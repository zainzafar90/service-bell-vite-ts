import { Fragment, useContext } from "react";

import { AppContext } from "../../context/app-context";
import { WidgetNavFooter } from "./footer";
import { WidgetHeroSection } from "./widget-hero";
import { WidgetSlideOver } from "./widget-slide-over";

import styles from "./widget.module.scss";

export const Widget = () => {
  const { isWidgetExpanded } = useContext(AppContext);

  return (
    <div className={styles.widget}>
      <WidgetHeroSection />
      {isWidgetExpanded && (
        <Fragment>
          <WidgetSlideOver />
          <WidgetNavFooter />
        </Fragment>
      )}
    </div>
  );
};
