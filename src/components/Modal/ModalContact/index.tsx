import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/ContactContext";
import { IUpdateContact } from "../../../interfaces/contact.interfaces";
import { formContactSchema } from "../../../schemas/contact.schemas";
import { ModalUpdateContactStyle } from "./style"

const ModalContact = () => {

    const {UpdateContact} = useContext(ContactContext)

    const {register, handleSubmit, formState: { errors }} = useForm<IUpdateContact>({
        resolver: yupResolver(formContactSchema),
    });

    return (
        <ModalUpdateContactStyle hidden={true}>
            <div className="header-modal-contact">
                <div>
                    <h2>INFORMAÇÕES DO CONTATO</h2>
                    <span>X</span>
                </div>
            </div>
            <form className="from-modal-contact" onSubmit={handleSubmit(UpdateContact)}>
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
                    <button className="button-contact-update" type="submit">Atualizar Contato</button>
                    <button className="button-contact-delete" type="button">Deletar Contato</button>
                </div>
            </form>
        </ModalUpdateContactStyle>
    )
}

export default ModalContact