import { useEffect, useState } from "react";
import { RiMenu2Fill, RiMenu3Line } from "react-icons/ri";
import SwitchLanguage from "./Swich";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdClose } from "react-icons/io";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import All_Links from "../../data/links/all_links";

export default function Menu() {
  const [dir, setDir] = useState<string>("rtl");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuData, setMenuData] = useState<null | number>(null);
  const { t } = useTranslation();
  const location = useLocation();

  const profile = "/company.pdf";

  useEffect(() => {
    document.dir === "rtl" ? setDir("rtl") : setDir("ltr");
  }, [dir]);

  useEffect(() => {
    showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showMenu]);

  const links = [
    {
      name: t("employment"),
      href: "/employment",
    },
    {
      name: t("contact"),
      href: "/contact-us",
    },
    {
      name: t("staff"),
      href: "https://dashboard.sgidtest.online/",
    },
    {
      name: t("customer"),
      href: "https://dashboard.sgidtest.online/user/login",
    },
    {
      name: t("related"),
      href: "http://www.shy.care",
    },
  ];

  return (
    <div className="text-black">
      <span
        onClick={() => setShowMenu(true)}
        className={`w-10 h-10 flex items-center justify-center rounded-full text-lg duration-500 hover:bg-[#223525] hover:text-white cursor-pointer text-white  ${
          showMenu && "bg-[#223525] text-white"
        }`}
      >
        {dir === "rtl" ? <RiMenu2Fill /> : <RiMenu3Line />}
      </span>

      {showMenu && (
        <div
          style={{
            zIndex: 999,
          }}
          onClick={() => setShowMenu(false)}
          className="overlay fixed z-10 top-0 left-0 w-full min-h-screen bg-black/25 cursor-pointer"
        ></div>
      )}

      <div
        style={{
          zIndex: 999,
        }}
        className={`fixed  top-0 bg-white z-50 shadow-xl max-w-80 w-full min-h-screen duration-500 ${
          showMenu
            ? "rtl:right-0 ltr:left-0"
            : "rtl:right-[-1800px] ltr:left-[-1800px]"
        }`}
      >
        <div className="px-5 py-10">
          <span
            onClick={() => setShowMenu(false)}
            className="text-3xl flex justify-end cursor-pointer"
          >
            <IoMdClose />
          </span>
          <div className="mt-5">
            <ul className="xl:hidden flex flex-col gap-5  px-2 font-cairo">
              {All_Links().map((e, linkId) => (
                <div key={linkId}>
                  {e?.moreLinks ? (
                    <li
                      className={`${
                        location.pathname === e.href &&
                        "text-teal-600 text-sm relative group"
                      } w-full select-none`}
                      key={linkId}
                    >
                      <div className="flex w-full justify-between">
                        <span className="cursor-pointer">{e.name}</span>
                        <span
                          onClick={() => {
                            if (menuData === linkId) {
                              setMenuData(null);
                            } else {
                              setMenuData(linkId);
                            }
                          }}
                          className="text-lg w-fit"
                        >
                          {menuData === linkId ? (
                            <IoMdArrowDropup />
                          ) : (
                            <IoMdArrowDropdown />
                          )}
                        </span>
                      </div>
                      <ul
                        className={`flex flex-col gap-4 duration-500 overflow-hidden ${
                          menuData === linkId && "mt-3"
                        }`}
                      >
                        {e.moreLinks.map((link: any, id) => (
                          <li
                            key={id}
                            className={`${
                              location.pathname === link.href
                                ? "text-green-600"
                                : "text-black"
                            } ${menuData === linkId ? "block" : "hidden"}`}
                          >
                            <Link
                              onClick={() => setShowMenu(false)}
                              to={
                                e?.dynamic ? `/projects/${link?.id}` : link.href
                              }
                              state={{
                                id: link.id,
                                category: link.title,
                              }}
                              className={`${
                                location.pathname === `/projects/${link.id}` &&
                                "text-green-600"
                              }`}
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li
                      onClick={() => setShowMenu(false)}
                      className={`${
                        location.pathname === e.href &&
                        "text-teal-600 text-sm relative group"
                      } w-fit select-none`}
                      key={linkId}
                    >
                      {e.href && <Link to={e.href}>{e.name}</Link>}
                    </li>
                  )}
                </div>
              ))}
            </ul>

            <div className="flex flex-col gap-5 items-start mt-5 font-cairo">
              {links.map((e: any, id: number) => (
                <button
                  className="duration-500 hover:bg-blue-500 hover:text-white text-sm px-2 py-1 rounded-e-md"
                  onClick={() => setShowMenu(false)}
                  key={id}
                >
                  <Link to={e.href}>{e.name}</Link>
                </button>
              ))}
            </div>

            <div className="mt-5 px-2 w-fit rounded-lg duration-500 hover:bg-blue-500 hover:text-white font-cairo text-sm py-1">
              <a href={profile} download={profile}>
                {t("profile")}
              </a>
            </div>

            <SwitchLanguage setShowMenu={setShowMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}
