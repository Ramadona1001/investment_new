import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../request/gteData";
import { handlerRemoveTag } from "../../format/handler";
export default function Medical() {
  const { t } = useTranslation();

  const { category, id } = useLocation().state;

  const [data, setData] = useState([]);

  const [item, setItem] = useState<number>(6);
  const [current, setCurrent] = useState<number>(1);
  const [pageLength, setPageLength] = useState<number>(1);

  useEffect(() => {
    getData("projects-category", { category_id: id })
      .then((res) => setData(res.data.data))
      .catch((err) => {
        console.log(err.message);
        setData([]);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const totalPages = Math.ceil(data.length / item);
      setPageLength(totalPages);
    }
    setItem(item);
  }, [data.length, item]);

  const startIndex = (current - 1) * item;
  const currentPageData = data.slice(startIndex, startIndex + item);

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
              <span>{category}</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-10 container mx-auto px-4 md:px-0 lg:w-[85%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPageData?.map((e: any) => (
          <div key={e?.id} className="rounded-xl border-2 border-dotted group">
            <div className="relative h-72 overflow-hidden">
              <img
                loading="lazy"
                src={e?.featured_image}
                alt="img"
                className="h-full w-full rounded-tr-xl rounded-tl-xl duration-500 group-hover:scale-110"
              />
              <h5 className="bg-white text-black w-it absolute top-2 left-3 px-5 py-1 font-cairo text-sm">
                {category}
              </h5>
            </div>
            <div className="mt-2 flex justify-center font-cairo pb-5 ">
              <h3>{handlerRemoveTag(e?.title)}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3  pb-5">
        {Array.from({ length: pageLength }, (_, i) => i + 1).map((page, id) => (
          <button
            key={id}
            onClick={() => {
              setCurrent(page);
            }}
            className={`${
              current === page ? "bg-blue-600 text-white" : "bg-gray-300"
            } px-3 py-1 rounded-md duration-500`}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
}
