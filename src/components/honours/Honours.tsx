import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getData } from "../../request/gteData";
import { handlerRemoveTag } from "../../format/handler";

export default function Honours() {
  const { t } = useTranslation();
  const [photo, setPhoto] = useState<null | string>(null);

  const [honours, setHonours] = useState([]);

  const openPhoto = (event: any) => {
    setPhoto(event.target.src);
  };



  useEffect(() => {
    photo
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [photo]);

  useEffect(() => {
    getData("achivements")
      .then((res: any) =>
        setHonours(res.data.data?.filter((e: any) => e.category === "Honoring"))
      )
      .catch(() => setHonours([]));
  }, []);

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
              <span>{t("honours")}</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-[85%] gap-10 mt-7 pb-20">
        {honours.map((e: any) => (
          <div
            onClick={openPhoto}
            key={e?.id}
            className="card shadow-md rounded-md pb-2"
          >
            <div>
              <img
                loading="lazy"
                className="w-full h-60 rounded-tr-md rounded-tl-md cursor-pointer"
                src={e?.featured_image}
                alt={e?.slug}
              />
              <div className="px-3 py-4">
                <h4 className="text-lg font-cairo">{e?.title}</h4>
                <p>{handlerRemoveTag(e?.content)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {photo && (
        <div
          onClick={() => setPhoto(null)}
          className="fixed top-0 left-0 w-full h-screen z-50 bg-black/80 flex items-center justify-center px-4 sm:px-0"
        >
          <img className="cursor-pointer lg:w-1/2" src={photo} alt="photo" />
        </div>
      )}
    </section>
  );
}
