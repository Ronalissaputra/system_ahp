import axios from "axios";

export const useDeletekriteria = async (id) => {
  try {
    const kriteria = await axios.delete(
      `http://localhost:8000/api/kriteria/${id}`
    );
    return kriteria.data;
  } catch (error) {
    console.log(error);
  }
};
