import axios from "axios";

const API = "hhhtps:";

export const getAllConsultants = async () => {
  try {
    const response = await axios.get("");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Failed to fetch consultants",
      );
    }
  }
};
export const getConsultantById = async (id) => {
  try {
    const response = await axios.get(`${API}/consultants/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Failed to fetch consultant",
      );
    }
  }
};

export const createEmployer = async (user) => {
  try {
    const response = await axios.post("", user);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Failed to create employer",
      );
    }
  }
};

export const getAllPlacements = async () => {
  try {
    const response = await axios.get("");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Failed to fetch placements",
      );
    }
  }
};

export const getPlacementById = async (id) => {
  try {
    const response = await axios.get(`${API}/placements/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Failed to fetch placement",
      );
    }
  }
};