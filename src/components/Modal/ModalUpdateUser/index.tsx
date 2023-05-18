import { ModalUpdateUserStyle } from "./style"
import noPhoto from "../../../assets/nophoto.png"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/ContactContext";
import { useContext, useEffect, useRef, useState } from "react";
import { IUpdateUser } from "../../../interfaces/user.interfaces";
import { formUpdateSchema } from "../../../schemas/user.schemas";
import { AccessContext } from "../../../contexts/AccessContext";

const ModalUpdateUser = () => {
    const {UpdateUser, modalUpdateUser, setModalUpdateUser, deleteUser, confirmLoadingButton, setConfirmLoadingButton, deleteLoadingButton, setDeleteLoadingButton, infoUser, setFileProfileImage, fileProfileImage, updateProfileImage} = useContext(ContactContext)
    const {formatCellInput} =  useContext(AccessContext)

    const {register, handleSubmit, setValue, formState: { errors }, reset} = useForm<IUpdateUser>({
        resolver: yupResolver(formUpdateSchema)
    });

    const onSubmit = async (data: IUpdateUser) => {
        setConfirmLoadingButton(true)

        fileProfileImage ? await updateProfileImage(data, reset) : await UpdateUser(data, reset);

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
                    <form> 
                        <img src={fileProfileImage ? URL.createObjectURL(fileProfileImage!) : infoUser?.profile_picture ? `http://localhost:8080/files/${infoUser?.profile_picture}` : noPhoto} alt="profile picture" className={infoUser?.profile_picture || fileProfileImage ? "contactImage" : "noImage"} />
                        <label htmlFor="profile-imagem" className="custom-file-upload">
                            Alterar imagem
                        </label>
                        <input className="hidden" type="file" id="profile-imagem" name="profile-imagem" accept="image/*" onChange={(e) => setFileProfileImage(e.target.files![0])}/>
                    </form>
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
                        <input defaultValue={infoUser?.cell_phone} type="text"placeholder="Digite o Telefone aqui" id="cell-update" onKeyUp={(e) => formatCellInput(e, setValue)} {...register("cell_phone")} maxLength={15}/>
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
                <span onClick={() => (setModalUpdateUser(true), setFileProfileImage(null), reset())} className="close-modal-update">X</span>
            </div>
        </ModalUpdateUserStyle>
    )
}

export default ModalUpdateUser