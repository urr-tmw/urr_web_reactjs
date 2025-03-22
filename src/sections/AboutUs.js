import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
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
  <h2 className="text-center mb-60px">About Us</h2>

  <div
    className="container my-5"
    style={{ maxWidth: "1416px", height: "418.77px", paddingBottom: "100px" }}
  >
    <div className="d-none d-md-flex justify-content-between">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card text-white position-relative"
          style={{
            width: "334.17px",
            height: "418.77px",
            backgroundImage: `url(${card.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "31.73px",
            overflow: "hidden",
          }}
        >
          <div className="card-img-overlay d-flex align-items-end p-3">
            <h5 className="mb-0">{card.title}</h5>
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
      navigation
      modules={[Pagination, Navigation]}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div
            className="card text-white"
            style={{
              width: "334.17px",
              height: "418.77px",
              margin: "0 auto",
              backgroundImage: `url(${card.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="card-img-overlay d-flex align-items-center justify-content-center text-center p-3">
              <h5 className="mb-0 w-100">{card.title}</h5>
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
