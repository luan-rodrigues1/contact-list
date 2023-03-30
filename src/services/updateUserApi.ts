import api from "./api";
import { IContact, IUpdateContact } from "../interfaces/contact.interfaces";

export async function updateUserApi(body: IUpdateContact): Promise<IContact> {
    const token = localStorage.getItem("TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.patch<IContact>(`/users`, body);

    return data;
}