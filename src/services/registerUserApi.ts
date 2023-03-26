import api from "./api";
import { IRegisterUser } from "../interfaces/user.interfaces";
import { IreturnUser } from "../interfaces/user.interfaces";

export async function postRegisterApi(body: IRegisterUser): Promise<IreturnUser> {
    const { data } = await api.post<IreturnUser>(`/users`, body);

    return data;
}