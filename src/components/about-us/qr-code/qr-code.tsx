import { QRCodeSVG } from "qrcode.react";
import { useTranslation } from "react-i18next";

export default function Qr_Code() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 md:px-0 lg:w-[85%] mt-8 flex justify-center items-center gap-10 pb-10">
      <QRCodeSVG value="https://www.dropbox.com/scl/fi/ij38daze4aqbwnx7lmhe4/1.pdf?rlkey=1yab8wcdl2kaz68lv48fe6yti&e=1&dl=0" />
      <h3 className="text-2xl font-cairo">{t("company")}</h3>
    </div>
  );
}
