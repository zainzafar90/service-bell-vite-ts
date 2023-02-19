import { createContext } from "react";

type AppContextType = {
  isWidgetExpanded: boolean;
  isConversationViewOpen: boolean;
  setWidgetExpanded: (isExpanded: boolean) => void;
  setIsConversationViewOpen: (isOpen: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  isWidgetExpanded: false,
  isConversationViewOpen: false,
  setWidgetExpanded: () => {},
  setIsConversationViewOpen: () => {},
});
