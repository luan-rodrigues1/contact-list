import api from "./api";
import { IInfoUser } from "../interfaces/user.interfaces";
import { IContact } from "../interfaces/contact.interfaces";

export async function listContactsApi(): Promise<IContact[]> {
    const token = localStorage.getItem("TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.get<IContact[]>(`/contacts`);
    
    return data;
}