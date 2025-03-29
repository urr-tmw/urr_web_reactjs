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
    <div className="container my-5">
      <h2 className="text-center mt-5 mb-4 font-montserrat font-semibold text-3xl">
        Products
      </h2>

      {/* Desktop Layout */}
<div
  className="d-none d-lg-block mx-auto rounded"
  style={{ maxWidth: "1373px", height: "722px", borderRadius: "34.47px" }}
>
  <div className="d-flex justify-content-between mb-4 rounded" style={{ gap: "44.5px", borderRadius: "34.47px" }}>
    {products.slice(0, 3).map((item, index) => (
      <div
        key={item.id}
        className="position-relative overflow-hidden rounded"
        style={{
          width: [366, 552, 366][index] + "px",
          height: "464px",
          borderRadius: "34.47px",
        }}
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-100 h-100 object-cover"
          style={{ transform: "scale(1.1)", transition: "0.3s ease-in-out" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        />
      </div>
    ))}
  </div>

  <div className="d-flex justify-content-between rounded" style={{ gap: "48px", borderRadius: "34.47px" }}>
    {products.slice(3, 5).map((item, index) => (
      <div
        key={item.id}
        className="position-relative overflow-hidden rounded"
        style={{ width: [568, 760][index] + "px", height: "217px", borderRadius: "34.47px" }}
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-100 h-100 object-cover"
          style={{ transform: "scale(1.1)", transition: "0.3s ease-in-out" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        />
      </div>
    ))}
  </div>
</div>

      {/* Tablet Layout */}
      <div
  className="d-none d-md-block d-lg-none mx-auto rounded"
  style={{ maxWidth: "740.16px", height: "856.16px", borderRadius: "29.16px" }}
>
  {[0, 2].map((startIndex, rowIndex) => (
    <div
      key={rowIndex}
      className="mb-4 mx-auto rounded"
      style={{ width: "635.74px", height: "305px", borderRadius: "29.16px" }}
    >
      <div className="d-flex justify-content-between" style={{ gap: rowIndex === 0 ? "16.57px" : "12.89px" }}>
        {products.slice(startIndex, startIndex + 2).map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded"
            style={{ width: "309.59px", height: "305.73px", borderRadius: "29.16px" }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-100 h-100 object-cover"
              style={{ transform: "scale(1.1)", transition: "0.3s ease-in-out", borderRadius: "29.16px" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            />
          </div>
        ))}
      </div>
    </div>
  ))}

  <div
    className="overflow-hidden mx-auto rounded"
    style={{ width: "631.53px", height: "180.32px", borderRadius: "29.16px" }}
  >
    <img
      src={products[4].img}
      alt={products[4].title}
      className="w-100 h-100 object-cover rounded"
      style={{ transform: "scale(1.1)", transition: "0.3s ease-in-out", borderRadius: "29.16px" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
    />
  </div>
</div>


      {/* Mobile Layout */}
      <div
  className="d-block d-md-none mx-auto rounded"
  style={{ maxWidth: "343px", borderRadius: "15.82px" }}
>
  {[0, 2].map((startIndex, rowIndex) => (
    <div
      key={rowIndex}
      className="d-flex justify-content-between mb-2 rounded"
      style={{ gap: rowIndex === 0 ? "9px" : "7px", borderRadius: "15.82px" }}
    >
      {products.slice(startIndex, startIndex + 2).map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded"
          style={{ width: "168px", height: "166px", borderRadius: "15.82px" }}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-100 h-100 object-cover"
            style={{ transform: "scale(1.1)", transition: "0.3s ease-in-out", borderRadius: "15.82px" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          />
        </div>
      ))}
    </div>
  ))}

  <div
    className="overflow-hidden rounded"
    style={{ borderRadius: "15.82px" }}
  >
    <img
      src={products[4].img}
      alt={products[4].title}
      className="w-100 h-100 object-cover"
      style={{ transform: "scale(1.1)", transition: "0.3s ease-in-out", borderRadius: "15.82px" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
    />
  </div>
</div>

    </div>
  );
};

export default Products;
