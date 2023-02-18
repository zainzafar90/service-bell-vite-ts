import styles from "./avatar.module.scss";

interface AvatarProps {
  initials?: string;
  src?: string;
}

export const Avatar = (props: AvatarProps) => {
  if (props.initials) {
    return (
      <div className={styles.widgetAvatar}>
        <span className={styles.widgetAvatar__Initials}>Z</span>
      </div>
    );
  }

  return (
    <div className={styles.widgetAvatar}>
      <img
        className={styles.widgetAvatar__Img}
        src={props.src}
        alt={`Avatar ${props.src}`}
      />
    </div>
  );
};
