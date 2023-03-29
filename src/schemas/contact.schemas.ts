import * as yup from "yup";

export const formContactSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório").max(50, "Deve ter no máximo 50 caracteres"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    cell_phone: yup
    .string()
    .required("Telefone obrigatório")
    .matches(/^[0-9]+$/, "Deve conter apenas números")
    .max(13, "Deve ter no máximo 11 caracteres")
    .min(11, "Deve ter no mínimo 11 caracteres"),
    description: yup.string().max(30, "Deve ter no máximo 30 caracteres")
})