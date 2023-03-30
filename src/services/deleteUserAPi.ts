import api from "./api";

export async function deleteUserApi() {
    const token = localStorage.getItem("TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.delete(`/users`);

    return data;
}