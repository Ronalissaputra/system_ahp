import axios from "axios";
import { usGettoken } from "../token/useGettoken";

export const useGetuser = async () => {
  try {
    const { accesstoken, decoded } = await usGettoken();
    const user = await axios.get("http://localhost:8000/api/user", {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    });
    return [user.data, decoded];
  } catch (error) {
    console.log(error);
  }
};
