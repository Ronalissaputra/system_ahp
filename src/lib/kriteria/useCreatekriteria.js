import axios from "axios";

export const useCreatekriteria = async (...data) => {
  try {
    const kriteria = await axios.post(
      "http://localhost:8000/api/kriteria",
      ...data
    );
    return kriteria.data;
  } catch (error) {
    console.log(error);
  }
};
