import api from "./api";
import { IContact, IUpdateContact } from "../interfaces/contact.interfaces";

export async function updateUserApi(body: IUpdateContact): Promise<IContact> {
    const token = localStorage.getItem("TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.patch<IContact>(`/users`, body);

    return data;
}

export async function updateProfileImageApi (file: any): Promise<IContact> {
    const token = localStorage.getItem("TOKEN");
    const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
    };

    const formData = new FormData();
    formData.append("avatar", file);


    const { data } = await api.patch<IContact>("/users/upload", formData, {
        headers,
    });

    return data
}