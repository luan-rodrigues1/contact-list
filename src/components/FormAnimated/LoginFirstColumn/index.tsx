import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AccessContext } from "../../../contexts/AccessContext";
import { ILoginUser } from "../../../interfaces/user.interfaces";
import { formLoginSchema } from "../../../schemas/user.schemas";
import { LoginFirstColumnStyle } from "./style"
import openEye from "../../../assets/visibilityopen.png"
import openClose from "../../../assets/visibilityclose.png"

const LoginFirstColumn = () => {
    const {loginUser, buttonLoading} = useContext(AccessContext)
    const [visibilityLogin, setVisibilityLogin] = useState<boolean>(false)

    const {register, handleSubmit, formState: { errors }} = useForm<ILoginUser>({
        resolver: yupResolver(formLoginSchema),
    });

    return (
        <LoginFirstColumnStyle>
            <div className="login-first">
                <h2>Login</h2>
                <span className="instruction">Preencha os campos abaixo para para acessar sua conta</span>
                <form onSubmit={handleSubmit(loginUser)}>
                    <div>
                        <label htmlFor="email-login">E-mail</label>
                        <input type="text" placeholder="Digite seu email" id="email-login" {...register("email")}/>
                        <p>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="password-login">Senha</label>
                        <div className="input-password-login">
                            <input type={visibilityLogin ? "text" : "password"} placeholder="Digite sua senha" id="password-login" {...register("password")}/>
                            <img onClick={() => setVisibilityLogin(visibilityLogin ? false : true)} src={visibilityLogin ? openEye : openClose} alt="button visibility password" />
                        </div>
                        <p>{errors.password?.message}</p>
                    </div>
                    {buttonLoading ? 
                        <button type="submit" className="button-form-login">Entrar</button>
                        :
                        <button type="submit" className="button-loading" disabled><span className="loading"/></button>
                    }
                </form>
            </div>
        </LoginFirstColumnStyle>
    )
}

export default LoginFirstColumn