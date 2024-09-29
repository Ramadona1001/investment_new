import { Link, useLocation } from "react-router-dom";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getData } from "../../request/gteData";

export default function Footer() {
  const { t } = useTranslation();
  const profile = "/company.pdf";

  const pathName = useLocation().pathname;

  const [projects, setProjects] = useState([]);

  const links = [
    {
      name: t("home"),
      href: "/home",
    },
    {
      name: t("about"),
      href: "/about-us",
    },

    {
      name: t("services"),
      href: "/services",
    },
  ];

  const media = [
    {
      name: t("news"),
      href: "/news",
    },
    {
      name: t("gallery"),
      href: "/photos-gallery",
    },
    {
      name: t("video"),
      href: "/video-gallery",
    },
  ];

  useEffect(() => {
    getData("projects-categories")
      .then((res: any) => setProjects(res.data.data))
      .catch((err) => {
        console.log(err);
        setProjects([]);
      });
  }, []);

  return (
    <footer className="w-full relative">
      <div id="footer-img" className="bg-[#223525] bg-center bg-no-repeat">
        <div className=" relative z-20 text-white container mx-auto lg:w-[70%] py-10 px-4 md:px-0 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <div className="logo flex flex-col lg:items-end lg:justify-end">
            <div className="relative px-4 lg:px-0">
              <img
                loading="lazy"
                src="/logo.png"
                alt="logo"
                className="max-w-80 w-full"
              />
              <img
                loading="lazy"
                src="/title.png"
                alt=""
                width={100}
                className="absolute top-14 left-1/2 -translate-x-1/2"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 font-cairo lg:mx-10">
            <h3 className="text-lg text-gold font-cairo font-bold">
              {t("about_us")}
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              {links.map((e, id) => (
                <li
                  key={id}
                  className={`${
                    e.href === pathName && "text-gray-400 hover:text-gray-400"
                  } duration-300 hover:text-gold`}
                >
                  <Link to={e.href}>{e.name}</Link>
                </li>
              ))}
              <li className="duration-300 hover:text-gold">
                <a href={profile} download={profile}>
                  {t("profile")}
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col gap-8 font-cairo">
            <div>
              <h3 className="text-lg text-gold font-cairo font-bold">
                {t("projects")}
              </h3>
              <ul className="flex flex-col gap-4 text-sm mt-8">
                {projects.map((e: any) => (
                  <li key={e?.id} className={`duration-300 hover:text-gold`}>
                    <Link
                      to={`/projects/${e?.id}`}
                      state={{
                        id: e?.id,
                        category: e?.title,
                      }}
                    >
                      {e?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 font-cairo">
            <div>
              <h3 className="text-lg text-gold font-cairo font-bold">
                {t("contact")}
              </h3>
              <ul className="flex flex-col gap-4 text-sm mt-8">
                <li className={`duration-300 hover:text-gold`}>
                  <Link
                    target="_blank"
                    to="https://www.google.com/maps/place/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9+%D8%A7%D9%84%D8%B3%D8%B9%D8%AF+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1+%D9%88%D8%A7%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9%E2%80%AD/@24.7680473,46.6658595,15z/data=!4m5!3m4!1s0x0:0xf6f5bd89344fb098!8m2!3d24.768044!4d46.674616?shorturl=1"
                  >
                    {t("location_address")}
                  </Link>
                </li>

                <li className={`duration-300 hover:text-gold`}>
                  <Link to="mailto:info@sgid.sa">info@sgid.sa</Link>
                </li>

                <li className={`duration-300 hover:text-gold`}>
                  <Link
                    to="tel:+966920035103"
                    className="flex rtl:flex-row-reverse rtl:justify-end"
                  >
                    <span>+</span>
                    <span>966920035103</span>
                  </Link>
                </li>
              </ul>
              <ul className="mt-4 flex gap-5">
                <li className="w-9 h-9 border-2 rounded-full flex items-center justify-center hover:bg-white text-gold duration-500 cursor-pointer">
                  <Link
                    className="w-full text-center flex justify-center"
                    target="_blank"
                    to="https://www.linkedin.com/company/alsaad-group-for-investment-and-development/"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li className="w-9 h-9 border-2 rounded-full flex items-center justify-center hover:bg-white text-gold duration-500 cursor-pointer">
                  <Link
                    className="w-full text-center flex justify-center"
                    target="_blank"
                    to="https://www.instagram.com/SGID.SA"
                  >
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col lg:items-center lg:mx-20 gap-8 font-cairo lg:col-span-2 lg:ltr:translate-x-3">
            <div>
              <h3 className="text-lg text-gold font-cairo font-bold">
                {t("achievements")}
              </h3>
              <ul className="flex flex-col gap-4 text-sm mt-8">
                {[
                  {
                    name: t("honours"),
                    href: "/honours",
                  },

                  {
                    name: t("stories"),
                    href: "/inspiring-stories",
                  },
                ].map((e, id) => (
                  <li key={id} className={`duration-300 hover:text-gold`}>
                    <Link to={e.href}>{e.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 font-cairo relative z-50">
            <div>
              <h3 className="text-lg text-gold font-cairo font-bold">
                {t("media")}
              </h3>
              <ul className="flex flex-col gap-4 text-sm mt-8">
                {media.map((e, id) => (
                  <li key={id} className={`duration-300 hover:text-gold`}>
                    <Link to={e.href}>{e.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 font-cairo">
            <div>
              <h3 className="text-lg text-gold font-cairo font-bold">
                {t("Related")}
              </h3>
              <ul className="flex flex-col gap-4 text-sm mt-8">
                <li className={`duration-300 hover:text-gold`}>
                  <Link to="http://www.shy.care" target="_blank">
                    {t("hospitals")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-7 shadow-md w-full">
        <div className="container mx-auto lg:w-[85%] px-4 md:px-0 flex justify-center items-center gap-10 flex-wrap font-cairo ">
          <div>
            <img
              loading="lazy"
              src="/alsaad.png"
              alt="logo"
              className="max-w-60 w-full"
            />
          </div>

          <div className="text-black font-cairo text-xs">
            <p>
              مجموعة السعد للاستثمار والتنمية . All Rights Reserved &copy;{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
