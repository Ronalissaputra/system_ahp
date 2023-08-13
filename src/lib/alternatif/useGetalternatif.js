import axios from "axios";

export const useGetalternatif = async () => {
  try {
    const alternatif = await axios.get("http://localhost:8000/api/alternatif");
    return alternatif.data;
  } catch (error) {
    console.log(error);
  }
};
