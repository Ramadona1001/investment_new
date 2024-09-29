import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Form from "./Form";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function Contact() {
  const { t } = useTranslation();

  const social = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/SGID.SA",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/alsaad-group-for-investment-and-development",
    },
  ];

  return (
    <section>
      <div
        style={{
          backgroundImage: `url("/contact.jpeg")`,
        }}
        className="min-h-screen relative bg-cover bg-center bg-no-repeat  flex items-center"
      >
        <div className="overlay absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        <div className="text-white px-5 xs:px-10 sm:px-28 lg:px-40 z-20">
          <div>
            <motion.h3
              initial={{ translateY: -20 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold font-cairo"
            >
              {t("contact")}
            </motion.h3>
            <motion.div
              initial={{ translateY: 20 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1 }}
              className="bg-white w-fit px-3 py-1 font-cairo text-black mt-7 text-sm"
            >
              <Link to="/" className="text-gray-500">
                {t("home")} »{" "}
              </Link>

              <span>{t("contact")}</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-0 mt-8 lg:w-[60%] pb-8">
        <div className="flex flex-col w-full lg:flex-row gap-10 lg:gap-20 bg-white shadow-md">
          <div className="flex-1 px-4 py-5 rounded-lg">
            <Form />
          </div>

          <div className="lg:w-[40%] bg-gray-200 shadow-md rounded-lg pb-5">
            <img
              loading="lazy"
              src="/contact.jpg"
              alt="contact"
              className="w-full h-60"
            />
            <div className="mt-5 text-xs font-cairo px-4">
              <Link to={"tel:+966920035103"}>
                <div className="flex gap-5">
                  <span className="text-gray-600 text-2xl">
                    <CiPhone />
                  </span>
                  <div className="flex flex-col gap-2">
                    <span>{t("phone_number")}</span>
                    <span className="flex ltr:flex-row-reverse text-gray-600">
                      <span>966920035103</span>
                      <span>+</span>
                    </span>
                  </div>
                </div>
              </Link>
              <Link to={"mailto:info@sgid.sa"} className="mt-6 block">
                <div className="flex gap-5">
                  <span className="text-gray-600 text-2xl">
                    <IoMail />
                  </span>
                  <div className="flex flex-col gap-2">
                    <span>{t("email")}</span>
                    <span className="text-gray-600">info@sgid.sa</span>
                  </div>
                </div>
              </Link>
              <Link
                target="_blank"
                to="https://www.google.com/maps/place/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9+%D8%A7%D9%84%D8%B3%D8%B9%D8%AF+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1+%D9%88%D8%A7%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9%E2%80%AD/@24.7680473,46.6658595,15z/data=!4m5!3m4!1s0x0:0xf6f5bd89344fb098!8m2!3d24.768044!4d46.674616?shorturl=1"
                className="mt-6 block"
              >
                <div className="flex gap-5">
                  <span className="text-gray-600 text-2xl">
                    <CiLocationOn />
                  </span>
                  <div className="flex flex-col gap-2">
                    <span>{t("location")}</span>
                    <span className="text-gray-600 max-w-64">
                      {t("location_address")}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="px-14 mt-5 flex gap-5">
              {social.map((social, id) => (
                <Link
                key={id}
                  className="flex items-center justify-center  bg-gray-300 text-lg duration-500 hover:bg-black hover:text-white text-gray-500 px-4 py-2"
                  to={social.url}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
