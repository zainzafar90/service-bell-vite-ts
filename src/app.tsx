import { Widget } from "./components/widget/widget";
import { WidgetWrapper } from "./components/widget/widget-wrapper";

import "./styles/main.scss";

export const App = () => {
  return (
    <WidgetWrapper>
      <Widget />
    </WidgetWrapper>
  );
};
