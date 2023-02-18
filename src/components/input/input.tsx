import styles from "./input.module.scss";

interface InputProps {
  type: "text" | "search" | "email" | "password";
  placeholder?: string;
}

export const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={styles.widgetInput}
    />
  );
};
