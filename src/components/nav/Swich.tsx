import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import i18n from "i18next";
import "../../i18n";

export default function SwitchLanguage({ setShowMenu }: any) {
  // Initialize state with the value from the cookie or default to "ar"
  const [lng, setLng] = useState(Cookies.get("i18next") || "ar");

  // Use useEffect to update the document direction when language changes
  useEffect(() => {
    document.dir = i18n.dir(lng);

    // Update the cookie when language changes
    Cookies.set("i18next", lng);
  }, [lng]);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setLng(language);
    setShowMenu(false);
    document.location.reload();
  };

  return (
    <div className="px-2 mt-5 text-sm xl:text-xl">
      {lng === "ar" ? (
        <button
          onClick={() => {
            handleLanguageChange("en");
          }}
        >
          En
        </button>
      ) : (
        <button
          onClick={() => {
            handleLanguageChange("ar");
          }}
        >
          Ar
        </button>
      )}
    </div>
  );
}
