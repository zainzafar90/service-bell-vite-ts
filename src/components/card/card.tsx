import { PropsWithChildren } from "react";
import styles from "./card.module.scss";

interface CardProps {}

export const Card = (props: PropsWithChildren<CardProps>) => {
  return <div className={styles.widgetCard}>{props.children}</div>;
};
