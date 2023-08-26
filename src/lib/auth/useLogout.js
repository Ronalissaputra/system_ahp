import axios from "axios";

export const useLogout = async () => {
  try {
    const logout = await axios.delete(`http://localhost:8000/api/auth`);
    return logout.data;
  } catch (error) {
    throw error;
  }
};
