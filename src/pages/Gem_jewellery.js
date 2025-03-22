import React from "react";
import GJcvd2 from "../assets/about_cvd2.png";
import DScvd2 from "../assets/about_cvd2.png";

const Gem_jewelry = () => {
  return (
    <div>
      {/* Main Content */}
      <div style={{ margin: "0 auto", paddingTop: "70px", maxWidth: "1362px" }}>
        {/* First Container (Odd) */}
        <div
          className="mt-[63px] mx-auto w-full sm:w-[1327.81px] h-auto sm:h-[367.25px] flex flex-col sm:flex-row items-center justify-center rounded-[50px] bg-white group"
        >
          {/* Inner Content Container */}
          <div className="w-full sm:w-[1249.81px] h-auto sm:h-[311.25px] flex flex-col sm:flex-row justify-between p-4 sm:p-0">
            {/* Text Container */}
            <div
              className="w-full sm:w-[680px] h-auto sm:h-[226px] flex flex-col justify-center text-left bg-white p-4 rounded"
              style={{ marginTop: "42.63px", marginBottom: "42.63px" }}
            >
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "40px",
                  lineHeight: "48.76px",
                  letterSpacing: "0%",
                }}
              >
                What we do?
              </h2>
              <p
                className="text-sm"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "22px",
                  lineHeight: "26.82px",
                  letterSpacing: "2%",
                }}
              >
                Founded with a vision to revolutionize industrial material <br />
                applications, URR Manufacturing has become a leader in <br />
                the synthesis of high-quality lab-grown diamonds. We <br />
                leverage advanced technological processes to grow, cut, <br />
                and polish diamonds that set industry benchmarks for <br />
                thermal conductivity and durability.
              </p>
            </div>

            {/* Gap between Text and Image */}
            <div className="w-0 sm:w-[50px] h-4 sm:h-0"></div>

            {/* Image */}
            <div className="w-full sm:w-[519.81px] h-[311.25px] rounded-[59.25px] overflow-hidden">
              <img
                src={DScvd2}
                alt="DScvd2"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-125" // Deep zoom effect
              />
            </div>
          </div>
        </div>

        {/* Second Container (Even) */}
        <div
          className="mt-[63px] mx-auto w-full sm:w-[1327.81px] h-auto sm:h-[367.25px] flex flex-col sm:flex-row items-center justify-center rounded-[50px] group"
          style={{ backgroundColor: "#E0E0E1" }}
        >
          {/* Inner Content Container */}
          <div className="w-full sm:w-[1249.81px] h-auto sm:h-[311.25px] flex flex-col sm:flex-row justify-between p-4 sm:p-0">
            {/* Image */}
            <div className="w-full sm:w-[519.81px] h-[311.25px] rounded-[59.25px] overflow-hidden">
              <img
                src={GJcvd2}
                alt="GJcvd2"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-125" // Deep zoom effect
              />
            </div>

            {/* Gap between Image and Text */}
            <div className="w-0 sm:w-[50px] h-4 sm:h-0"></div>

            {/* Text Container (Even) */}
            <div
              className="w-full sm:w-[680px] h-auto sm:h-[226px] flex flex-col justify-center text-left p-4 rounded"
              style={{
                marginTop: "42.63px",
                marginBottom: "42.63px",
                backgroundColor: "#E0E0E1",
              }}
            >
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "40px",
                  lineHeight: "48.76px",
                  letterSpacing: "0%",
                }}
              >
                What we do?
              </h2>
              <p
                className="text-sm"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "22px",
                  lineHeight: "26.82px",
                  letterSpacing: "2%",
                }}
              >
                Founded with a vision to revolutionize industrial material <br />
                applications, URR Manufacturing has become a leader in <br />
                the synthesis of high-quality lab-grown diamonds. We <br />
                leverage advanced technological processes to grow, cut, <br />
                and polish diamonds that set industry benchmarks for <br />
                thermal conductivity and durability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gem_jewelry;