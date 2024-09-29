import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../request/gteData";
export default function News() {
  const { t } = useTranslation();

  const [data, setData] = useState([]);

  // pagination
  const [item, setItem] = useState<number>(6);
  const [current, setCurrent] = useState<number>(1);
  const [pageLength, setPageLength] = useState<number>(1);

  const convert = (convertDate: any) => {
    const dateStr = convertDate;
    const date = new Date(dateStr);
    const options: any = { day: "numeric", month: "short" };
    const formattedDate =
      document.dir === "ltr"
        ? date.toLocaleDateString("en-US", options)
        : date.toLocaleDateString("ar-US", options);

    return formattedDate;
  };

  useEffect(() => {
    getData(`blogs?paginate=1&page=${current}`)
      .then((res: any) => setData(res.data.data))
      .catch(() => setData([]));
  }, []);

  useEffect(() => {
    const totalPages = Math.ceil(data.length / item);
    setPageLength(totalPages);
    setItem(item);
  }, [data.length, item]);

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
              <span>{t("news")}</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-0 lg:w-[85%] mt-10 m-auto pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.map((e: any, id: number) => (
          <Link to={`/news/${e?.id}`} state={e?.id} key={id} className="group">
            <div className="relative h-80 overflow-hidden">
              <div className="overlay absolute top-0 left-0 bg-black/50 z-40 w-full h-full"></div>
              <img
                loading="lazy"
                src={e?.image}
                alt="img"
                className="w-full h-full rounded-md"
              />
              <div className="absolute w-full h-full top-0 left-0  text-white group-hover:bg-black flex flex-col group-hover:flex-col-reverse py-3 justify-between z-50 duration-500">
                <div className="flex rtl:justify-end w-full rtl:mx-[-10px] ltr:mx-2 mt-2">
                  <span className="w-16 text-center bg-teal-600 h-fit py-1 px-3 rounded-md text-xs">
                    {convert(e?.created_at)}
                  </span>
                </div>
                <div className="px-3 pb-1 text-sm font-cairo h-20">
                  <h3 className="pb-2">{e?.meta_description}</h3>
                  {/* <p className="mt-2">{formatText(e?.des)}</p> */}
                </div>
              </div>
            </div>
          </Link>
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
