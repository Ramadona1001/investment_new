import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import "../../../i18n";
import { Link, useLocation } from "react-router-dom";
import "./services.css";
import { useEffect, useState } from "react";
import { getData } from "../../../request/gteData";
import { handlerRemoveTag } from "../../../format/handler";

export default function My_Services() {
  const { t } = useTranslation();

  const [services, setService] = useState<any>([]);

  const pathName = useLocation().pathname;

  useEffect(() => {
    getData("services")
      .then((response: any) => setService(response.data.data))
      .catch(() => setService([]));
  }, []);

  return (
    <section className="mt-5 min-h-[70vh] flex items-center bg-cover bg-center py-8">
      <div className="container px-4 md:px-0 lg:w-[85%] mx-auto pb-10">
        {pathName !== "/services" && (
          <div className="relative group flex justify-center w-fit mx-auto">
            <motion.h3
              initial={{ translateY: -20, opacity: 0.2 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="font-cairo text-xl text-gold font-bold"
            >
              {t("my_services")}
            </motion.h3>
            <span className="absolute bottom-[-5px] w-[30px] h-[2px] bg-[#cda64e] rtl:right-0 ltr:left-0 duration-500 group-hover:w-[50px]"></span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {services.slice(0, 6).map((e: any, id: number) => (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                perspective: 800,
              }}
              key={id}
              className="parent"
            >
              <div
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="box relative h-[300px] select-none cursor-pointer"
              >
                <div className="face front absolute w-full h-full flex flex-col gap-3 items-center justify-center bg-normal">
                  <img src={e?.image} alt="logo" className="w-32 h-32" />
                  <h3 className="text-sm text-center font-cairo px-3 leading-6 text-black">
                    {e?.title}
                  </h3>
                </div>
                <div className="face back absolute w-full h-full flex items-center justify-center bg-normal px-4 text-sm font-cairo leading-6 text-black">
                  <div className="h-60 overflow-auto px-2">
                    <p>{handlerRemoveTag(e?.content)}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {pathName !== "/services" && (
          <div className="flex justify-center mt-8">
            <Link
              to="/services"
              className="text-green-600 font-cairo underline underline-offset-2 animate-pulse"
            >
              {t("more")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
