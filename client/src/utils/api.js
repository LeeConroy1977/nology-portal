import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getAllConsultants = async () => {
  try {
    const response = await axios.get(`${API}/consultants`);
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
  console.log("API user", user);
  try {
    const response = await axios.post(`${API}/users`, user);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      throw new Error(
        error.response?.data?.message || "Failed to create employer",
      );
    }

    throw new Error("An unexpected error occurred while creating employer");
  }
};

export const createPlacementList = async (id, consultants) => {
  try {
    console.log("create placement ran!!");
    const response = await axios.post(
      `${API}/users/${id}/view-selections`,
      consultants,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Failed to create placements",
      );
    }
  }
};

export const getAllPlacements = async () => {
  try {
    const response = await axios.get(`${API}/placements`);
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
