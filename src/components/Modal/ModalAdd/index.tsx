import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/ContactContext";
import { ICreateContact } from "../../../interfaces/contact.interfaces";
import { formContactSchema } from "../../../schemas/contact.schemas";
import { ModalAddStyle } from "./style"

const ModalAdd = () => {
    const {CreateContact} = useContext(ContactContext)

    const {register, handleSubmit, formState: { errors }} = useForm<ICreateContact>({
        resolver: yupResolver(formContactSchema),
    });

    return (
        <ModalAddStyle hidden={true}>
            <div className="header-modal-add">
                <div>
                    <h2>ADICIONAR CONTATO</h2>
                    <span>X</span>
                </div>
            </div>
            <form className="from-modal-add" onSubmit={handleSubmit(CreateContact)}>
                <div>
                    <label htmlFor="name-add">Nome</label>
                    <input type="text"placeholder="Digite o nome aqui" id="name-add" {...register("name")}/>
                    <p className="erro-add">{errors.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="email-add">E-mal</label>
                    <input type="text"placeholder="Digite o email aqui" id="email-add" {...register("email")}/>
                    <p className="erro-add">{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="cell-add">Telefone</label>
                    <input type="text"placeholder="Digite o Telefone aqui" id="cell-add" {...register("cell_phone")}/>
                    <p className="erro-add">{errors.cell_phone?.message}</p>
                </div>
                <div>
                    <label htmlFor="description-add">Descrição</label>
                    <input type="text"placeholder="Digite a descrição aqui" id="description-add" {...register("description")}/>
                    <p className="erro-add">{errors.description?.message}</p>
                </div>
                <button className="button-add" type="submit">Adicionar Contato</button>
            </form>
        </ModalAddStyle>
    )
}

export default ModalAdd