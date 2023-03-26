import { RegisterSecondColumnStyle } from "./style"
import { useForm } from "react-hook-form";
import { formRegistrationSchema } from "../../../schemas/user.schemas";
import { yupResolver } from '@hookform/resolvers/yup';
import { IRegisterUser } from "../../../interfaces/user.interfaces";
import { useContext } from "react";
import { AccessContext } from "../../../contexts/AccessContext";

const RegisterSecondColumn = () => {
    const {registerUser} = useContext(AccessContext)

    const {register, handleSubmit, formState: { errors }} = useForm<IRegisterUser>({
        resolver: yupResolver(formRegistrationSchema),
    });

    return (
        <RegisterSecondColumnStyle>
            <div className="register-second">
                <h2>Crie sua conta</h2>
                <span>Preencha os campos abaixo para se cadastrar</span>
                <form onSubmit={handleSubmit(registerUser)}>
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
                        <input type="password" placeholder="Digite sua senha" id="password" {...register("password")}/>
                        <p>{errors.password?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="confirm_password">Confirmar senha</label>
                        <input type="password" placeholder="Digite sua senha novamente" id="confirm_password" {...register("confirm_password")}/>
                        <p>{errors.confirm_password?.message}</p>
                    </div>
                    <button type="submit">Cadastrar</button>  
                </form>
            </div>
        </RegisterSecondColumnStyle>
    )
}

export default RegisterSecondColumn