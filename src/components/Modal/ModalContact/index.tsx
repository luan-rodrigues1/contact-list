import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/ContactContext";
import { IUpdateContact } from "../../../interfaces/contact.interfaces";
import { formContactSchema } from "../../../schemas/contact.schemas";
import { ModalUpdateContactStyle } from "./style"

const ModalContact = () => {

    const formRefContact = useRef<HTMLFormElement>(null);

    const {UpdateContact, modalUpdateContact, setModalUpdateContact, deleteContact, selectedUser, confirmLoadingButton, deleteLoadingButton} = useContext(ContactContext)

    const {register, handleSubmit, formState: { errors }, reset} = useForm<IUpdateContact>({
        resolver: yupResolver(formContactSchema),
    });

    const defaultValues = {
        name: selectedUser?.name || '',
        email: selectedUser?.email || '',
        cell_phone: selectedUser?.cell_phone || '',
        description: selectedUser?.description || '',
    };

    const onSubmit = async (data: IUpdateContact) => {
        await UpdateContact(data);

        formRefContact.current?.reset();
    };

    return (
        <ModalUpdateContactStyle hidden={modalUpdateContact}>
            <div className="header-modal-contact">
                <div>
                    <h2>ATUALIZAR CONTATO</h2>
                    <span onClick={() => (setModalUpdateContact(true), formRefContact.current?.reset())}>X</span>
                </div>
            </div>
            <form className="from-modal-contact" onSubmit={handleSubmit(onSubmit)} ref={formRefContact}>
                <div>
                    <label htmlFor="name-contact">Nome</label>
                    <input type="text"placeholder="Digite o nome aqui" id="name-contact" {...register("name")}/>
                    <p className="erro-contact">{errors.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="email-contact">E-mal</label>
                    <input type="text"placeholder="Digite o email aqui" id="email-contact" {...register("email")}/>
                    <p className="erro-contact">{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="cell-contact">Telefone</label>
                    <input type="text"placeholder="Digite o Telefone aqui" id="cell-contact" {...register("cell_phone")}/>
                    <p className="erro-contact">{errors.cell_phone?.message}</p>
                </div>
                <div>
                    <label htmlFor="description-contact">Descrição</label>
                    <input type="text"placeholder="Digite a descrição aqui" id="description-contact" {...register("description")}/>
                    <p className="erro-contact">{errors.description?.message}</p>
                </div>
                <div className="form-contact-button">
                    {confirmLoadingButton ? 
                        <button className="button-contact-update-loading" type="submit" disabled><span className="loading"/></button>
                        :
                        <button className="button-contact-update" type="submit">Atualizar Contato</button>
                    }
                    {deleteLoadingButton ?
                        <button onClick={() => deleteContact()} className="button-contact-delete-loading" type="button" disabled><span className="loading"/></button>
                        :
                        <button onClick={() => deleteContact()} className="button-contact-delete" type="button">Deletar Contato</button>
                    }
                </div>
            </form>
        </ModalUpdateContactStyle>
    )
}

export default ModalContact