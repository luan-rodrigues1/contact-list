import api from "./api";
import { ILoginUser, IReturnLoginUser } from "../interfaces/user.interfaces";

export async function loginUserApi(body: ILoginUser): Promise<IReturnLoginUser> {
  const { data } = await api.post<IReturnLoginUser>(`/login`, body);

  return data;
}
