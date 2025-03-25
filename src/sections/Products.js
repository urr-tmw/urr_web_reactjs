import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import thermal from "../assets/Product1.png";
import mechanical from "../assets/Product2.png";
import optical from "../assets/Product3.png";
import electrical from "../assets/Product4.png";
import custom from "../assets/Product5.png";

const Products = () => {
  const products = [
    { id: 1, title: "Thermal Grades", img: thermal },
    { id: 2, title: "Mechanical Grades", img: mechanical },
    { id: 3, title: "Optical Grades", img: optical },
    { id: 4, title: "Electrical Grades", img: electrical },
    { id: 5, title: "Need Customized Product?", img: custom },
  ];

  return (
    <div className="container my-5" style={{ maxWidth: "1489px", height: "819px" }}>
      <h2 className="text-center mt-20 mb-14 font-montserrat font-semibold text-[48px]">
  Products
</h2>


      {/* Desktop Layout */}
      <div className="d-none d-lg-block" style={{ maxWidth: "1373px", height: "722px", margin: "auto" }}>
        <div className="d-flex justify-content-between mb-4" style={{ gap: "44.5px" }}>
          {products.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              className="position-relative overflow-hidden"
              style={{ width: [366, 552, 366][index] + "px", height: "464px", borderRadius:  "34.47px",overflow: "hidden"}}
            >
              <div className="w-100 h-100 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded w-100 h-100 object-cover transition-transform duration-300"
                  style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div className="position-absolute bottom-0 start-50 translate-middle-x bg-black bg-opacity-70 text-white text-center px-3 py-2 opacity-0 transition-opacity duration-300"
                  style={{ transition: "opacity 0.3s ease-in-out" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between" style={{ gap: "48px" }}>
          {products.slice(3, 5).map((item, index) => (
            <div
              key={item.id}
              className="position-relative overflow-hidden"
              style={{ width: [568, 760][index] + "px", height: "217px" }}
            >
              <div className="w-100 h-100 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded w-100 h-100 object-cover transition-transform duration-300"
                  style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div className="position-absolute bottom-0 start-50 translate-middle-x bg-black bg-opacity-70 text-white text-center px-3 py-2 opacity-0 transition-opacity duration-300"
                  style={{ transition: "opacity 0.3s ease-in-out" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="d-lg-none" style={{ maxWidth: "343px", margin: "auto" }}>
        <div className="d-flex justify-content-between mb-2" style={{ gap: "9px" }}>
          {products.slice(0, 2).map((item) => (
            <div key={item.id} className="overflow-hidden" style={{ width: "168.14px", height: "166.05px" }}>
              <div className="w-100 h-100 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded w-100 h-100 object-cover transition-transform duration-300"
                  style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div className="position-absolute bottom-0 start-50 translate-middle-x bg-black bg-opacity-70 text-white text-center px-2 py-1 opacity-0 transition-opacity duration-300"
                  style={{ transition: "opacity 0.3s ease-in-out" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between mb-2" style={{ gap: "7px" }}>
          {products.slice(2, 4).map((item) => (
            <div key={item.id} className="overflow-hidden" style={{ width: "168px", height: "166px" }}>
              <div className="w-100 h-100 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded w-100 h-100 object-cover transition-transform duration-300"
                  style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div className="position-absolute bottom-0 start-50 translate-middle-x bg-black bg-opacity-70 text-white text-center px-2 py-1 opacity-0 transition-opacity duration-300"
                  style={{ transition: "opacity 0.3s ease-in-out" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden">
          <div className="w-100 h-100 overflow-hidden">
            <img
              src={products[4].img}
              alt={products[4].title}
              className="rounded w-100 h-100 object-cover transition-transform duration-300"
              style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div className="position-absolute bottom-0 start-50 translate-middle-x bg-black bg-opacity-70 text-white text-center px-2 py-1 opacity-0 transition-opacity duration-300"
              style={{ transition: "opacity 0.3s ease-in-out" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
            >
              {products[4].title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
