import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing images
import HomeOurVision from "../assets/HomeOurVision.png";
import HomeOurStory from "../assets/HomeOurStory.png";
import HomeOurImpact from "../assets/HomeOurImpact.png";
import HomeOurMission from "../assets/HomeOurMission.png";

const AboutUs = () => {
  const cards = [
    { title: "Our Vision", img: HomeOurVision },
    { title: "Our Story", img: HomeOurStory },
    { title: "Our Impact", img: HomeOurImpact },
    { title: "Our Mission", img: HomeOurMission },
  ];

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ maxWidth: "1538.5px", height: "537.77px" }}
    >
      <h2 className="text-center mt-[131px] mb-[5px] font-montserrat font-semibold text-[48px]">
  About Us
</h2>

      <div
        className="container my-5"
        style={{ maxWidth: "1416px", height: "418.77px", paddingBottom: "100px" }}
      >
        {/* Desktop View */}
        <div className="d-none d-md-flex justify-content-between">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card text-white position-relative group overflow-hidden"
              style={{
                width: "334.17px",
                height: "418.77px",
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "31.73px",
              }}
            >
              {/* Hover Overlay */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-b from-[rgba(45,76,249,0.9)] to-[#040025] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
 {/* Title Centered at Bottom */}
<div
  className="card-img-overlay d-flex align-items-end justify-content-center text-center p-3"
  style={{
    bottom: "0",
    left: "0",
    right: "0",
    position: "absolute",
    transition: "all 0.5s ease-in-out",
  }}
>
<h5
  className="mb-3 transition-all duration-500 group-hover:translate-y-[-320px] group-hover:text-white font-montserrat font-normal text-[21.53px]"
  style={{ transition: "transform 0.5s ease-in-out" }}
>
  {card.title}
</h5>

</div>



              {/* Description (Appears on Hover) */}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Button (Appears on Hover) */}
              <div
                className="position-absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ bottom: "30px", left: "50%", transform: "translateX(-50%)" }}
              >
                <button className="btn bg-white text-blue-600 font-medium rounded-full px-4 py-2 hover:bg-blue-700 hover:text-white transition-all duration-300">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Swiper for mobile/tablet view */}
        <Swiper
  className="d-md-none"
  spaceBetween={26.44}
  slidesPerView={1}
  pagination={{ clickable: true }}
  modules={[Pagination]} // Removed Navigation module to hide arrows
>
  {cards.map((card, index) => (
    <SwiperSlide key={index}>
      <div
        className="card text-white position-relative group overflow-hidden mx-auto"
        style={{
          width: "334.17px",
          height: "418.77px",
          backgroundImage: `url(${card.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "31.73px",
        }}
      >
        {/* Hover Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-b from-[rgba(45,76,249,0.9)] to-[#040025] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* h5 Title Initially at Bottom, Moves Up on Hover */}
        <div
          className="card-img-overlay d-flex align-items-end justify-content-center text-center p-3"
          style={{
            bottom: "0",
            left: "0",
            right: "0",
            position: "absolute",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <h5
            className="mb-3 transition-all duration-500"
            style={{
              transform: "translateY(0px)",  // Initially at bottom
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {card.title}
          </h5>
        </div>

        {/* Hover Effect (Moves h5 Up by -320px) */}
        <style>
          {`
            .group:hover h5 {
              transform: translateY( 20px);
              color: white;
            }
          `}
        </style>

        {/* Description (Appears on Hover) */}
        <div
          className="position-absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            top: "100px",
            left: "20px",
            right: "20px",
            textAlign: "justify",
            fontSize: "16px",
            lineHeight: "1.5",
            fontFamily: "Inter",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Button (Appears on Hover) */}
        <div
          className="position-absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ bottom: "30px", left: "50%", transform: "translateX(-50%)" }}
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
  );
};

export default AboutUs;
