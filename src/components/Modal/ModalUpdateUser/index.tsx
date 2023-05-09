import { ModalUpdateUserStyle } from "./style"
import noPhoto from "../../../assets/nophoto.png"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/ContactContext";
import { useContext, useEffect, useRef } from "react";
import { IUpdateUser } from "../../../interfaces/user.interfaces";
import { formUpdateSchema } from "../../../schemas/user.schemas";

const ModalUpdateUser = () => {
    const {UpdateUser, modalUpdateUser, setModalUpdateUser, deleteUser, confirmLoadingButton, setConfirmLoadingButton, deleteLoadingButton, setDeleteLoadingButton, infoUser} = useContext(ContactContext)

    const {register, handleSubmit, formState: { errors }, reset} = useForm<IUpdateUser>({
        resolver: yupResolver(formUpdateSchema)
    });

    const onSubmit = async (data: IUpdateUser) => {
        setConfirmLoadingButton(true)
        await UpdateUser(data, reset);

    };

    useEffect(() => {
        reset({
            name: infoUser?.name,
            email: infoUser?.email,
            cell_phone: infoUser?.cell_phone,
        });
    }, [infoUser]);

    return (
        <ModalUpdateUserStyle hidden={modalUpdateUser}>
            <div className="modal-update">
                <div className="header-modal-update">
                    <div>
                        <img src={noPhoto} alt="profile picture" />
                        <button>Adicionar imagem</button>
                    </div>
                </div>
                <form className="form-modal-update" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Atualizar Informações</h2>
                    <div>
                        <label htmlFor="name-update">Nome</label>
                        <input defaultValue={infoUser?.name} type="text"placeholder="Digite o nome aqui" id="name-update" {...register("name")}/>
                        <p className="erro-update">{errors.name?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="email-update">E-mal</label>
                        <input defaultValue={infoUser?.email} type="text"placeholder="Digite o email aqui" id="email-update" {...register("email")}/>
                        <p className="erro-update">{errors.email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="cell-update">Telefone</label>
                        <input defaultValue={infoUser?.cell_phone} type="text"placeholder="Digite o Telefone aqui" id="cell-update" {...register("cell_phone")}/>
                        <p className="erro-update">{errors.cell_phone?.message}</p>
                    </div>
                    <div className="form-button">
                        {deleteLoadingButton ?
                            <button type="button" className="form-button-delete-loading" disabled={true}><span className="loading"/></button>
                            :
                            <button onClick={() => (deleteUser(), setDeleteLoadingButton(true))} type="button" className="form-button-delete">Excluir conta</button>
                        }
                        {confirmLoadingButton ?
                            <button type="submit" className="form-button-update-loading" disabled={true}><span className="loading"/></button>
                            :
                            <button type="submit" className="form-button-update">Atualizar conta</button>
                        }
                    </div>
                </form>
                <span onClick={() => (setModalUpdateUser(true), reset())} className="close-modal-update">X</span>
            </div>
        </ModalUpdateUserStyle>
    )
}

export default ModalUpdateUser