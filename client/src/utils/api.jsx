import axios from "axios";

const API = "server";

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

export const createEmployer = async (user) => {
  try {
    const response = await axios.post("", user);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Failed to create employer");
    }
  }
};