import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../../request/gteData";
import { handlerRemoveTag } from "../../../format/handler";
export default function OurProjects() {
  const { t } = useTranslation();

  const [projects, setProjects] = useState([]);


  useEffect(() => {
    getData("");
    getData("projects")
      .then((res: any) => setProjects(res.data.data))
      .catch(() => setProjects([]));
  }, []);


  return (
    <section>
      <div className="min-h-screen relative bg-cover bg-center bg-no-repeat bg-[url('/our.jpg')] flex items-center">
        <div className="overlay absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        <div className="text-white px-5 xs:px-10 sm:px-28 lg:px-40 z-20">
          <div>
            <motion.h3
              initial={{ translateY: -20 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold font-cairo"
            >
              {t("projects")}
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
              <span>{t("projects")}</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-10 container mx-auto px-4 md:px-0 lg:w-[85%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((e: any, id) => (
          <div key={id} className="rounded-xl border-2 border-dotted group">
            <div className="relative h-72 overflow-hidden">
              <img
                loading="lazy"
                src={e?.featured_image}
                alt="img"
                className="h-full w-full rounded-tr-xl rounded-tl-xl duration-500 group-hover:scale-110"
              />
              <h5 className="bg-white text-black w-it absolute top-2 left-3 px-5 py-1 font-cairo text-sm">
                {e?.category}
              </h5>
            </div>
            <div className="mt-2 flex justify-center font-cairo pb-5 ">
              <p>{handlerRemoveTag(e?.content)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
