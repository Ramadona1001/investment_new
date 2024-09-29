import { t } from "i18next";
export default function Vision() {
  return (
    <div className="min-h-[70vh] flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20 pb-8 container mx-auto px-4 md:px-0 lg:w-[85%] mt-5">
      <div className="sm:h-[80vh]">
        <img
          loading="lazy"
          src="/our-vision.jpg"
          alt="vision"
          className="h-full rounded-xl"
        />
      </div>
      <div className="font-cairo">
        <h4 className="text-4xl"> {t("vision")}</h4>
        <p className="max-w-[450px] mt-4 xs:text-lg">{t("vision_msg")}</p>
      </div>
    </div>
  );
}
