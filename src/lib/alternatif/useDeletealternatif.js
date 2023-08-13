import axios from "axios";

export const useDeletealternatif = async (id) => {
  try {
    const alternatif = await axios.delete(
      `http://localhost:8000/api/alternatif/${id}`
    );
    return alternatif.data;
  } catch (error) {
    console.log(error);
  }
};
