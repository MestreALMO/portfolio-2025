import LanguageSwitcher from "../LanguageSwitcher";
import { LocaleSwitcher } from "../localeSwitcher";
import { ThemeSwitcher } from "../themeSwitcher";
import styles from "./topBar.module.css";

export const TopBar = () => {
  return (
    <>
      <div className={`${styles.main}`}>
        <h3 className={`${styles.logo}`}>André Lusegardis</h3>
        <div className={`${styles.leftSide}`}>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};
