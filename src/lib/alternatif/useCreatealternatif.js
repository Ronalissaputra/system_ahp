import axios from "axios";

export const useCreatealternatif = async (...data) => {
  try {
    const alternatif = await axios.post(
      "http://localhost:8000/api/alternatif",
      ...data
    );
    return alternatif.data;
  } catch (error) {
    console.log(error);
  }
};
