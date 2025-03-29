import React,{useEffect,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import {getAboutUsOverview } from "../utils/apiService";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  const [abusoverview, setAbUsOverview] = useState([]);

  useEffect(() => {
          const fetchAboutUsOverview = async () => {
              try {
                  const abusoverview_data = await getAboutUsOverview();
                  console.log("Fetched About Us Overview:", abusoverview_data);
                  setAbUsOverview(abusoverview_data);
              } catch (error) {
                  console.error("Error fetching About Us Overview:", error);
              }
          };
  
          fetchAboutUsOverview();
      }, []);
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ maxWidth: "1538.5px", height: "537.77px" }}
    >
      <h2 className="text-center mt-5 mb-3 font-montserrat font-semibold text-[48px]">
        About Us
      </h2>

      <div
        className="container my-5"
        style={{
          maxWidth: "1416px",
          height: "418.77px",
          paddingBottom: "100px",
        }}
      >
        {/* Desktop View */}
        <div className="d-none d-md-flex justify-content-between">
          {abusoverview.map((card, index) => (
            <div
              key={index}
              className="card text-white position-relative group overflow-hidden"
              style={{
                width: "334.17px",
                height: "418.77px",
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "31.73px",
              }}
            >
              {/* Hover Overlay with Gradient */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(45, 76, 249, 0.9) 0%, #040025 100%)",
                }}
              ></div>

              {/* Title */}
              <div
                className="card-img-overlay d-flex align-items-end justify-content-center text-center p-3"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "0",
                  right: "0",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <h5 className="mb-3 transition-all duration-500 group-hover:translate-y-[-320px] font-montserrat font-normal text-[21.53px]">
                  {card.title}
                </h5>
              </div>

              {/* Description */}
              <div
                className="position-absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  top: "100px",
                  left: "20px",
                  right: "20px",
                  textAlign: "justify",
                  fontSize: "18px",
                  lineHeight: "1.5",
                  fontFamily: "Inter",
                }}
              >
                <p>
                {card.description}
                </p>
              </div>

              {/* Button */}
              <div
                className="position-absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  bottom: "30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <button className="btn bg-white text-blue-600 font-medium rounded-full px-4 py-2 hover:bg-blue-700 hover:text-white transition-all duration-300">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Swiper for mobile/tablet view */}
        <div className="d-md-none" style={{ height: "auto" }}>
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            style={{ height: "auto", paddingBottom: "30px" }}
          >
            {abusoverview.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className="card text-white position-relative group overflow-hidden mx-auto"
                  style={{
                    width: "90%",
                    maxWidth: "334.17px",
                    height: "418.77px",
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "31.73px",
                  }}
                >
                  {/* Hover Overlay with Gradient */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(45, 76, 249, 0.9) 0%, #040025 100%)",
                    }}
                  ></div>

                  {/* Title */}
                  <div
                    className="card-img-overlay d-flex align-items-end justify-content-center text-center p-3"
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "0",
                      right: "0",
                      transition: "all 0.5s ease-in-out",
                    }}
                  >
                    <h5 className="mb-3 transition-all duration-500 group-hover:translate-y-[-50px] font-montserrat font-normal text-[21.53px]">
                      {card.title}
                    </h5>
                  </div>

                  {/* Description */}
                  <div
                    className="position-absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      top: "120px",
                      left: "20px",
                      right: "20px",
                      textAlign: "justify",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      fontFamily: "Inter",
                    }}
                  >
                    <p>
                     {card.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div
                    className="position-absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      bottom: "20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <button className="btn bg-white text-blue-600 font-medium rounded-full px-4 py-2 hover:bg-blue-700 hover:text-white transition-all duration-300">
                      Know More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
