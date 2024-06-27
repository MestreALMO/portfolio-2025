import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import homeImage from "@/imgs/home.jpg";

export default function Home() {
  const t = useTranslations("pages.home");

  return (
    <main className={`${styles.homeMain}`}>
      <div className={`${styles.homeImg}`}>
        <Image
          alt="André Lusegardis"
          src={homeImage}
          layout="responsive"
          objectFit="contain"
          style={{ borderRadius: "50%" }}
          loading="lazy"
        />
      </div>
      <h1>{t("title")}</h1>
      <p className={`${styles.homeText}`}>{t("text1")}</p>
      <p className={`${styles.homeText}`}>{t("text2")}</p>
    </main>
  );
}
