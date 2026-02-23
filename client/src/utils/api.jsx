import axios from "axios";

const API = "";

export const getAllConsultants = async () => {
  try {
    const response = await axios.get("");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Failed to fetch consultants");
    }
  }
};
