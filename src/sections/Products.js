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
      <h2 className="text-center mb-14">Products</h2>
      
      {/* Desktop Layout */}
      <div className="d-none d-lg-block" style={{ maxWidth: "1373px", height: "722px", margin: "auto" }}>
        <div className="d-flex justify-content-between mb-4" style={{ gap: "44.5px" }}>
          {products.slice(0, 3).map((item, index) => (
            <div key={item.id} className="position-relative" style={{ width: [366, 552, 366][index] + "px", height: "464px" }}>
              <img src={item.img} alt={item.title} className="img-fluid rounded" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between" style={{ gap: "48px" }}>
          {products.slice(3, 5).map((item, index) => (
            <div key={item.id} className="position-relative" style={{ width: [568, 760][index] + "px", height: "217px" }}>
              <img src={item.img} alt={item.title} className="img-fluid rounded" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="d-lg-none" style={{ maxWidth: "343px", margin: "auto" }}>
        <div className="d-flex justify-content-between mb-2" style={{ gap: "9px" }}>
          <img src={products[0].img} alt={products[0].title} className="rounded" style={{ width: "168.14px", height: "166.05px", objectFit: "cover" }} />
          <img src={products[1].img} alt={products[1].title} className="rounded" style={{ width: "168.14px", height: "166.05px", objectFit: "cover" }} />
        </div>
        <div className="d-flex justify-content-between mb-2" style={{ gap: "7px" }}>
          <img src={products[2].img} alt={products[2].title} className="rounded" style={{ width: "168px", height: "166px", objectFit: "cover" }} />
          <img src={products[3].img} alt={products[3].title} className="rounded" style={{ width: "169px", height: "166px", objectFit: "cover" }} />
        </div>
        <div>
          <img src={products[4].img} alt={products[4].title} className="rounded w-100" style={{ height: "97.94px", objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
};

export default Products;
