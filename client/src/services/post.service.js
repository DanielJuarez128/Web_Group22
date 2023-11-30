import axios from "axios";
const BASE_URL = "http://localhost:3001/api/v1"; //link de api... cuando lo tenga

//publicar algo = newPosts
export const newPost = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/*nombre en la api de post*`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      return response.data;
    } catch (error) {
      console.error("Error al realizar la petición:", error);
      throw new Error(
        "Error occurred while creating the movie. Please try again."
      );
    }
  };