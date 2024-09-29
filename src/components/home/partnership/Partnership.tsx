import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { getData } from "../../../request/gteData";

export default function Partnership() {
  const { t } = useTranslation();
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getData("partners")
      .then((res: any) => setPartners(res.data.data))
      .catch(() => setPartners([]));
  }, []);

  return (
    <section className="mt-10 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 md:px-0 lg:w-[85%]">
        <div className="relative group flex justify-center w-fit mx-auto">
          <motion.h3
            initial={{ translateY: -20 }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 1 }}
            className="font-cairo text-xl text-gold font-bold"
          >
            {t("partners")}
          </motion.h3>
          <span className="absolute bottom-[-5px] w-[30px] h-[2px] bg-[#cda64e] rtl:right-0 ltr:left-0 duration-500 group-hover:w-[50px]"></span>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="mt-20 w-full pb-20"
        >
          {partners.map((e: any) => (
            <SwiperSlide key={e?.id} className="select-none w-full">
              <div className="w-full">
                <img
                  loading="lazy"
                  src={e?.image}
                  alt="img"
                  className="w-32 h-32"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
