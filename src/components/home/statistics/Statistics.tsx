import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "../../../i18n";
import { useEffect, useState } from "react";
import { getData } from "../../../request/gteData";
import Show from "./Show";
export default function Statistics() {
  const { t } = useTranslation();

  const [statistics, setStatistics]: any = useState([]);

  useEffect(() => {
    getData("statistics")
      .then((res: any) => setStatistics(res.data.data))
      .catch(() => setStatistics([]));
  }, []);

  return (
    <section className=" flex items-center bg-[#E4E8E5] py-8">
      <div className=" mx-auto px-4 md:px-0">
        <motion.h3
          initial={{ translateY: -50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-cairo text-center text-gold"
        >
          {t("statistics")}
        </motion.h3>

        <motion.div
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 1 }}
          className="py-7 rounded-xl w-full mt-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-10 md:gap-20 px-5 font-cairo w-full">
            {statistics?.map((e: any, id: number) => (
              <div key={id}>
                <Show count={0} target={e?.number} title={e?.title} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
