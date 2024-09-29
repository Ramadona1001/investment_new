import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../request/gteData";
export default function Photos() {
  const { t } = useTranslation();

  const [folders, setFolders] = useState([]);

  useEffect(() => {
    getData("gallery_images")
      .then((res) => setFolders(res.data.data))
      .catch((err) => {
        console.log(err.message);
        setFolders([]);
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
              <span>{t("gallery")}</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 pb-14 px-4 md:px-0 lg:w-[85%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {folders?.map((folder: any) => (
          <Link
            to={`/photos-gallery/${folder?.id}`}
            state={{ name: folder?.title, id: folder?.id }}
            key={folder?.id}
            className="w-full px-4 py-3 text-center flex justify-center items-center flex-col gap-4 font-cairo card shadow-md rounded-lg text-lg duration-500 hover:scale-110"
          >
            <div className="w-fit relative">
              <img
                src="/folder.png"
                alt="folder"
                loading="lazy"
                className="w-40"
              />
              <div className="img-theme absolute top-[55%] right-[-40px] -translate-y-1/2">
                <img src={folder?.image} alt={folder?.title} className="w-20" />
              </div>
            </div>
            <p className="text-center font-cairo text-sm">{folder?.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
