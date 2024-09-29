import { Link, useLocation } from "react-router-dom";
import { mapData } from "../../data/markers/allMarkers";

export default function Projects() {
  const location = useLocation().state;

  const filteredProject = mapData.filter((project) => project.id === location);

  return (
    <section>
      <div className="bg-[url('/bg_about.jpg')] bg-cover bg-center relative h-44 flex items-end px-8 pb-14 font-cairo">
        <div className="overlay absolute top-0 left-0 bg-black w-full h-full opacity-80"></div>
        <div className="relative z-50 flex items-center gap-2 w-full ltr:flex-row-reverse md:px-10 text-sm xs:text-base">
          <Link to="/" className="text-gray-500">
            الصفحة الرئيسية
          </Link>
          <span className="text-white text-xs">{`>`}</span>
          <span className="text-white">{filteredProject[0].title}</span>
        </div>
      </div>

      <div className="container mx-auto mt-8 px-4 md:px-0 lg:w-[85%] flex justify-between pb-20 flex-col md:flex-row gap-7 md:rtl:flex-row-reverse">
        <div>
          <img
            loading="lazy"
            className="max-w-[450px] w-full cursor-pointer rounded-lg"
            src={`${
              filteredProject[0]?.image ||
              "https://www.ocoda.com/storage/uploads/settings/logo_1675179763.png"
            }`}
            alt="project"
          />
        </div>
        <div className="flex flex-col gap-3 ltr:items-end font-cairo">
          <h3 className="text-2xl text-gold font-bold">
            {filteredProject[0].title}
          </h3>
          <p className="max-w-[450px] ltr:text-end mt-3 leading-6 text-gray-500">
            {filteredProject[0].description}
          </p>
        </div>
      </div>
    </section>
  );
}
