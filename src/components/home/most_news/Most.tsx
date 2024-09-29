import { useTranslation } from "react-i18next";
import "../../../i18n";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../../request/gteData";

export default function Most() {
  const { t } = useTranslation();

  const [allBlogs, setAllBlogs] = useState([]);
  const [latestBlog, setLatestBlog] = useState([]);


  useEffect(() => {
    getData("blogs")
      .then((response: any) => setAllBlogs(response.data.data))
      .catch(() => setAllBlogs([]));

    getData("latest-blogs")
      .then((res: any) => setLatestBlog(res.data.data))
      .catch(() => setLatestBlog([]));
  }, []);

  return (
    <section className="mt-16 pb-10">
      <div className="container mx-auto px-4 md:px-0 lg:w-[70%] relative">
        <div className="flex items-center justify-between">
          <div className="relative group">
            <h3 className="font-cairo text-xl text-gold font-bold">
              {t("latest")}
            </h3>
            <span className="absolute bottom-[-5px] w-[30px] h-[2px] bg-[#cda64e] rtl:right-0 ltr:left-0 duration-500 group-hover:w-[50px]"></span>
          </div>
          <button className="font-cairo text-lg bg-teal-600 px-4 py-1 text-white rounded-lg duration-500 hover:bg-teal-800">
            <Link to="/news" className="w-full">
              {t("allNew")}
            </Link>
          </button>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-16 lg:gap-20 w-full">
          <div className="h-auto hidden lg:block">
            {latestBlog.slice(0, 5).map((e: any) => (
              <div key={e?.id} className="mb-10 font-cairo">
                <div className="flex w-full">
                  <div className="w-60">
                    <div className="flex items-center gap-5">
                      <p className="text-[10px] text-gray-400">
                        {new Date(e?.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="text-xs max-w-48 leading-5 mt-2">{e?.title}</p>
                  </div>
                  <div>
                    <img
                      loading="lazy"
                      src={e?.image}
                      alt="img"
                      className="w-24 h-24 rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-cairo">
            {allBlogs.slice(0, 4).map((e: any) => (
              <div
                key={e?.id}
                className="max-w-[394px] w-full ltr:md:translate-x-[-30px] rtl:md:translate-x-[30px]"
              >
                <div>
                  <img
                    loading="lazy"
                    src={e?.image}
                    alt="image"
                    className="w-full h-[230px] rounded-xl"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-xs w-fit text-[#15803D]">news</h3>
                    <p className="text-[10px]">
                      {new Date(e?.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="mt-2 text-sm w-11/12">{e?.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
