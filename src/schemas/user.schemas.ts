import * as yup from "yup";

export const formRegistrationSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório").max(50, "Deve ter no máximo 50 caracteres"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    cell_phone: yup
    .string()
    .required("Telefone obrigatório")
    .matches(/^[0-9]+$/, "Deve conter apenas números")
    .max(13, "Deve ter no máximo 11 caracteres")
    .min(11, "Deve ter no mínimo 11 caracteres"),
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
  .matches(/^[0-9]+$/, "Deve conter apenas números")
  .max(13, "Deve ter no máximo 11 caracteres")
  .min(11, "Deve ter no mínimo 11 caracteres"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Mínimo  de 8 caracteres")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "deve conter ao menos um caracter especial")
})

export const formLoginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
});