import api from "./api";

export async function deleteContactApi(id: string) {
    const token = localStorage.getItem("TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.delete(`/contacts/${id}`);

    return data;
}