import "../../i18n";
import { useTranslation } from "react-i18next";
import About from "./about/About";
import Vision from "./vision/Vision";
import Msg from "../message/Msg";
export default function Parent_About() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="min-h-[90vh] flex flex-col lg:flex-row">
        <div className="relative h-[90vh] lg:w-1/2">
          <img
            src="/about_us.jpg"
            alt="about_us"
            loading="lazy"
            className="h-full w-full"
          />
          <div className="overlay absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        </div>
        <div className="bg-[#1e2f28] w-full lg:w-1/2 py-10 lg:py-0  text-white flex items-center  px-5 xs:px-10 sm:px-28 lg:px-40">
          <div>
            <h3 className="text-4xl font-bold font-cairo">{t("about_us")}</h3>
            <div className="mt-4 md:text-lg font-cairo max-w-[600px] flex flex-col gap-2">
              <p> {t("about_msg")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <Vision />
        <About />
        <Msg />
      </div>
    </section>
  );
}
