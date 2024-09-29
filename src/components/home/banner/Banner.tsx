import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import ReactPlayer from "react-player";
import { getData } from "../../../request/gteData";
import ReactPlayer from "react-player";

export default function Banner() {
  const [start, setStart] = useState<number>(0);
  const [sliders, setSliders] = useState<any>([]);

  const handleNextSlide = () => {
    if (start < sliders?.length - 1) {
      setStart((current) => current + 1);
    } else {
      setStart(0);
    }
  };

  const handlePrevSlide = () => {
    if (start > 0) {
      setStart((current) => current - 1);
    } else {
      setStart(sliders.length - 1);
    }
  };

  useEffect(() => {
    getData("sliders")
      .then((res: any) => setSliders(res.data.data))
      .catch(() => setSliders([]));
  }, []);


  console.log(sliders);

  return (
    <section className="relative h-[400px] sm:h-[650px]">
      <div className="overflow absolute top-0 left-0 bg-slate-950 w-full h-full opacity-60"></div>

      <div
        style={{
          zIndex: 1,
        }}
        className="flex items-center justify-between px-20 absolute  w-full bottom-5 text-xl text-white"
      >
        <span
          onClick={handleNextSlide}
          className="cursor-pointer w-10 h-3 rounded-full border-2 text-sm flex items-center justify-center p-2"
        >
          <FaArrowRight />
        </span>
        <span
          onClick={handlePrevSlide}
          className="cursor-pointer w-10 h-3 rounded-full border-2 text-sm flex items-center justify-center p-2"
        >
          <FaArrowLeft />
        </span>
      </div>

      <div
        style={{
          zIndex: 1,
        }}
        className="flex justify-center gap-5 absolute bottom-5 left-1/2 -translate-x-1/2"
      >
        {sliders.map((_: any, id: any) => (
          <span
            onClick={() => setStart(id)}
            key={id}
            className={`w-10 h-3 duration-500 border-2 cursor-pointer rounded-full ${
              id === start && "bg-white"
            }`}
          ></span>
        ))}
      </div>

      {sliders[start]?.type === "image" ? (
        <img
          loading="lazy"
          src={sliders[start]?.image}
          alt="image"
          className="w-full h-full"
        />
      ) : (
        <ReactPlayer
          url={`${sliders[start]?.image}`}
          muted={true}
          loop={true}
          width="100%"
          height="100%"
          playing={true}
          controls={false}
          playsinline={true}
          config={{
            file: {
              attributes: {
                disablePictureInPicture: true,
              },
            },
          }}
        />
      )}
    </section>
  );
}
