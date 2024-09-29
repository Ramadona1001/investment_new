import { Link, useLocation } from "react-router-dom";
import "../../i18n";
import All_Links from "../../data/links/all_links";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Menu from "./Menu";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Nav() {
  const links = All_Links();
  const { t } = useTranslation();

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [header, setHeader] = useState<boolean>(false);
  const location = useLocation();

  const handleShowSearch = () => {
    setShow(true);

    setTimeout(() => {
      setShowSearch(true);
    }, 100);
  };

  const handleHideSearch = () => {
    setShowSearch(false);

    setTimeout(() => {
      setShow(false);
    }, 200);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSearch, show]);

  const [showMoreLinks, setShowMoreLinks] = useState(null);

  const handleMouseOver = (id: any) => {
    setShowMoreLinks(id);
  };

  const handleMouseOut = () => {
    setShowMoreLinks(null);
  };

  const [hoverId, setId] = useState<null | number>(null);

  const pathName = useLocation().pathname;
  const id = pathName.split("/").pop();

  useEffect(() => {
    if (pathName === `/news/${id}`) {
      setHeader(true);
    } else if (pathName === `/inspiring-stories/${id}`) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }, [pathName, id]);

  return (
    <nav
      className={`py-2 w-full absolute  text-white z-50 ${
        header && "bg-[#223525]"
      }`}
    >
      <header>
        <div className="container mx-auto px-4 md:px-0 lg:w-[80%] flex justify-between items-center py-2">
          <div className="max-w-80">
            <Link to="/home">
              <img loading="lazy" src="/logo.png" alt="logo" className="w-60" />
            </Link>
          </div>

          <ul className="hidden xl:flex items-center text-sm gap-5 font-cairo">
            {links.map((e: any, id: number) => (
              <li
                onMouseOver={() => handleMouseOver(id)}
                onMouseOut={handleMouseOut}
                onClick={() => setShowMoreLinks(null)}
                className={` relative group flex items-center`}
                key={id}
              >
                {e?.moreLinks ? (
                  <div>
                    {e?.moreLinks && e.href ? (
                      <Link to={e.href}>{e.name}</Link>
                    ) : (
                      <span className="cursor-pointer">{e.name}</span>
                    )}
                  </div>
                ) : (
                  <Link to={e.href}>{e.name}</Link>
                )}

                {location.pathname === e.href && (
                  <span className="absolute bottom-[-2px] rtl:right-0 ltr:left-0 duration-500 group-hover:w-1/2 w-1/4 h-[1px] bg-white"></span>
                )}

                {e?.moreLinks && (
                  <>
                    <span className="px-2">
                      {showMoreLinks === id ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </span>
                    <ul
                      className={`absolute top-6 bg-white rounded-xl pb-3 pt-2`}
                    >
                      {e.moreLinks?.map((subLink: any, subId: number) => (
                        <li
                          className={` duration-500  w-48 px-2  text-black font-cairo py-2 pt-3 h-auto ${
                            showMoreLinks === id
                              ? "flex items-center gap-2"
                              : "hidden"
                          }`}
                          key={subId}
                        >
                          <Link
                            className="group flex gap-2 group"
                            to={
                              e.dynamic
                                ? `/projects/${subLink?.id}`
                                : subLink.href
                            }
                            state={{
                              id: subLink.id,
                              category: subLink.title,
                            }}
                            onMouseOver={() => setId(subId)}
                            onMouseOut={() => setId(null)}
                          >
                            {subLink.title}

                            <div
                              className={`border-2 px-3 py-1 rounded-xl text-xs ${
                                hoverId === subId ? "opacity-100" : "opacity-0"
                              } duration-500 arrow_show`}
                            >
                              <span className="duration-500">
                                {document.dir === "rtl" ? (
                                  <FaArrowLeft />
                                ) : (
                                  <FaArrowRight />
                                )}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <Menu />
            <span
              onClick={handleShowSearch}
              className="w-10 h-10 cursor-pointer text-lg flex items-center justify-center rounded-full border-2 hover:bg-[#223525] hover:text-white hover:border-none duration-300"
            >
              <FaSearch />
            </span>
          </div>

          {show && (
            <>
              <div
                onClick={handleHideSearch}
                className="overlay z-50 fixed top-0 left-0 w-full min-h-screen bg-gray-500/50 cursor-pointer"
              ></div>
              <div
                className={`absolute ${
                  showSearch ? "top-[400px]" : "top-[-800px]"
                } left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-28 max-h-60 overflow-y-auto w-11/12 sm:w-3/4 lg:w-2/4 xl:w-1/4 z-[999] shadow-xl rounded-lg flex items-center justify-center duration-500`}
              >
                <div className="w-3/4 flex justify-center relative text-black">
                  <input
                    type="text"
                    placeholder={t("search")}
                    className="outline-none border-2 w-full py-2 px-3 rounded-md text-black"
                  />
                  <span className=" absolute top-1/2 rtl:left-3 ltr:right-3 -translate-y-1/2 text-lg">
                    <IoSearchOutline />
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </nav>
  );
}
