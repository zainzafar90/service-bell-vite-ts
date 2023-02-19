import { useContext } from "react";

import { AppContext } from "../../../context/app-context";
import { ChevronIcon } from "../../../icons";
import { ConversationType } from "../../../types";
import { Conversation } from "../conversation";

import styles from "./widget-conversation-view.module.scss";

const conversations: ConversationType[] = [
  {
    id: 1,
    lastMessage: "Leave your information and we will get back to you",
    lastMessageTime: "25m ago",
    unreadCount: 0,
    agent: {
      id: 1,
      name: "Eleneor Pena",
      designation: "Sales Trainee",
      imgUrl: "./img/avatars/avatar-1.jpeg",
      status: "online",
    },
  },
  {
    id: 2,
    lastMessage: "Hi, I am live rep, how can I help you?",
    lastMessageTime: "3d ago",
    unreadCount: 1,
    agent: {
      id: 1,
      name: "Kathryne Murphy",
      designation: "Financial Advisor",
      imgUrl: "./img/avatars/avatar-2.jpeg",
      status: "offline",
    },
  },
  {
    id: 3,
    lastMessage: "Hi, I am interested in your product",
    lastMessageTime: "2w ago",
    unreadCount: 0,
    agent: {
      id: 1,
      name: "Leslie Watkins",
      designation: "Customer Support",
      imgUrl: "./img/avatars/avatar-3.jpeg",
      status: "online",
    },
  },
  {
    id: 4,
    lastMessage: "Leave your information and we will get back to you",
    lastMessageTime: "25m ago",
    unreadCount: 0,
    agent: {
      id: 1,
      name: "Eleneor Pena",
      designation: "Sales Trainee",
      imgUrl: "./img/avatars/avatar-1.jpeg",
      status: "online",
    },
  },
  {
    id: 5,
    lastMessage: "Hi, I am live rep, how can I help you?",
    lastMessageTime: "3d ago",
    unreadCount: 1,
    agent: {
      id: 1,
      name: "Kathryne Murphy",
      designation: "Financial Advisor",
      imgUrl: "./img/avatars/avatar-2.jpeg",
      status: "offline",
    },
  },

  {
    id: 6,
    lastMessage: "Hi, I am interested in your product",
    lastMessageTime: "2w ago",
    unreadCount: 0,
    agent: {
      id: 1,
      name: "Leslie Watkins",
      designation: "Customer Support",
      imgUrl: "./img/avatars/avatar-3.jpeg",
      status: "online",
    },
  },
  {
    id: 7,
    lastMessage: "Leave your information and we will get back to you",
    lastMessageTime: "25m ago",
    unreadCount: 0,
    agent: {
      id: 1,
      name: "Eleneor Pena",
      designation: "Sales Trainee",
      imgUrl: "./img/avatars/avatar-1.jpeg",
      status: "online",
    },
  },
  {
    id: 8,
    lastMessage: "Hi, I am live rep, how can I help you?",
    lastMessageTime: "3d ago",
    unreadCount: 1,
    agent: {
      id: 1,
      name: "Kathryne Murphy",
      designation: "Financial Advisor",
      imgUrl: "./img/avatars/avatar-2.jpeg",
      status: "offline",
    },
  },
  {
    id: 9,
    lastMessage: "Hi, I am interested in your product",
    lastMessageTime: "2w ago",
    unreadCount: 0,
    agent: {
      id: 1,
      name: "Leslie Watkins",
      designation: "Customer Support",
      imgUrl: "./img/avatars/avatar-3.jpeg",
      status: "online",
    },
  },
];

export const WidgetConversationView = () => {
  const { setIsConversationViewOpen } = useContext(AppContext);

  return (
    <div className={styles.widgetConversationView}>
      <div className={styles.widgetConversationView__Header}>
        <div className={styles.widgetConversationView__HeaderBackground}>
          <img src="./img/pattern.png" alt="background" />
        </div>
        <h6 className={styles.widgetConversationView__HeaderTitle}>Chats</h6>

        {/* Back Button */}
        <button
          className={styles.widgetConversationView__BtnClose}
          onClick={() => {
            setIsConversationViewOpen(false);
          }}
        >
          <ChevronIcon />
        </button>
        <div className={styles.widgetConversationView__HeaderRoundedBottom} />
      </div>

      <div className={styles.widgetConversationView__Body}>
        <h3 className={styles.widgetConversationView__BodyTitle}>
          8 Conversations
        </h3>

        <ul
          role="list"
          className={styles.widgetLiveAgentSection__LiveAgentItems}
        >
          {conversations.map((conversation) => (
            <Conversation conversation={conversation} key={conversation.id} />
          ))}

          {/* <li className={styles.widgetLiveAgentSection__AgentItem}>
            <Button fullWidth>View All Agents</Button>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
