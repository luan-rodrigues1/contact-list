import api from "./api";
import { IContact, ICreateContact } from "../interfaces/contact.interfaces";

export async function createContactApi(body: ICreateContact): Promise<IContact> {
    const token = localStorage.getItem("TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.post<IContact>(`/contacts`, body);

    return data;
}