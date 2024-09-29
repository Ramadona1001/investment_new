import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Employment_form from "./Employment_form";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
export default function Employment() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [show]);

  return (
    <section className="relative">
      <div
        style={{
          backgroundImage: `url("/employment.jpg")`,
        }}
        className="min-h-screen relative bg-cover bg-center bg-no-repeat  flex items-center"
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
              {t("employment")}
            </motion.h3>
            <motion.div
              initial={{ translateY: 20 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1 }}
              className="font-cairo text-black mt-7 "
            >
              <div className="text-sm bg-white px-3 py-2 w-fit rounded-md">
                <Link to="/" className="text-gray-500">
                  {t("home")} »{" "}
                </Link>

                <span>{t("employment")}</span>
              </div>
              <button
                onClick={() => setShow(true)}
                className="mt-5 bg-green-700 w-40 rounded-lg py-2 text-white duration-500"
              >
                {t("apply")}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {show && (
        <div
          onClick={() => setShow(false)}
          className="fixed top-0 left-0 w-full h-screen bg-black/50 z-[99]"
        ></div>
      )}

      <div
        className={`py-7  w-full lg:w-1/2 px-4 h-screen md:h-[600px] overflow-auto absolute ${
          show ? "top-1/2" : "top-[-8000px]"
        } -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white duration-500 z-[999]`}
      >
        <div
          onClick={() => setShow(false)}
          className="pb-3 text-2xl text-green-600 md:hidden"
        >
          <span>
            <IoClose />
          </span>
        </div>
        <Employment_form />
      </div>
    </section>
  );
}
