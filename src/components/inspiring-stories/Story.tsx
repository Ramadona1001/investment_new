import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Story_Data from "./page";
import { useEffect, useState } from "react";
import { getData } from "../../request/gteData";

export default function Story() {
  const { t } = useTranslation();
  const location = useLocation().state;

  const [data, setData]: any = useState([]);

  const id = {
    story_id: location?.id,
  };

  // Pagination

  const [content, setContent] = useState<string>("");

  useEffect(() => {
    getData("single-story", id)
      .then((res: any) => setData(res.data.data))
      .catch((err) => {
        console.log(err.message);
        setData([]);
      });
  }, []);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data?.content, "text/html");
    const cleanText = doc.body.textContent || doc.body.innerText;

    setContent(cleanText);
  }, [data]);

  return (
    <section className="min-h-screen py-20 font-cairo">
      <div className="container px-4 md:px-0 mx-auto lg:w-[85%]">
        <div className="w-fit px-4 py-3 font-cairo text-black mt-7 text-sm bg-white shadow-md">
          <Link to="/" className="text-gray-500">
            {t("home")} »{" "}
          </Link>
          <Link to="/news" className="text-gray-500">
            {t("stories")} »{" "}
          </Link>
          <span>{location.name}</span>
        </div>
      </div>

      <div className="container mx-auto mt-4 px-4 md:px-0 lg:w-[85%]">
        <div className="mt-7 relative">
          <img
            src={data?.image}
            alt="filter-img"
            loading="lazy"
            className="w-full h-[600px] relative z-30"
          />
          <div className="flex justify-end w-full">
            <div className="bg-white shadow-md sm:w-11/12 sm:mt-[-50px] relative z-50 py-4 px-6">
              <div className="pb-5 border-b-2">
                <h3 className="text-lg font-bold font-cairo mt-1">
                  {data?.title}
                </h3>
              </div>
              <div className="py-5">
                <p>{content}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Story_Data id={location?.id} />
        </div>
      </div>
    </section>
  );
}
