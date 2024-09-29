import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getData } from "../../request/gteData";

export default function Story_Data({ id = null }: any) {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const [current, setCurrent] = useState<number>(1);
  const [pageLength, setPageLength] = useState<number>(1);
  const [item, setItem] = useState<number>(3);

  useEffect(() => {
    getData("stories")
      .then((res: any) => {
        setData(res.data.data?.filter((e: { id: number }) => e?.id !== id));
      })
      .catch(() => setData([]));
  }, []);

  useEffect(() => {
    const totalPages = Math.ceil(data?.length / item);
    setPageLength(totalPages);
    setItem(item);
  }, [data?.length, item, data]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pb-16">
        {data.map((story: any) => (
          <Link
            to={`/inspiring-stories/${story?.id}`}
            state={{
              name: story?.slug,
              id: story?.id,
            }}
            key={story?.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          >
            <div className="w-full h-60 overflow-hidden">
              <img
                loading="lazy"
                src={story?.image}
                alt={story?.title}
                className="w-full h-full object-cover rounded-lg duration-500 hover:scale-110 cursor-pointer"
              />
            </div>
            <div className="mt-5 px-6 pb-4 font-cairo">
              <div className="pb-3 border-b-2 border-gray-200">
                <h5 className="mt-2 font-bold text-lg">{story?.slug}</h5>
              </div>
              <div className="w-full flex items-center justify-between mt-4 group">
                <p className="group-hover:text-green-600">{t("read")}</p>
                <div className="group-hover:text-green-600">
                  {document.dir === "rtl" ? (
                    <span>
                      <FaArrowLeft />
                    </span>
                  ) : (
                    <span>
                      <FaArrowRight />
                    </span>
                  )}
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
    </div>
  );
}
