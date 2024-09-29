import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getData } from "../../request/gteData";
export default function Videos() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState<any>(null);
  const [videos, setVideos] = useState([]);

  // const videos = [
  //   {
  //     title: "Photo 1",
  //     poster:
  //       "https://sdaia.gov.sa/ar/MediaCenter/PhotosGalleryImages/2D6A3149.jpg",
  //     video: "https://youtu.be/ORfbeJHAifs?si=za5co9IvM_8Ny3mO",
  //   },
  //   {
  //     title: "Photo 2",
  //     poster:
  //       "https://sdaia.gov.sa/ar/MediaCenter/PhotosGalleryImages/2D6A3149.jpg",
  //     video: "https://youtu.be/ORfbeJHAifs?si=za5co9IvM_8Ny3mO",
  //   },
  //   {
  //     title: "Photo 3",
  //     poster:
  //       "https://sdaia.gov.sa/ar/MediaCenter/PhotosGalleryImages/2D6A3149.jpg",
  //     video: "https://youtu.be/ORfbeJHAifs?si=za5co9IvM_8Ny3mO",
  //   },
  //   {
  //     title: "Photo 4",
  //     poster:
  //       "https://sdaia.gov.sa/ar/MediaCenter/PhotosGalleryImages/2D6A3149.jpg",
  //     video: "https://youtu.be/ORfbeJHAifs?si=za5co9IvM_8Ny3mO",
  //   },
  // ];

  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [show]);

  useEffect(() => {
    getData("gallery_videos")
      .then((response) => setVideos(response.data.data))
      .catch((error) => {
        console.log(error);
        setVideos([]);
      });
  }, []);

  return (
    <section>
      <div className="min-h-screen relative bg-cover bg-center bg-no-repeat bg-[url('https://th.bing.com/th/id/R.13a1899eb294764c6c275e3b3737c485?rik=3XZ3MsgDtVuTow&pid=ImgRaw&r=0')] flex items-center">
        <div className="overlay absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        <div className="text-white px-5 xs:px-10 sm:px-28 lg:px-40 z-20">
          <div>
            <motion.h3
              initial={{ translateY: -20 }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold font-cairo"
            >
              {t("media")}
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

              <span>{t("video")}</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 pb-14 px-4 md:px-0 lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {videos?.map((video: any) => (
          <div
            key={video?.id}
            onClick={() => {
              setShow((current) => !current);
              setVideo(video?.video);
            }}
            className="w-full h-80 rounded-lg relative cursor-pointer group"
          >
            <img
              loading="lazy"
              src={video?.image || "/poster.jpg"}
              alt={video?.title}
              className="w-full h-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white hidden group-hover:flex items-center justify-center flex-col gap-5 px-4">
              <motion.span
                initial={{ translateY: -20 }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl"
              >
                <FaEye />
              </motion.span>
              <motion.h3
                initial={{ translateY: 20 }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-cairo"
              >
                {video?.title}
              </motion.h3>
            </div>
          </div>
        ))}
      </div>
      {show && (
        <>
          <div
            onClick={() => setShow((current) => !current)}
            className="fixed top-0 left-0 px-4  w-full h-screen bg-black/50 z-[50] flex items-center justify-center"
          ></div>
          <div className="w-full h-[350px] sm:w-3/4 sm:h-[450px] md:h-[600px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[500]">
            <ReactPlayer
              url={`${video}`}
              width="100%"
              height="100%"
              controls={true}
              playsinline={true}
              config={{
                file: {
                  attributes: {
                    disablePictureInPicture: true,
                  },
                },
              }}
            />
          </div>
        </>
      )}
    </section>
  );
}
