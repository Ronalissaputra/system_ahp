import axios from "axios";
import jwt_decode from "jwt-decode";

export const usGettoken = async () => {
  try {
    const token = await axios.get("http://localhost:8000/api/token");
    const { accesstoken } = token.data;
    const decoded = jwt_decode(accesstoken);
    return { decoded, accesstoken };
  } catch (error) {
    console.log(error);
  }
};
