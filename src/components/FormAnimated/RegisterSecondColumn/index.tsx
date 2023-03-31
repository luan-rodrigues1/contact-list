// import { RegisterSecondColumnStyle } from "./style"
// import { useForm } from "react-hook-form";
// import { formRegistrationSchema } from "../../../schemas/user.schemas";
// import { yupResolver } from '@hookform/resolvers/yup';
// import { IRegisterUser } from "../../../interfaces/user.interfaces";
// import { useContext, useRef } from "react";
// import { AccessContext } from "../../../contexts/AccessContext";

// const RegisterSecondColumn = () => {
//     const formRefRegister = useRef<HTMLFormElement>(null);
//     const {registerUser, buttonLoading} = useContext(AccessContext)

//     const {register, handleSubmit, formState: { errors }} = useForm<IRegisterUser>({
//         resolver: yupResolver(formRegistrationSchema),
//     });

//     const onSubmit = async (data: IRegisterUser) => {
//         await registerUser(data);

//         formRefRegister.current?.reset();
//     };
    

//     return (
//         <RegisterSecondColumnStyle>
//             <div className="register-second">
//                 <h2>Crie sua conta</h2>
//                 <span>Preencha os campos abaixo para se cadastrar</span>
//                 <form onSubmit={handleSubmit(onSubmit)} ref={formRefRegister}>
//                     <div>
//                         <label htmlFor="name">Nome</label>
//                         <input type="text" placeholder="Digite seu nome" id="name" {...register("name")}/>
//                         <p>{errors.name?.message}</p>
//                     </div>
//                     <div>
//                         <label htmlFor="email">E-mail</label>
//                         <input type="text" placeholder="Digite seu email" id="email" {...register("email")}/>
//                         <p>{errors.email?.message}</p>
//                     </div>
//                     <div>
//                         <label htmlFor="cell_phone">Telefone</label>
//                         <input type="text" placeholder="Digite seu número" id="cell_phone" {...register("cell_phone")}/>
//                         <p>{errors.cell_phone?.message}</p>
//                     </div>
//                     <div>
//                         <label htmlFor="password">Senha</label>
//                         <input type="password" placeholder="Digite sua senha" id="password" {...register("password")}/>
//                         <p>{errors.password?.message}</p>
//                     </div>
//                     <div>
//                         <label htmlFor="confirm_password">Confirmar senha</label>
//                         <input type="password" placeholder="Digite sua senha novamente" id="confirm_password" {...register("confirm_password")}/>
//                         <p>{errors.confirm_password?.message}</p>
//                     </div>
//                     {buttonLoading ?
//                         <button type="submit" className="button-form-register">Cadastrar</button>   
//                     :
//                         <button type="submit" className="button-loading" disabled><span className="loading"/></button> 
//                     }
//                 </form>
//             </div>
//         </RegisterSecondColumnStyle>
//     )
// }

// export default RegisterSecondColumn


import { RegisterSecondColumnStyle } from "./style"
import { useForm } from "react-hook-form";
import { formRegistrationSchema } from "../../../schemas/user.schemas";
import { yupResolver } from '@hookform/resolvers/yup';
import { IRegisterUser } from "../../../interfaces/user.interfaces";
import { useContext, useRef, useState } from "react";
import { AccessContext } from "../../../contexts/AccessContext";
import openEye from "../../../assets/visibilityopen.png"
import openClose from "../../../assets/visibilityclose.png"

const RegisterSecondColumn = () => {
    const formRefRegister = useRef<HTMLFormElement>(null);
    const {registerUser, buttonLoading} = useContext(AccessContext)
    const [visibilityPassword, setVisibilityPassword] = useState<boolean>(false)
    const [visibilityConfirm, setVisibilityConfirm] = useState<boolean>(false)

    const {register, handleSubmit, formState: { errors }} = useForm<IRegisterUser>({
        resolver: yupResolver(formRegistrationSchema),
    });

    const onSubmit = async (data: IRegisterUser) => {
        await registerUser(data);

        formRefRegister.current?.reset();
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
                        <input type="text" placeholder="Digite seu número" id="cell_phone" {...register("cell_phone")}/>
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

