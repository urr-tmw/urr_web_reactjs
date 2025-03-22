import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

// Import images from assets folder inside src
import news1 from "../assets/News1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";

const News = () => {
  const cards = [
    { title: "Card 1", img: news1 },
    { title: "Card 2", img: news2 },
    { title: "Card 3", img: news3 },
  ];

  return (
    <section className="container-fluid bg-light py-5">
      <div className="container">
        <h1 className="text-center fw-bold mb-4" style={{ fontSize: "48px", lineHeight: "58.09px" }}>
          News
        </h1>

        {/* Swiper for Mobile & Tablet */}
        <div className="d-lg-none"> 
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1} // Default: 1 card per view
            breakpoints={{
              640: { slidesPerView: 1 }, // Mobile: Show 1 slide
              768: { slidesPerView: 2 }, // Tablet: Show 2 slides
            }}
            pagination={{ clickable: true }}
            className="pb-4"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="d-flex justify-content-center">
                  <NewsCard card={card} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Desktop View */}
        <div className="d-none d-lg-flex justify-content-center gap-4">
          {cards.map((card, index) => (
            <NewsCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Card Component with Small Card
const NewsCard = ({ card }) => {
  return (
    <div className="card shadow-lg rounded-lg overflow-hidden position-relative" style={{ width: "401px", height: "401px", borderRadius: "34.47px"}}>
      {/* Image */}
      <img src={card.img} alt={card.title} className="card-img-top" style={{ height: "230px", objectFit: "cover" }} />

      {/* Main Card Body */}
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{card.title}</h5>
      </div>

      {/* Small Card Inside */}
<div
  className="position-absolute bottom-0 start-50 translate-middle-x bg-white shadow p-3"
  style={{ width: "374.82px", height: "201.53px", borderRadius: "17.7px" }}
>
  {/* Date */}
  <span className="text-muted small d-block text-start">1 Jan 2025</span>

  {/* Headline */}
  <h6 className="fw-bold text-start mt-2">Top LGD News</h6>

  {/* Description */}
  <p className="small text-muted text-start mb-2">
    The global LGD market is worth $15 billion, with India seeing 15-20% annual growth in consumption...
  </p>

  {/* Button */}
  <div className="d-flex justify-content-end">
    <button className="btn btn-dark px-3">&gt;</button>
  </div>
</div>


    </div>
  );
};

export default News;
