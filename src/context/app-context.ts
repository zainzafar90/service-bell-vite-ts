import { createContext } from "react";

type AppContextType = {
  isWidgetExpanded: boolean;
  setWidgetExpanded: (isExpanded: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  isWidgetExpanded: false,
  setWidgetExpanded: () => {},
});
