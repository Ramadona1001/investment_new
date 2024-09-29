import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getData } from "../../request/gteData";
export default function Gallery() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState<any>(null);
  const location = useLocation().state;

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [show]);

  useEffect(() => {
    getData("gallery-folder-images", { category_id: location.id })
      .then((res) => setPhotos(res.data.data))
      .catch((err) => {
        console.log(err.message);
        setPhotos([]);
      });
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
              {t("media")}
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
              <Link to="/photos-gallery" className="text-gray-500">
                {t("gallery")} »{" "}
              </Link>
              <span className=" max-w-10 text-ellipsis">{location.name}</span>
            </motion.div>
          </div>
        </div>
      </div>
      {photos?.length === 0 ? (
        <div>
          <div className="text-center py-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold font-cairo"
            >
              {t("no_photos")}
            </motion.h2>
          </div>
        </div>
      ) : (
        <div className="container mx-auto mt-10 pb-14 px-4 md:px-0 lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {photos?.map((photo: any) => (
            <div
              key={photo?.id}
              onClick={() => {
                setShow((current) => !current);
                setPhoto(photo?.image);
              }}
              className="w-full h-80 rounded-lg relative cursor-pointer group"
            >
              <img
                loading="lazy"
                src={photo?.image}
                alt={photo?.title}
                className="w-full h-full rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white hidden group-hover:flex items-center justify-center flex-col gap-5 px-4">
                <motion.span
                  initial={{ translateY: -20 }}
                  whileInView={{ translateY: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl"
                >
                  <FaEye />
                </motion.span>
                <motion.h3
                  initial={{ translateY: 20 }}
                  whileInView={{ translateY: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl font-cairo"
                >
                  {photo?.title}
                </motion.h3>
              </div>
            </div>
          ))}
        </div>
      )}
      {show && (
        <div
          onClick={() => setShow((current) => !current)}
          className="fixed top-0 left-0 px-4 w-full h-screen bg-black/50 z-[50] flex items-center justify-center"
        >
          <img
            src={photo}
            alt="photo"
            className="w-full lg:w-1/2 rounded-lg"
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
}
