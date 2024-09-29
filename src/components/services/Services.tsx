import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import My_Services from "../home/services/Services";
export default function Services() {
  const { t } = useTranslation();

  return (
    <section>
      <div
        style={{
          backgroundImage: `url("/services.jpeg")`,
        }}
        className="min-h-screen relative bg-cover bg-center bg-no-repeat flex items-center"
      >
        <div className="overlay absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        <div className="text-white px-5 xs:px-10 sm:px-28 lg:px-40 z-20">
          <div>
            <motion.h3
              initial={{ translateY: -20 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold font-cairo"
            >
              {t("my_service")}
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
              <span>{t("services")}</span>
            </motion.div>
          </div>
        </div>
      </div>
      <My_Services />
    </section>
  );
}
