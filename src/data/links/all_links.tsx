import { useTranslation } from "react-i18next";
import "../../i18n";
import { useEffect, useState } from "react";
import { getData } from "../../request/gteData";
export default function All_Links() {
  const { t } = useTranslation();

  const [projectsCategory, setProjectCategory] = useState([]);

  useEffect(() => {
    getData("projects-categories")
      .then((res: any) => setProjectCategory(res.data.data))
      .catch(() => setProjectCategory([]));
  }, []);

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
      name: t("projects"),
      href: "/our-projects",
      moreLinks: projectsCategory,
      dynamic: true,
    },
    {
      name: t("achievements"),
      moreLinks: [
        {
          title: t("honours"),
          href: "/honours",
        },

        {
          title: t("stories"),
          href: "/inspiring-stories",
        },
      ],
    },
    {
      name: t("services"),
      href: "/services",
    },
    {
      name: t("media"),
      moreLinks: [
        {
          title: t("news"),
          href: "/news",
        },
        {
          title: t("gallery"),
          href: "/photos-gallery",
        },
        {
          title: t("video"),
          href: "/video-gallery",
        },
      ],
    },
  ];

  return links;
}
