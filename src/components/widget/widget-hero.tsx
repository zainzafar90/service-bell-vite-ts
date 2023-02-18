import { useEffect, useState } from "react";
import clx from "classnames";

import styles from "./widget-hero.module.scss";

export const WidgetHeroSection = () => {
  const [isVideoInFocus, setIsVideoInFocus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVideoInFocus((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVideoInFocus]);

  return (
    <div className={styles.widgetHero}>
      <div className={styles.widgetHeroContent}>
        <img
          className={clx(styles.agentImg)}
          src="./img/agent.png"
          title="Your browser does not support the <video> tag"
        />
        <video
          autoPlay
          muted
          loop
          className={clx(styles.agentVideo, {
            [styles.videoInFocus]: isVideoInFocus,
          })}
        >
          <source src="./img/agent.mp4" type="video/mp4" />
          <img
            src="./img/agent.png"
            title="Your browser does not support the <video> tag"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.widgetHeroOverlay} />
    </div>
  );
};
