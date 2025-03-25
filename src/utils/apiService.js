import axios from "axios";
// const BASE_URL = "http://10.200.39.252:8001";
// const BASE_URL = "http://3.217.136.35:8000";
const BASE_URL="https://api.urrmanufacturing.com";
// Function to fetch categories
export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/categories/`);
    console.log(response.status)
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Propagate the error to the calling function
  }
};
// Function to fetch about-us-banner(example)
// export const getAboutUsBanner = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/api/about-us-banner/`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching about-us-banner:", error);
//     throw error;
//   }
// };
// Add more API calls as needed
// Function to fetch about-us-banner(example)
export const getAboutUsOverview = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/about-us-overview/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching about-us-banner:", error);
      throw error;
    }
  };

  // Function to fetch about-us-banner(example)
export const getAboutUsCards = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/about-us-card/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching about-us-banner:", error);
      throw error;
    }
  }

  