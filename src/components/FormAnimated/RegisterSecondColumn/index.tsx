import { RegisterSecondColumnStyle } from "./style"
import { UseFormSetValue, useForm } from "react-hook-form";
import { formRegistrationSchema } from "../../../schemas/user.schemas";
import { yupResolver } from '@hookform/resolvers/yup';
import { IRegisterUser } from "../../../interfaces/user.interfaces";
import { useContext, useRef, useState } from "react";
import { AccessContext } from "../../../contexts/AccessContext";
import openEye from "../../../assets/visibilityopen.png"
import openClose from "../../../assets/visibilityclose.png"

const RegisterSecondColumn = () => {
    const formRefRegister = useRef<HTMLFormElement>(null);
    const {registerUser, buttonLoading, formatCellInput} = useContext(AccessContext)
    const [visibilityPassword, setVisibilityPassword] = useState<boolean>(false)
    const [visibilityConfirm, setVisibilityConfirm] = useState<boolean>(false)

    const {register, handleSubmit, reset, setValue, formState: { errors }} = useForm<IRegisterUser>({
        resolver: yupResolver(formRegistrationSchema),
    });

    const onSubmit = async (data: IRegisterUser) => {
        await registerUser(data, reset);
    };

    return (
        <RegisterSecondColumnStyle>
            <div className="register-second">
                <h2>Crie sua conta</h2>
                <span>Preencha os campos abaixo para se cadastrar</span>
                <form onSubmit={handleSubmit(onSubmit)} ref={formRefRegister}>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" placeholder="Digite seu nome" id="name" {...register("name")}/>
                        <p>{errors.name?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" placeholder="Digite seu email" id="email" {...register("email")}/>
                        <p>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="cell_phone">Telefone</label>
                        <input type="text" placeholder="Ex: (99) 99999-9999" id="cell_phone" onKeyUp={(e) => formatCellInput(e, setValue)} {...register("cell_phone")} maxLength={15}/>
                        <p>{errors.cell_phone?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <div className="input-password">
                            <input type={visibilityPassword ? "text" : "password"} placeholder="Digite sua senha" id="password" {...register("password")}/>
                            <img onClick={() => setVisibilityPassword(visibilityPassword ? false : true)} src={visibilityPassword ? openEye : openClose} alt="button visibility password" />
                        </div>
                        <p>{errors.password?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="confirm_password">Confirmar senha</label>
                        <div className="input-password">
                            <input type={visibilityConfirm ? "text" : "password"} placeholder="Digite sua senha novamente" id="confirm_password" {...register("confirm_password")}/>
                            <img onClick={() => setVisibilityConfirm(visibilityConfirm ? false : true)} src={visibilityConfirm ? openEye : openClose} alt="button visibility password" />
                        </div>
                        <p>{errors.confirm_password?.message}</p>
                    </div>
                    {buttonLoading ?
                        <button type="submit" className="button-form-register">Cadastrar</button>   
                    :
                        <button type="submit" className="button-loading" disabled><span className="loading"/></button> 
                    }
                </form>
            </div>
        </RegisterSecondColumnStyle>
    )
}

export default RegisterSecondColumn

