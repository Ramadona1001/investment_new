import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { IoMdClose } from "react-icons/io";
import { mapData } from "../../../data/markers/allMarkers";
import { MdMenuOpen } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { countCharacters } from "../../../format/formatText";

interface Marker {
  longitude: number;
  latitude: number;
  title: string;
  description: string;
  image: string;
  markerImage: string;
  id: number;
}

const markers: Marker[] | any = mapData;

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const { t } = useTranslation();
  const path = useLocation().pathname;

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2dpZCIsImEiOiJjbHoycDg0eDEwcXpkMmxwZnJrcTBkb21kIn0.i1HR0-m2ej_PXHARwS_QSg";

    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [46.6753, 24.7136],
        zoom: 0,
        attributionControl: false,
        logoPosition: "top-right",
        maxBounds: [
          [34.0, 10.0], // Southwest coordinates (Yemen)
          [65.0, 29.0], // Northeast coordinates (Saudi Arabia)
        ],
      });

      mapRef.current.addControl(new mapboxgl.AttributionControl(), "top-left");

      // Adding markers
      markers.forEach((marker: any) => {
        const el = document.createElement("div");
        el.className = "marker animate-pulse bg-teal-200";
        el.style.width = "50px";
        el.style.height = "50px";
        el.style.opacity = "0.2";
        el.style.borderRadius = "50%";
        el.style.display = "flex";
        el.style.alignItems = "center";
        el.style.justifyContent = "center";

        const innerEl = document.createElement("div");
        innerEl.className = "bg-teal-500";
        innerEl.style.width = "20px";
        innerEl.style.height = "20px";
        innerEl.style.borderRadius = "50%";

        el.appendChild(innerEl);

        new mapboxgl.Marker(el)
          .setLngLat([marker.longitude, marker.latitude])
          .addTo(mapRef.current!)
          .getElement()
          .addEventListener("click", () => {
            setSelectedMarker(marker);
            setShow(true);
          });
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [show]);

  return (
    <section className={`${path === "/interactive-map" ? "mt-0" : "mt-14"}`}>
      {path !== "/interactive-map" && (
        <div className="pb-10 flex justify-center items-center">
          <h2 className="text-2xl font-cairo text-gold">{t("active")}</h2>
        </div>
      )}

      <div className="h-[90vh] flex overflow-hidden relative">
        <div
          onClick={() => setShow((current) => !current)}
          className=" absolute top-1/2 z-50 right-2 -translate-y-1/2 text-3xl cursor-pointer hidden md:block"
        >
          <span>
            <MdMenuOpen />
          </span>
        </div>

        <div
          className={`fixed ${
            show ? "top-1/2" : "top-[-8000px]"
          }  left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] bg-[#223525] shadow-md max-w-64 w-full px-4 py-3 rounded-xl text-white duration-500 md:hidden`}
        >
          <h3 className="text-center  font-cairo">{selectedMarker?.title}</h3>
          <button className="w-full mt-2 underline underline-offset-4 font-cairo">
            <Link
              to={`/project/${selectedMarker?.id}`}
              state={selectedMarker?.id}
            >
              {t("more")}
            </Link>
          </button>
        </div>

        {show && (
          <div
            onClick={() => {
              setShow(false);
              setSelectedMarker(null);
            }}
            className="overlay fixed top-0 left-0 bg-black w-full h-full z-30 opacity-15"
          ></div>
        )}
        <div
          id="map"
          ref={mapContainerRef}
          style={{ width: "100%" }}
          className={`${path !== "/interactive-map" && "mt-2"}`}
        ></div>
        <div
          className={`bg-[#223525] hidden md:block fixed ${
            show ? "right-0" : "right-[-1000px]"
          } top-0 h-full text-white duration-500 z-[70] max-w-[500px] w-full`}
          style={{
            padding: "10px",
            overflowY: "scroll",
            borderLeft: "1px solid #ddd",
          }}
        >
          <div
            onClick={() => {
              setSelectedMarker(null);
              setShow(false);
            }}
            className="text-white absolute top-5 right-5 text-3xl w-fit cursor-pointer"
          >
            <span>
              <IoMdClose />
            </span>
          </div>
          {selectedMarker ? (
            <div className="py-20 px-4">
              <h2 className="text-center text-2xl font-cairo">
                {selectedMarker.title}
              </h2>
              <p className="py-4 px-4 mt-4 text-sm font-cairo text-justify ltr:text-end leading-6">
                {countCharacters(selectedMarker.description)}
              </p>

              {selectedMarker?.image && (
                <img
                  src={selectedMarker.image}
                  alt={selectedMarker.title}
                  className="w-full rounded-md"
                />
              )}
              <button className="mt-3 font-cairo w-full ltr:text-end rtl:text-start pb-2 duration-300 hover:text-teal-700">
                <Link
                  target="_blank"
                  to={`https://ocoda.com`}
                  state={selectedMarker.id}
                >
                  اوكودا شريكك في النجاح الرقمي
                </Link>
              </button>
              <button className="w-full text-center underline underline-offset-4 mt-4 ">
                <Link
                  to={`/project/${selectedMarker.id}`}
                  state={selectedMarker.id}
                >
                  {t("more")}
                </Link>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5 items-center justify-center h-full">
              <h3 className="text-teal-600 text-xl font-cairo font-bold">
                {t("active")}
              </h3>
              <p className="text-white text-2xl font-cairo font-bold w-60 mx-auto text-center leading-9">
                {t("discover")}
              </p>
              <p className="text-teal-600 font-bold text-lg mt-5">
                Innovation Districts
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Map;
