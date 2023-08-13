import axios from "axios";

export const useGetkriteria = async () => {
  try {
    const kriteria = await axios.get("http://localhost:8000/api/kriteria");
    return kriteria.data;
  } catch (error) {
    console.log(error);
  }
};
