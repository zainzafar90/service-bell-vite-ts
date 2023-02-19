import { useState } from "react";
import { Widget } from "./components/widget/widget";
import { WidgetWrapper } from "./components/widget/widget-wrapper";
import { AppContext } from "./context/app-context";

import "./styles/main.scss";

export const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AppContext.Provider
      value={{ isWidgetExpanded: isExpanded, setWidgetExpanded: setIsExpanded }}
    >
      <WidgetWrapper>
        <Widget />
      </WidgetWrapper>
    </AppContext.Provider>
  );
};
