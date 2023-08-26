import axios from "axios";

export const useLogin = async (...data) => {
  try {
    const kriteria = await axios.post(
      "http://localhost:8000/api/auth",
      ...data
    );
    return kriteria.data;
  } catch (error) {
    throw error;
  }
};
