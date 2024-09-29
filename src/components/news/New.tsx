import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { formatTextTitle } from "../../format/formatText";
import { useEffect, useState } from "react";
import axios from "axios";

export default function New() {
  const { t } = useTranslation();

  const location = useLocation().state;

  const [data, setData] : any = useState([]);

  useEffect(() => {
    const params = {
      blog_id: location,
    };


    axios
      .get("https://dashboard.sgidtest.online/api/single-blog", {
        params: params,
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept-Language": "en",
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setData([]);
      });
  }, []);


  return (
    <section className="min-h-screen py-20 font-cairo">
      <div className="container px-4 md:px-0 mx-auto lg:w-[85%]">
        <div className="w-fit px-4 py-3 font-cairo text-black mt-7 text-sm bg-white shadow-md">
          <Link to="/" className="text-gray-500">
            {t("home")} »{" "}
          </Link>
          <Link to="/news" className="text-gray-500">
            {t("news")} »{" "}
          </Link>
          <span>{formatTextTitle(data?.category)}</span>
        </div>
        <div className="mt-8">
          <h1
            id="new_title"
            className="text-3xl font-bold text-gray-800 mb-4 px-4 py-4 rounded-md"
          >
            {data?.title}
          </h1>
          <div className="mt-3 flex flex-col gap-5">
            <img
              src={data?.image}
              alt="img"
              loading="lazy"
              className="w-full"
            />
            <p>{data?.meta_description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
