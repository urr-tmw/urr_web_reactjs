import React from 'react'
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
  "Afghanistan", "Albania","Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Austrian Empire*", "Azerbaijan",
  "Baden*", "Bahamas, The", "Bahrain", "Bangladesh", "Barbados", "Bavaria*", "Belarus", "Belgium", "Belize", "Benin (Dahomey)", "Bolivia", "Bosnia and Herzegovina",
  "Botswana", "Brazil", "Brunei", "Brunswick and Lüneburg*", "Bulgaria", "Burkina Faso (Upper Volta)", "Burma", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
  "Cayman Islands, The", "Central African Republic", "Central American Federation*", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo Free State, The*", "Cook Islands",
  "Costa Rica", "Cote d’Ivoire (Ivory Coast)", "Croatia", "Cuba", "Cyprus", "Czechia", "Czechoslovakia*", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Duchy of Parma, The*", "East Germany (German Democratic Republic)*", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
  "Ethiopia", "Federal Government of Germany (1848-49)*", "Fiji", "Finland", "France", "Gabon", "Gambia, The", "Georgia", "Germany", "Ghana", "Grand Duchy of Tuscany, The*",
  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Hanover*", "Hanseatic Republics*", "Hawaii*", "Hesse*", "Holy See", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kingdom of Serbia/Yugoslavia*", "Kiribati",
  "Korea", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Lew Chew (Loochoo)*", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mecklenburg-Schwerin*", "Mecklenburg-Strelitz*", "Mexico",
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nassau*", "Nauru", "Nepal", "Netherlands, The", "New Zealand", "Nicaragua",
  "Niger", "Nigeria", "Niue", "North German Confederation*", "North German Union*", "North Macedonia", "Norway", "Oldenburg*", "Oman", "Orange Free State*", "Pakistan",
  "Palau", "Panama", "Papal States*", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Piedmont-Sardinia*", "Poland", "Portugal", "Qatar", "Republic of Genoa*",
  "Republic of Korea (South Korea)", "Republic of the Congo", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Schaumburg-Lippe*", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands, The", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania",
  "Texas*", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Two Sicilies*", "Uganda", "Ukraine",
  "Union of Soviet Socialist Republics*", "United Arab Emirates, The", "United Kingdom, The", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Württemberg*",
  "Yemen", "Zambia", "Zimbabwe"
];
const titleOptions = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof.", "Others"];
const ContactUs = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Left Container */}
        <div className="col-lg-6 d-flex align-items-stretch">
          <div className="w-100 bg-white shadow-lg p-4 rounded-3" style={{ height: "695px", maxWidth: "695px" }}>
          <h2 className="text-[35px] font-normal text-dark text-left mt-[57px] mb-4 font-dmSerif">
  Get In Touch With Us
</h2>
            <form className="row g-3">
        {/* Full Name & Company Name */}
        <div className="col-md-6 d-flex border border-gray-600 rounded overflow-hidden">
  <select
    className="form-select border-0 border-end border-gray-600 text-center"
    style={{
      width: '90px',
      minWidth: '90px',
      padding: '0',
      appearance: 'none',
      textAlignLast: 'left',
      outline: 'none', // Removes focus outline
      boxShadow: 'none', // Prevents focus shadow in Bootstrap
    }}
  >
    {titleOptions.map((title) => (
      <option key={title} value={title}>
        {title}
      </option>
    ))}
  </select>
  <input
    type="text"
    className="form-control w-100 p-2 bg-transparent text-black placeholder-black border-0"
    placeholder="Full Name*"
    required
    style={{
      outline: 'none', // Removes focus outline
      boxShadow: 'none', // Prevents focus shadow in Bootstrap
    }}
  />
</div>



<div className="col-md-6">
  <input
    type="text"
    className="form-control"
    placeholder="Company Name"
    required
    style={{
      outline: 'none', // Removes default focus outline
      boxShadow: 'none', // Removes blue glow effect
      borderColor: '#ced4da', // Keeps Bootstrap default border color
    }}
  />
</div>


        {/* Email ID & Contact Number */}
<div className="col-md-6">
  <input
    type="email"
    className="form-control"
    placeholder="Email ID*"
    required
    style={{
      outline: 'none', // Removes default focus outline
      boxShadow: 'none', // Removes blue glow effect
      borderColor: '#ced4da', // Keeps Bootstrap default border color
    }}
  />
</div>
<div className="col-md-6">
  <input
    type="tel"
    className="form-control"
    placeholder="Contact Number*"
    required
    style={{
      outline: 'none', 
      boxShadow: 'none', 
      borderColor: '#ced4da',
    }}
  />
</div>


        {/* Location & Zip Code */}
<div className="col-md-6">
  <select
    className="form-select border border-gray-600 rounded bg-transparent text-dark"
    style={{
      outline: 'none', // Removes default focus outline
      boxShadow: 'none', // Removes blue glow effect
      borderColor: '#ced4da', // Keeps Bootstrap default border color
    }}
  >
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
    className="form-control"
    placeholder="Zip Code"
    style={{
      outline: 'none',
      boxShadow: 'none',
      borderColor: '#ced4da',
    }}
  />
</div>

        {/* Subject with Black Underline */}
        {/* <div className="col-12"> */}
        <div className="col-12">
  <div className="form-group border border-dark rounded p-3">
    {/* Subject as Heading with Black Underline */}
    <h6 className="mb-2 pb-2 text-left border-bottom border-black">Subject</h6>

    {/* Message Input */}
    <textarea
      className="form-control border-0"
      placeholder="Message"
      rows="8"
      style={{
        outline: 'none', // Removes focus outline
        boxShadow: 'none', // Removes blue glow effect
        borderColor: 'transparent', // Ensures no border color appears on focus
      }}
    ></textarea>
  </div>
</div>



{/* </div> */}

        {/* Submit Button */}
        <div className="col-12 text-end">
          <button className="btn btn-dark">Submit</button>
        </div>
      </form>
          </div>
        </div>

        {/* Right Container */}
        <div className="col-lg-6 d-flex align-items-stretch">
          <div className="w-100 bg-white shadow-lg p-4 rounded-3 d-flex flex-column" style={{ height: "695px", maxWidth: "703px" }}>
          <h2 className="text-[48px] font-normal text-dark text-center font-[DM Serif Display]">
  Our Connections
</h2>
            
            {/* Swiper Slider */}
            <div className="my-4 flex justify-center">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                loop
                className="w-100"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="d-flex justify-content-center align-items-center">
                    <img src={image} alt={`Slide ${index + 1}`} className="img-fluid rounded" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Divider */}
            <hr className="mt-4 border-2 border-dark" />

            {/* Contact Info */}
            <div className="mt-3">
            <h3 className="text-[35px] font-normal text-left font-[DM Serif Display]">
  Let’s change for a Smart World
</h3>
<p className="text-[24px] font-light text-left font-[MADE Evolve Sans] text-muted">
  Discover the future of material innovation at URR Diamond Technologies.
</p>

              <div className="d-flex flex-column flex-sm-row gap-3">
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-dark fs-5" />
                  <p className="mb-0 text-[24px] font-[MADE Evolve Sans] text-muted">Info@urr.com</p>
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

export default ContactUs
