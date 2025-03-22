import React from 'react';
import SCcvd1 from "../assets/about_cvd4.png";
import SCcvd2 from "../assets/about_cvd1.png";
import SCcvd3 from "../assets/about_cvd2.png";
import SCcvd4 from "../assets/about_cvd3.png";

const Single_crystal = () => {
  return (
    <div>
      {/* Main Content */}
      <div style={{ margin: "0 auto", paddingTop: "70px", maxWidth: "1362px" }}>
        {/* Additional Main Container */}
        <div
          className="mt-[63px] mx-auto w-full sm:w-[1327.81px] h-auto sm:h-[367.25px] flex flex-col sm:flex-row items-center justify-center rounded-[50px] group"
          style={{ backgroundColor: 1 % 2 !== 0 ? "#E0E0E1" : "white" }} // Odd index (1) gets #E0E0E1
        >
          {/* Inner Content Container */}
          <div className="w-full sm:w-[1249.81px] h-auto sm:h-[311.25px] flex flex-col sm:flex-row justify-between p-4 sm:p-0">
            {/* Image */}
            <div className="w-full sm:w-[519.81px] h-[311.25px] rounded-[59.25px] overflow-hidden">
              <img
                src={SCcvd1}
                alt="SCcvd1"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-125" // Deep zoom effect
              />
            </div>

            {/* Gap between Image and Text */}
            <div className="w-0 sm:w-[50px] h-4 sm:h-0"></div>

            {/* Text Container */}
            <div
              className="w-full sm:w-[680px] h-auto sm:h-[226px] flex flex-col justify-center text-left p-4 rounded"
              style={{ marginTop: "42.63px", marginBottom: "42.63px" }}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "40px",
                  lineHeight: "48.76px",
                  letterSpacing: "0%",
                }}
              >
                Thermal Grades
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
                Founded with a vision to revolutionize industrial material <br></br>applications, URR Manufacturing has become a leader in <br></br>the synthesis of high-quality lab-grown diamonds. We <br></br>leverage advanced technological processes to grow, cut, <br></br>and polish diamonds that set industry benchmarks for <br></br>thermal conductivity and durability.
              </p>
            </div>
          </div>
        </div>

        {/* Another Main Container */}
        <div
          className="mt-[63px] mx-auto w-full sm:w-[1327.81px] h-auto sm:h-[367.25px] flex flex-col sm:flex-row items-center justify-center rounded-[50px] group"
          style={{ backgroundColor: 2 % 2 !== 0 ? "#E0E0E1" : "white" }} // Even index (2) gets white
        >
          {/* Inner Content Container */}
          <div className="w-full sm:w-[1249.81px] h-auto sm:h-[311.25px] flex flex-col sm:flex-row justify-between p-4 sm:p-0">
            {/* Text Container */}
            <div
              className="w-full sm:w-[680px] h-auto sm:h-[226px] flex flex-col justify-center text-left p-4 rounded"
              style={{ marginTop: "42.63px", marginBottom: "42.63px" }}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "40px",
                  lineHeight: "48.76px",
                  letterSpacing: "0%",
                }}
              >
                Mechanical Grades
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
                Founded with a vision to revolutionize industrial material <br></br>applications, URR Manufacturing has become a leader in <br></br>the synthesis of high-quality lab-grown diamonds. We <br></br>leverage advanced technological processes to grow, cut, <br></br>and polish diamonds that set industry benchmarks for <br></br>thermal conductivity and durability.
              </p>
            </div>

            {/* Gap between Text and Image */}
            <div className="w-0 sm:w-[50px] h-4 sm:h-0"></div>

            {/* Image */}
            <div className="w-full sm:w-[519.81px] h-[311.25px] rounded-[59.25px] overflow-hidden">
              <img
                src={SCcvd2}
                alt="SCcvd2"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-125" // Deep zoom effect
              />
            </div>
          </div>
        </div>

        {/* Additional Main Container */}
        <div
          className="mt-[63px] mx-auto w-full sm:w-[1327.81px] h-auto sm:h-[367.25px] flex flex-col sm:flex-row items-center justify-center rounded-[50px] group"
          style={{ backgroundColor: 3 % 2 !== 0 ? "#E0E0E1" : "white" }} // Odd index (3) gets #E0E0E1
        >
          {/* Inner Content Container */}
          <div className="w-full sm:w-[1249.81px] h-auto sm:h-[311.25px] flex flex-col sm:flex-row justify-between p-4 sm:p-0">
            {/* Image */}
            <div className="w-full sm:w-[519.81px] h-[311.25px] rounded-[59.25px] overflow-hidden">
              <img
                src={SCcvd3}
                alt="SCcvd3"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-125" // Deep zoom effect
              />
            </div>

            {/* Gap between Image and Text */}
            <div className="w-0 sm:w-[50px] h-4 sm:h-0"></div>

            {/* Text Container */}
            <div
              className="w-full sm:w-[680px] h-auto sm:h-[226px] flex flex-col justify-center text-left p-4 rounded"
              style={{ marginTop: "42.63px", marginBottom: "42.63px" }}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "40px",
                  lineHeight: "48.76px",
                  letterSpacing: "0%",
                }}
              >
                Thermal Grades
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
                Founded with a vision to revolutionize industrial material <br></br>applications, URR Manufacturing has become a leader in <br></br>the synthesis of high-quality lab-grown diamonds. We <br></br>leverage advanced technological processes to grow, cut, <br></br>and polish diamonds that set industry benchmarks for <br></br>thermal conductivity and durability.
              </p>
            </div>
          </div>
        </div>

        {/* Another Main Container */}
        <div
          className="mt-[63px] mx-auto w-full sm:w-[1327.81px] h-auto sm:h-[367.25px] flex flex-col sm:flex-row items-center justify-center rounded-[50px] group"
          style={{ backgroundColor: 4 % 2 !== 0 ? "#E0E0E1" : "white" }} // Even index (4) gets white
        >
          {/* Inner Content Container */}
          <div className="w-full sm:w-[1249.81px] h-auto sm:h-[311.25px] flex flex-col sm:flex-row justify-between p-4 sm:p-0">
            {/* Text Container */}
            <div
              className="w-full sm:w-[680px] h-auto sm:h-[226px] flex flex-col justify-center text-left p-4 rounded"
              style={{ marginTop: "42.63px", marginBottom: "42.63px" }}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "40px",
                  lineHeight: "48.76px",
                  letterSpacing: "0%",
                }}
              >
                Why Connect With Us?
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
                Founded with a vision to revolutionize industrial material <br></br>applications, URR Manufacturing has become a leader in <br></br>the synthesis of high-quality lab-grown diamonds. We <br></br>leverage advanced technological processes to grow, cut, <br></br>and polish diamonds that set industry benchmarks for <br></br>thermal conductivity and durability.
              </p>
            </div>

            {/* Gap between Text and Image */}
            <div className="w-0 sm:w-[50px] h-4 sm:h-0"></div>

            {/* Image */}
            <div className="w-full sm:w-[519.81px] h-[311.25px] rounded-[59.25px] overflow-hidden">
              <img
                src={SCcvd4}
                alt="SCcvd4"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-125" // Deep zoom effect
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_crystal;