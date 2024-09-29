import { useTranslation } from "react-i18next";

export default function Msg() {
  const { t } = useTranslation();

  const visions = [
    {
      name: t("creative"),
      msg: t("creative_msg"),
    },
    {
      name: t("achieve"),
      msg: t("achieve_msg"),
    },
    {
      name: t("collaboration"),
      msg: t("collaboration_msg"),
    },
    {
      name: t("commitment"),
      msg: t("commitment_msg"),
    },
    {
      name: t("proactivity"),
      msg: t("proactivity_msg"),
    },
  ];
  return (
    <div className="min-h-[70vh] flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20 pb-8 container mx-auto px-4 md:px-0 lg:w-[85%] mt-5">
      <div className="sm:h-[80vh]">
        <img
          loading="lazy"
          src="/our-objectives.webp"
          alt="vision"
          className="h-full rounded-xl"
        />
      </div>
      <div className="font-cairo">
        <h4 className="text-4xl"> {t("values")}</h4>
        {/* <p className="max-w-[450px] mt-4 xs:text-lg">{t("vision_msg")}</p> */}
        <ul className="mt-4">
          {visions.map((vision, index) => (
            <li key={index} className="flex gap-2 mt-1">
              <span className="text-lg font-bold text-gold">
                {vision.name}:
              </span>
              <p>{vision.msg}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
