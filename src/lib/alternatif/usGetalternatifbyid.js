import axios from "axios";

export const usGetalternatifbyid = async (id) => {
  try {
    const alternatif = await axios.get(
      `http://localhost:8000/api/alternatif/${id}`
    );
    return alternatif.data;
  } catch (error) {
    console.log(error);
  }
};
