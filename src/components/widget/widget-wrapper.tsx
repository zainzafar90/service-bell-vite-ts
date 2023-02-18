import clx from "classnames";
import { useState } from "react";
import { PropsWithChildren } from "react";

export const WidgetWrapper = (props: PropsWithChildren<{}>) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={clx("widget-wrapper", {
        "widget-wrapper--expanded": isExpanded,
      })}
    >
      {props.children}
    </div>
  );
};
