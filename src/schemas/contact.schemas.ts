import * as yup from "yup";

export const formContactSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório").max(50, "Deve ter no máximo 50 caracteres"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    cell_phone: yup
    .string()
    .required("Telefone obrigatório")
    .matches(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Formato de telefone inválido Ex: (99) 99999-9999")
    .max(15, "Deve ter no máximo 15 caracteres")
    .min(15, "Deve ter no mínimo 15 caracteres"),
    description: yup.string().max(30, "Deve ter no máximo 30 caracteres")
})