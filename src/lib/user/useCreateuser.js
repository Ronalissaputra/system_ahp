import axios from "axios";

export const useCreateuser = async (...data) => {
  try {
    const user = await axios.post("http://localhost:8000/api/user", ...data);
    return user.data;
  } catch (error) {
    throw error;
  }
};
