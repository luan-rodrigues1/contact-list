import { ModalUpdateUserStyle } from "./style"
import noPhoto from "../../../assets/nophoto.png"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/ContactContext";
import { useContext, useRef, useState } from "react";
import { IUpdateUser } from "../../../interfaces/user.interfaces";
import { formUpdateSchema } from "../../../schemas/user.schemas";
import openEye from "../../../assets/visibilityopen.png"
import openClose from "../../../assets/visibilityclose.png"

const ModalUpdateUser = () => {
    const formUser = useRef<HTMLFormElement>(null);
    const [visibilityPassword, setVisibilityPassword] = useState<boolean>(false)
    const {UpdateUser, modalUpdateUser, setModalUpdateUser, deleteUser, confirmLoadingButton, deleteLoadingButton} = useContext(ContactContext)

    const {register, handleSubmit, formState: { errors }} = useForm<IUpdateUser>({
        resolver: yupResolver(formUpdateSchema),
    });

    const onSubmit = async (data: IUpdateUser) => {
        await UpdateUser(data);

        formUser.current?.reset();
    };

    return (
        <ModalUpdateUserStyle hidden={modalUpdateUser}>
            <div className="modal-update">
                <div className="header-modal-update">
                    <div>
                        <img src={noPhoto} alt="profile picture" />
                        <button>Adicionar imagem</button>
                    </div>
                </div>
                <form className="form-modal-update" onSubmit={handleSubmit(onSubmit)} ref={formUser}>
                    <h2>Atualizar Informações</h2>
                    <div>
                        <label htmlFor="name-update">Nome</label>
                        <input type="text"placeholder="Digite o nome aqui" id="name-update" {...register("name")}/>
                        <p className="erro-update">{errors.name?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="email-update">E-mal</label>
                        <input type="text"placeholder="Digite o email aqui" id="email-update" {...register("email")}/>
                        <p className="erro-update">{errors.email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="cell-update">Telefone</label>
                        <input type="text"placeholder="Digite o Telefone aqui" id="cell-update" {...register("cell_phone")}/>
                        <p className="erro-update">{errors.cell_phone?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="password-update">Password</label>
                        <div className="input-password-modal">
                            <input type={visibilityPassword ? "text" : "password"} placeholder="Digite o Telefone aqui" id="password-update" {...register("password")}/>
                            <img onClick={() => setVisibilityPassword(visibilityPassword ? false : true)} src={visibilityPassword ? openEye : openClose} alt="button password visibility" />
                        </div>
                        <p className="erro-update">{errors.password?.message}</p>
                    </div>
                    <div className="form-button">
                        {confirmLoadingButton ?
                            <button type="submit" className="form-button-update-loading" disabled><span className="loading"/></button>
                            :
                            <button type="submit" className="form-button-update">Atualizar conta</button>
                        }
                        {deleteLoadingButton ?
                            <button onClick={() => deleteUser()} type="button" className="form-button-delete-loading" disabled><span className="loading"/></button>
                            :
                            <button onClick={() => deleteUser()} type="button" className="form-button-delete">Excluir conta</button>
                        }
                    </div>
                </form>
                <span onClick={() => (setModalUpdateUser(true), formUser.current?.reset())} className="close-modal-update">X</span>
            </div>
        </ModalUpdateUserStyle>
    )
}

export default ModalUpdateUser