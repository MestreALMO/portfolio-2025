import { useRouter } from "next/router";
import ReactFlagsSelect from "react-flags-select";
import { useState, useEffect } from "react";
import styles from "./localeSwitcher.module.css";

export const LocaleSwitcher = () => {
  const router = useRouter();
  const initialLanguage = router.locale; //grabbing initial language

  //converting country in to language and vice versa
  const languageToCountry = (e: string | undefined) => {
    switch (e) {
      case "en":
        return "US";
      case "pt":
        return "BR";
      case "fr":
        return "FR";
      default:
        return "";
    }
  };
  const countryToLanguage = (e: string | undefined) => {
    switch (e) {
      case "US":
        return "en";
      case "BR":
        return "pt";
      case "FR":
        return "fr";
      default:
        return "";
    }
  };

  //change language function
  const handleSwitchLocale = (code: string) => {
    setSelected(code);

    const { pathname, query } = router;

    router.push({ pathname, query }, undefined, {
      locale: countryToLanguage(code),
    });
  };

  //grabbing initial language
  const [selected, setSelected] = useState(languageToCountry(initialLanguage));

  //inserting window.innerWidth into pageWidth state
  const [pageWidth, setPageWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
    const atualizarLarguraDaJanela = () => {
      setPageWidth(window.innerWidth);
    };
    window.addEventListener("resize", atualizarLarguraDaJanela);
    return () => {
      window.removeEventListener("resize", atualizarLarguraDaJanela);
    };
  }, []);

  return (
    <>
      <ReactFlagsSelect
        selected={selected}
        onSelect={handleSwitchLocale}
        countries={["US", "BR", "FR"]}
        customLabels={
          pageWidth >= 430
            ? {
                US: "EN-US",
                BR: "PT-BR",
                FR: "FR-FR",
              }
            : {
                US: " ",
                BR: " ",
                FR: " ",
              }
        }
        showSelectedLabel={pageWidth >= 430 ? true : false} //name of the country
        fullWidth={false}
        className={`${styles.main}`}
      />
    </>
  );
};
