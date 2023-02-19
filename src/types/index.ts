export type AgentType = {
  id: number;
  name: string;
  designation: string;
  imgUrl: string;
  status: "online" | "offline";
};

export type ConversationType = {
  id: number;
  agent: AgentType;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
};
