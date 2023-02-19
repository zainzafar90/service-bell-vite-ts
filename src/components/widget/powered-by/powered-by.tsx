import styles from "./powered-by.module.scss";

export const PoweredBy = () => {
  return (
    <div className={styles.poweredBy}>
      <a
        href="https://www.servicebell.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        <img
          src="./img/icons/service-bell-monotone.svg"
          alt="ServiceBell Logo"
        />
        <span className={styles.footerCompanyName}>ServiceBell</span>
      </a>
    </div>
  );
};
