import api from "./api";
import { IInfoUser } from "../interfaces/user.interfaces";

export async function infoUserApi(): Promise<IInfoUser> {
    const token = window.localStorage.getItem("TOKEN");
    const { data } = await api.get<IInfoUser>(`/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }