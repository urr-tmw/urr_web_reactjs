import logo from "../assets/footer.png";
import linkedin from "../assets/linkedin.png";
import Call from "../assets/Call.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/Youtube.png";

const Footer = () => {
  return (
    <footer
      className="w-100 position-relative text-white"
      style={{ 
        minHeight: "631px", 
        paddingTop: "210px", 
        backgroundColor: "#080D19", 
        marginTop: "1300px"
      }}
    >
      {/* White Top Container */}
      <div
        className="w-100 position-absolute top-0 bg-white"
        style={{ height: "103px", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px" }}
      ></div>

      {/* Footer Content Wrapper */}
      <div className="container position-relative pt-5">
        <div className="row justify-content-between text-center text-md-start">
          
          {/* === 1st Column: Logo & Social Media (Centered in Mobile) === */}
          <div className="col-12 col-md-3 mb-4 d-flex flex-column align-items-center text-center">
            <img 
              src={logo} 
              alt="URR Manufacturing LLP" 
              style={{ width: "190px", height: "63.34px" }} 
            />
            <h1
  className="mt-3"
  style={{
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    fontSize: "25.52px",
    lineHeight: "100%",
    letterSpacing: "-1%",
  }}
>
  URR MANUFACTURING LLP
</h1>
            <div className="d-flex justify-content-center mt-3">
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3">
    <img src={linkedin} alt="LinkedIn" width="45" height="45" />
  </a>
  <a href="tel:+16466993270" className="me-3">
    <img src={Call} alt="Call" width="45" height="45" />
  </a>
  <a href="https://wa.me/16466993270" target="_blank" rel="noopener noreferrer" className="me-3">
    <img src={whatsapp} alt="WhatsApp" width="45" height="45" />
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <img src={youtube} alt="YouTube" width="45" height="45" />
  </a>
</div>

          </div>

          {/* === 2nd Column: Explore Links === */}
<div className="col-6 col-md-2 mb-4">
  <h4 
    className="mb-3" 
    style={{
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      fontSize: "21.48px",
      lineHeight: "100%",
      letterSpacing: "0%",
    }}
  >
    Explore
  </h4>
  <ul className="list-unstyled">
    <li className="mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21.48px", lineHeight: "100%" }}>Home</li>
    <li className="mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21.48px", lineHeight: "100%" }}>About Us</li>
    <li className="mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21.48px", lineHeight: "100%" }}>Product</li>
    <li style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21.48px", lineHeight: "100%" }}>Contact Us</li>
  </ul>
</div>

          {/* === 3rd Column: Blog === */}
<div className="col-6 col-md-2 mb-4">
  <h4 
    className="mb-3" 
    style={{
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      fontSize: "21.48px",
      lineHeight: "100%",
      letterSpacing: "0%",
    }}
  >
    Blog
  </h4>
  <ul className="list-unstyled">
    <li className="mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21.48px", lineHeight: "100%" }}>Blog 1</li>
    <li className="mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21.48px", lineHeight: "100%" }}>Blog 2</li>
    <li className="mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21.48px", lineHeight: "100%" }}>Blog 3</li>
    <li style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21.48px", lineHeight: "100%" }}>Blog 4</li>
  </ul>
</div>


          {/* === 4th Column: Contact Info === */}
<div className="col-12 col-md-4 mb-4">
  <h4 
    className="mb-3" 
    style={{
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      fontSize: "21.48px",
      lineHeight: "100%",
      letterSpacing: "0%",
    }}
  >
    Contact Info
  </h4>
  <ul className="list-unstyled">
    <li className="mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21.48px", lineHeight: "100%" }}>
      Call us: +1 (646) 699 3270
    </li>
    <li style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21.48px", lineHeight: "100%" }}>
      EMAIL: umangp@urrmanufacturing.com
    </li>
  </ul>
</div>

        </div>

        {/* Copyright Section */}
        <div 
  className="text-center pt-3 mt-4" 
  style={{ 
    borderTop: "1px solid rgba(255,255,255,0.1)"
  }}
>
  <p 
    className="mb-0" 
    style={{
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      fontSize: "16.13px",
      lineHeight: "100%",
      letterSpacing: "2%",
      textAlign: "center",
    }}
  >
    © 2024 URR Manufacturing | Designed by URR
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
