import { useTranslation } from "react-i18next";
import "../../../i18n";
import { BsCalendarDateFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Most() {
  const { t } = useTranslation();

  const dummy_news = [
    {
      img: "https://sgid.sa/uploads/posts/7a7c5cf7c2a8d16b35ac423e8b59b173.jpeg",
      name: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية يختتم بنجاح المرحلة الأولى بمستشفى الأمير محمد بن سلمان في عدن",
      date: "05 May 2024",
      des: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية في مستشفى الأمير محمد بن سلمان في عدن",
    },
    {
      img: "https://sgid.sa/uploads/posts/5c1d24a658ade40e38bcc316eadc3bac.jpeg",
      name: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية يختتم بنجاح المرحلة الأولى بمستشفى الأمير محمد بن سلمان في عدن",
      date: "02 May 2024",
      des: "من مستشفى الأمير محمد بن سلمان في عدن، يواصل فريق مركز_الملك_سلمان_للإغاثة  المشروع الطبي التطوعي لجراحة",
    },
    {
      img: "https://sgid.sa/uploads/posts/8c614e1869c71041f5563005c37874ea.jpeg",
      name: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية يختتم بنجاح المرحلة الأولى بمستشفى الأمير محمد بن سلمان في عدن",
      date: "05 May 2024",
      des: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية في مستشفى الأمير محمد بن سلمان في عدن",
    },
    {
      img: "https://sgid.sa/uploads/posts/4f931cbb4ade0e7cb3ccedbba739fe54.jpeg",
      name: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية يختتم بنجاح المرحلة الأولى بمستشفى الأمير محمد بن سلمان في عدن",
      date: "05 May 2024",
      des: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية في مستشفى الأمير محمد بن سلمان في عدن",
    },
    {
      img: "https://sgid.sa/uploads/posts/7a7c5cf7c2a8d16b35ac423e8b59b173.jpeg",
      name: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية يختتم بنجاح المرحلة الأولى بمستشفى الأمير محمد بن سلمان في عدن",
      date: "05 May 2024",
      des: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية في مستشفى الأمير محمد بن سلمان في عدن",
    },
    {
      img: "https://sgid.sa/uploads/posts/7a7c5cf7c2a8d16b35ac423e8b59b173.jpeg",
      name: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية يختتم بنجاح المرحلة الأولى بمستشفى الأمير محمد بن سلمان في عدن",
      date: "05 May 2024",
      des: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية في مستشفى الأمير محمد بن سلمان في عدن",
    },
    {
      img: "https://sgid.sa/uploads/posts/7a7c5cf7c2a8d16b35ac423e8b59b173.jpeg",
      name: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية يختتم بنجاح المرحلة الأولى بمستشفى الأمير محمد بن سلمان في عدن",
      date: "05 May 2024",
      des: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية في مستشفى الأمير محمد بن سلمان في عدن",
    },
    {
      img: "https://sgid.sa/uploads/posts/7a7c5cf7c2a8d16b35ac423e8b59b173.jpeg",
      name: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية يختتم بنجاح المرحلة الأولى بمستشفى الأمير محمد بن سلمان في عدن",
      date: "05 May 2024",
      des: "المشروع الطبي التطوعي لجراحة الحروق والتشوهات والتجميلية في مستشفى الأمير محمد بن سلمان في عدن",
    },
  ];

  return (
    <section className="mt-10 pb-10">
      <div className="container mx-auto px-4 md:px-0 lg:w-[85%]">
        <div className="relative group">
          <h3 className="font-cairo text-xl text-teal-600 font-bold">
            {t("latest")}
          </h3>
          <span className="absolute bottom-[-5px] w-[30px] h-[2px] bg-teal-600 rtl:right-0 ltr:left-0 duration-500 group-hover:w-[50px]"></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {dummy_news.slice(0, 6).map((news, index) => (
            <div key={index} className="shadow-md pb-10 rounded-lg">
              <img
                src={news.img}
                alt={news.name}
                className="w-full h-80 rounded-tr-lg rounded-tl-lg"
              />
              <div className="px-4 mt-5">
                <div className="flex items-center gap-2 text-gray-400 pb-2 border-b-2">
                  <span>
                    <BsCalendarDateFill />
                  </span>
                  <span className="text-xs">{news.date}</span>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-cairo">{news.name}</h3>
                  <p className="mt-4 text-gray-500 font-cairo">{news.des}</p>
                  <button className="mt-5 text-green-500 animate-pulse">
                    <Link to={`/news/${index}`}>{t("more")}</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {dummy_news.length > 6 && (
          <div className="flex items-center justify-center mt-8">
            <button className="font-cairo text-lg underline underline-offset-4">
              <Link to="/news">{t("more")}</Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
