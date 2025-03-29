
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import img1 from "../assets/GTU1.png"; // Replace with actual image paths
import img2 from "../assets/GTU2.png";
import img3 from "../assets/GTU3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const images = [img1, img2, img3];

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Austrian Empire*", "Azerbaijan", "Baden*",
  "Bahamas, The", "Bahrain", "Bangladesh", "Barbados", "Bavaria*", "Belarus", "Belgium", "Belize", "Benin (Dahomey)", "Bolivia", "Bosnia and Herzegovina", "Botswana","Brazil",
  "Brunei", "Brunswick and Lüneburg*", "Bulgaria", "Burkina Faso (Upper Volta)", "Burma", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands, The",
  "Central African Republic", "Central American Federation*", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo Free State, The*", "Cook Islands", "Costa Rica",
  "Cote d’Ivoire (Ivory Coast)", "Croatia", "Cuba", "Cyprus", "Czechia", "Czechoslovakia*", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Duchy of Parma, The*", "East Germany (German Democratic Republic)*", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Federal Government of Germany (1848-49)*", "Fiji", "Finland", "France", "Gabon", "Gambia, The", "Georgia", "Germany", "Ghana", "Grand Duchy of Tuscany, The*", "Greece",
  "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Hanover*", "Hanseatic Republics*", "Hawaii*", "Hesse*", "Holy See", "Honduras", "Hungary", "Iceland",
  "India",  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kingdom of Serbia/Yugoslavia*", "Kiribati", "Korea",
  "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Lew Chew (Loochoo)*", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mecklenburg-Schwerin*", "Mecklenburg-Strelitz*", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nassau*", "Nauru", "Nepal", "Netherlands, The", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "Niue", "North German Confederation*", "North German Union*", "North Macedonia", "Norway", "Oldenburg*", "Oman", "Orange Free State*", "Pakistan", "Palau",
  "Panama", "Papal States*", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Piedmont-Sardinia*", "Poland", "Portugal", "Qatar", "Republic of Genoa*", "Republic of Korea (South Korea)",
  "Republic of the Congo", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Schaumburg-Lippe*", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands, The", "Somalia", "South Africa",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Texas*", "Thailand", "Timor-Leste", "Togo", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Two Sicilies*", "Uganda", "Ukraine", "Union of Soviet Socialist Republics*", "United Arab Emirates, The",
  "United Kingdom, The", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Württemberg*", "Yemen", "Zambia", "Zimbabwe",
];




const titleOptions = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof.", "Others"];


