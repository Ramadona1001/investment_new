import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();



  return (
    <div className="min-h-[70vh] flex flex-col-reverse lg:flex-row lg:items-center justify-end gap-10 lg:gap-20 pb-8 mt-5 bg-gray-100">
      <div className="font-cairo px-4 xs:px-10 md:px-20 pt-8 lg:px-4">
        <h4 className="text-4xl"> {t("msg")}</h4>
        <p className="max-w-[600px] mt-4 xs:text-lg">{t("msg_msg")}</p>
      </div>
      <div className="sm:h-[80vh] lg:w-1/2">
        <img
          loading="lazy"
          src="/our-mission-img.jpg"
          alt="vision"
          className="h-full w-full lg:rounded-xl"
        />
      </div>
    </div>
  );
}
