import axios from "axios";

export const usGetkriteriabyid = async (id) => {
  try {
    const kriteria = await axios.get(
      `http://localhost:8000/api/kriteria/${id}`
    );
    return kriteria.data;
  } catch (error) {
    console.log(error);
  }
};
