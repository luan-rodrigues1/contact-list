import api from "./api";
import { IContact, IUpdateContact } from "../interfaces/contact.interfaces";

export async function updateContactApi(body: IUpdateContact, id: string): Promise<IContact> {
    const token = localStorage.getItem("TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.patch<IContact>(`/contacts/${id}`, body);

    return data;
}