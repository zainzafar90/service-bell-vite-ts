import { useContext, useEffect, useState } from "react";
import clx from "classnames";

import styles from "./widget-hero.module.scss";
import { AppContext } from "../../context/app-context";

export const WidgetHeroSection = () => {
  const { isWidgetExpanded, setWidgetExpanded } = useContext(AppContext);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [showVideo]);

  return (
    <div className={styles.widgetHero}>
      {!isWidgetExpanded && (
        <div
          className={styles.widgetMini}
          onClick={() => {
            setWidgetExpanded(true);
          }}
        >
          <img className={styles.widgetMiniServiceBell} src="./img/bell.svg" />
          <span className={styles.widgetMiniTitle}>Talk to an expert</span>
        </div>
      )}
      <div className={styles.widgetHeroContent}>
        <img
          src="./img/agent.png"
          className={clx(styles.agentImg)}
          title="Your browser does not support the <video> tag"
        />
        <video
          autoPlay
          muted
          loop
          className={clx(styles.agentVideo, {
            [styles.showVideo]: showVideo,
          })}
        >
          <source src="./img/agent.mp4" type="video/mp4" />
          <img
            src="./img/agent.png"
            title="Your browser does not support the <video> tag"
          />
          Your browser does not support the video tag.
        </video>
        <div className={styles.widgetHeroOverlay} />
      </div>
    </div>
  );
};
