import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AccessContext } from "../../../contexts/AccessContext";
import { ILoginUser } from "../../../interfaces/user.interfaces";
import { formLoginSchema } from "../../../schemas/user.schemas";
import { LoginFirstColumnStyle } from "./style"

const LoginFirstColumn = () => {
    const {loginUser} = useContext(AccessContext)

    const {register, handleSubmit, formState: { errors }} = useForm<ILoginUser>({
        resolver: yupResolver(formLoginSchema),
    });

    return (
        <LoginFirstColumnStyle>
            <div className="login-first">
                <h2>Login</h2>
                <span>Preencha os campos abaixo para para acessar sua conta</span>
                <form onSubmit={handleSubmit(loginUser)}>
                    <div>
                        <label htmlFor="email-login">E-mail</label>
                        <input type="text" placeholder="Digite seu email" id="email-login" {...register("email")}/>
                        <p>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="password-login">Senha</label>
                        <input type="password" placeholder="Digite sua senha" id="password-login" {...register("password")}/>
                        <p>{errors.password?.message}</p>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </LoginFirstColumnStyle>
    )
}

export default LoginFirstColumn