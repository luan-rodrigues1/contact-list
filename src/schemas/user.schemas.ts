import * as yup from "yup";

export const formRegistrationSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório").max(50, "Deve ter no máximo 50 caracteres"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    cell_phone: yup
    .string()
    .required("Telefone obrigatório")
    .matches(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Formato de telefone inválido Ex: (99) 99999-9999")
    .max(15, "Deve ter no máximo 15 caracteres")
    .min(15, "Deve ter no mínimo 15 caracteres"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo  de 8 caracteres")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/(\W)|_/, "deve conter ao menos um caracter especial"),
    confirm_password: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "confirmação de senha deve ser igual a senha"
      )
});

export const formUpdateSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório").max(50, "Deve ter no máximo 50 caracteres"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    cell_phone: yup
    .string()
    .required("Telefone obrigatório")
    .matches(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Formato de telefone inválido Ex: (99) 99999-9999")
    .max(15, "Deve ter no máximo 15 caracteres")
    .min(15, "Deve ter no mínimo 15 caracteres")
})

export const formLoginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
});