import axios from "axios";

export const usUpdatekriteria = async (id, ...data) => {
  try {
    const kriteria = await axios.patch(
      `http://localhost:8000/api/kriteria/${id}`,
      ...data
    );
    return kriteria.data;
  } catch (error) {
    console.log(error);
  }
};