const ContactUs = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));

  }

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    alert(JSON.stringify(inputs, null, 2));
    // console.log(fullName,companyName,emailId)
    // alert(`Your customized product request has been submitted successfully ${title} ${fullName}-${companyName}-${emailId}-${contactNumber}-${country}  `);
  };

  return (
    <div className="container">
  <div className="row justify-content-center">
    {/* Left Container */}
    <div className="col-lg-6 d-flex align-items-stretch">
      <div
        className="w-100 bg-white shadow-lg p-4 rounded-3 overflow-hidden"
        style={{ minHeight: "695px", maxWidth: "695px" }}
      >
        <h2 className="text-[28px] sm:text-[32px] md:text-[35px] font-normal text-[#2A3241] text-left mt-[57px] mb-4 font-['DM_Serif_Display'] leading-[100%] align-middle break-words">
          Get In Touch With Us
        </h2>
        <form className="row g-3 flex-wrap" onSubmit={handleSubmit}>
          {/* Full Name & Company Name */}
          <div className="col-md-6 d-flex border border-gray-600 rounded overflow-hidden">
            <select
              className="form-select border-0 border-end border-gray-600 text-center"
              style={{
                width: "90px",
                minWidth: "90px",
                padding: "0",
                appearance: "none",
                textAlignLast: "left",
                outline: "none",
                boxShadow: "none",
              }}
              name="title"
              value={inputs.title || ""}
              onChange={handleChange}
            >
              {titleOptions.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="form-control w-full sm:w-1/2 p-2 bg-transparent text-black placeholder-black border-0"
              placeholder="Full Name*"
              name="fullname" 
              value={inputs.fullname || ""} 
              required
              style={{ outline: "none", boxShadow: "none" }}
              onChange={handleChange}
              // onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text" 
              className="form-control w-full"
              placeholder="Company Name"
              name="componyname" 
              value={inputs.componyname || ""} 
              onChange={handleChange}
             
              
              required
              style={{ outline: "none", boxShadow: "none", borderColor: "#ced4da" }}
              // onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          {/* Email ID & Contact Number */}
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control w-full"
              value={inputs.email || ""}
              onChange={handleChange}
              placeholder="Email ID*"
              required
              style={{ outline: "none", boxShadow: "none", borderColor: "#ced4da" }}
             
            />
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              name="contactnumber"
              value={inputs.contactnumber || ""}
              onChange={handleChange}
              className="form-control w-full"
              placeholder="Contact Number*"
              required
              style={{ outline: "none", boxShadow: "none", borderColor: "#ced4da" }}
              // onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>

          {/* Location & Zip Code */}
          <div className="col-md-6">
            <select
              className="form-select border border-gray-600 rounded bg-transparent text-dark w-full"
              name="country"
              value={inputs.country || ""}
              onChange={handleChange}
              style={{ outline: "none", boxShadow: "none", borderColor: "#ced4da" }}>

              <option value="" disabled selected>
                Country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <input
              type="text"
              name="zipcode"
              value={inputs.zipcode || ""}
              onChange={handleChange}
              className="form-control w-full"
              placeholder="Zip Code"
              style={{ outline: "none", boxShadow: "none", borderColor: "#ced4da" }}
            />
          </div>

          {/* Subject with Black Underline */}
          <div className="col-12">
            <div className="form-group border border-dark rounded p-3">
              <h6 className="mb-2 pb-2 text-left border-bottom border-black">
                Subject
              </h6>
              <textarea
                className="form-control border-0 w-full"
                placeholder="Message"
                rows="8"
                style={{ outline: "none", boxShadow: "none", borderColor: "transparent" }}
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-12 text-end">
            <button className="btn btn-dark w-full sm:w-auto">Submit</button>
          </div>
        </form>
      </div>
    </div>

    {/* Right Container */}
    <div className="col-lg-6 d-flex align-items-stretch">
      <div
        className="w-100 bg-white shadow-lg p-4 rounded-3 d-flex flex-column overflow-hidden"
        style={{ minHeight: "695px", maxWidth: "703px" }}
      >
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-normal text-[#4D4D4DAB] text-center leading-[100%] tracking-[0%] font-['DM_Serif_Display'] break-words">
          Our Connections
        </h2>

        {/* Swiper Slider */}
        <div className="my-4 flex justify-center w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="img-fluid rounded w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Divider */}
        <hr className="mt-4 border-2 border-dark" />

        {/* Contact Info */}
        <div className="mt-3">
          <h3 className="text-[28px] sm:text-[32px] md:text-[35px] font-normal text-[#080D19] text-left font-['DM_Serif_Display'] leading-[100%] align-middle break-words">
            Let’s change for a Smart World
          </h3>

          <p className="text-[24px] font-light text-left font-[MADE Evolve Sans] text-muted">
            Discover the future of material innovation at URR Diamond Technologies.
          </p>

          <div className="d-flex flex-wrap gap-3">
            <div className="d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-dark fs-5" />
              <p className="mb-0 text-[24px] font-[MADE Evolve Sans] text-muted">
                Info@urr.com
              </p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faWhatsapp} className="text-success fs-5" />
              <p className="mb-0 text-muted text-[20px] font-[MADE Evolve Sans]">
                WhatsApp: +91 98200 94971 <br /> Call: +1 (646) 699 3270
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactUs;
