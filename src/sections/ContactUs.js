import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
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
const titleOptions = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof.", "Other"];
const ContactUs = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-[1458px] h-[695px] mx-auto px-4">

        {/* Left Container (Contact Form) */}
        <div className="w-full max-w-[695px] h-[695px] bg-white shadow-lg p-6 rounded-2xl flex items-center justify-center">
  <div
    className="w-[603.34px] h-[580.92px] bg-white shadow-md p-6 rounded-2xl"
    style={{ margin: "57px 45.66px 0 46px" }}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-left text-gray-800 mb-6">
      Get In Touch With Us
    </h2>
    <form className="space-y-4">
  {/* Row 1: Title + Full Name & Company Name */}
  <div className="grid grid-cols-2 gap-4">
  {/* Merged Title + Full Name Field with Vertical Line */}
  <div className="relative w-full flex items-center border rounded-md">
    {/* Dropdown */}
    <select className="h-full bg-transparent pl-3 pr-2 text-gray-700 focus:outline-none">
      <option>Mr.</option>
      <option>Ms.</option>
      <option>Mrs.</option>
      <option>Dr</option>
      <option>Prof</option>
      <option>Others</option>
    </select>

    {/* Vertical Line */}
    <div className="h-5 w-[1px] bg-gray-400 mx-2"></div>

    {/* Full Name Input */}
    <input
      type="text"
      placeholder="Full Name*"
      className="w-full p-3 focus:outline-none"
      required
    />
  </div>

  {/* Company Name Field */}
  <input
    type="text"
    placeholder="Company Name"
    className="w-full p-3 border rounded-md"
    required
  />
</div>

  {/* Row 2: Email ID & Contact Number */}
  <div className="grid grid-cols-2 gap-4">
    <input
      type="email"
      placeholder="Email ID*"
      className="w-full p-3 border rounded-md"
      required
    />
    <input
      type="tel"
      placeholder="Contact Number*"
      className="w-full p-3 border rounded-md"
      required
    />
  </div>

  {/* Row 3: Location & Residential/Commercial */}
  <div className="grid grid-cols-2 gap-4">
    <select className="w-full p-3 border rounded-md" required>
      <option>Location*</option>
      <option>New York</option>
      <option>Los Angeles</option>
      <option>Chicago</option>
    </select>
    <select className="w-full p-3 border rounded-md" required>
      <option>Residential/Commercial*</option>
      <option>Residential</option>
      <option>Commercial</option>
    </select>
  </div>

  {/* Row 4: Subject */}
  <input type="text" placeholder="Subject" className="w-full p-3 border rounded-md" />

  {/* Row 5: Message */}
  <textarea placeholder="Message" className="w-full p-3 border rounded-md h-24"></textarea>

  {/* Submit Button */}
  <div className="flex justify-end">
    <button className="bg-black text-white px-6 py-3 rounded-md font-semibold">
      Submit
    </button>
  </div>
</form>

  </div>
</div>


        {/* Right Container (Our Connections) */}
        <div className="w-full max-w-[703px] h-[695px] bg-white shadow-lg p-6 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-38px mb-36px">Our Connections</h2>
          
          <div className="grid grid-cols-1  mb-6">
          <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                loop
                className="w-full h-full"
              >
                {images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center"
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-2">Let’s change for a Smart World</h3>
            <p className="text-gray-600 mb-4">
              Discover the future of material innovation at URR Diamond Technologies.
            </p>
            <p className="flex items-center gap-2 text-gray-800">
              📧 <span>Info@themailwhale.in</span>
            </p>
            <p className="flex items-center gap-2 text-gray-800">
              📧 <span>Info@themailwhale.in</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs
