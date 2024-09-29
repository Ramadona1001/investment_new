import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Story_Data from "./page";

export default function Stories() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="min-h-screen relative bg-cover bg-center bg-no-repeat bg-[url('https://th.bing.com/th/id/R.13a1899eb294764c6c275e3b3737c485?rik=3XZ3MsgDtVuTow&pid=ImgRaw&r=0')] flex items-center">
        <div className="overlay absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        <div className="text-white px-5 xs:px-10 sm:px-28 lg:px-40 z-20">
          <div>
            <motion.h3
              initial={{ translateY: -20 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold font-cairo"
            >
              {t("achievements")}
            </motion.h3>
            <motion.div
              initial={{ translateY: 20 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1 }}
              className="bg-white w-fit px-3 py-1 font-cairo text-black mt-7 text-sm"
            >
              <Link to="/" className="text-gray-500">
                {t("home")} »{" "}
              </Link>
              <span>{t("stories")}</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-0 mx-auto lg:w-[85%] mt-8">
        <div className="font-cairo flex flex-col justify-center items-center gap-2">
          <h3 className="text-lg font-bold">{t("story_title")}</h3>
          <p
            style={{
              lineHeight: 2,
            }}
            className=" font-light max-w-[650px] h-auto pb-2 text-sm sm:text-base text-center"
          >
            {t("story_des")}
          </p>
        </div>

        <div className="mt-20">
          <Story_Data />
        </div>
      </div>
    </section>
  );
}
