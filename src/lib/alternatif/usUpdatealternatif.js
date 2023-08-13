import axios from "axios";

export const usUpdatealternatif = async (id, ...data) => {
  try {
    const alternatif = await axios.patch(
      `http://localhost:8000/api/alternatif/${id}`,
      ...data
    );
    return alternatif.data;
  } catch (error) {
    console.log(error);
  }
};
