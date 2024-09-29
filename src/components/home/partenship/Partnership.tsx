import { useTranslation } from "react-i18next";
import { photos } from "../../../data/partenship/data";
import { Link } from "react-router-dom";

export default function Partnership() {
  const { t } = useTranslation();

  return (
    <section className="mt-20 min-h-[100vh] flex items-center ">
      <div className="container mt-80 mx-auto px-4 md:px-0 lg:w-[85%]">
        <div className="relative group flex justify-center w-fit mx-auto">
          <h3 className="font-cairo text-xl text-teal-600 font-bold">
            {t("partners")}
          </h3>
          <span className="absolute bottom-[-5px] w-[30px] h-[2px] bg-teal-600 rtl:right-0 ltr:left-0 duration-500 group-hover:w-[50px]"></span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 mt-10">
          {photos.slice(0, 12).map((e, id) => (
            <div
              key={id}
              className="bg-white shadow-lg px-4 py-3 flex items-center justify-center h-40"
            >
              <img loading="lazy" src={e} alt="img" className="w-28" />
            </div>
          ))}
        </div>

        {photos.length > 6 && (
          <div className="flex items-center justify-center mt-10">
            <Link
              to="/partners"
              className="text-teal-500 underline underline-offset-4 font-cairo animate-pulse"
            >
              {t("more")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
