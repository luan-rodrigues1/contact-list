import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/ContactContext";
import { ICreateContact } from "../../../interfaces/contact.interfaces";
import { formContactSchema } from "../../../schemas/contact.schemas";
import { ModalAddStyle } from "./style"
import { AccessContext } from "../../../contexts/AccessContext";

const ModalAdd = () => {

    const { CreateContact, modaladd, setModaladd, confirmLoadingButton } = useContext(ContactContext);
    const {formatCellInput} = useContext(AccessContext)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<ICreateContact>({
        resolver: yupResolver(formContactSchema),
    });

    const onSubmit = async (data: ICreateContact) => {
        await CreateContact(data, reset);

    };

    return (
        <ModalAddStyle hidden={modaladd}>
            <div className="header-modal-add">
                <div>
                    <h2>ADICIONAR CONTATO</h2>
                    <span onClick={() => (setModaladd(true), reset())}>X</span>
                </div>
            </div>
            <form className="from-modal-add" onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label htmlFor="name-add">Nome</label>
                    <input type="text" placeholder="Digite o nome aqui" id="name-add" {...register("name")} />
                    <p className="erro-add">{errors.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="email-add">E-mail</label>
                    <input type="text" placeholder="Digite o email aqui" id="email-add" {...register("email")} />
                    <p className="erro-add">{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="cell-add">Telefone</label>
                    <input type="text" placeholder="Digite o Telefone aqui" id="cell-add" onKeyUp={(e) => formatCellInput(e, setValue)} {...register("cell_phone")} maxLength={15}/>
                    <p className="erro-add">{errors.cell_phone?.message}</p>
                </div>
                <div>
                    <label htmlFor="description-add">Descrição</label>
                    <input type="text" placeholder="Digite a descrição aqui" id="description-add" {...register("description")} />
                    <p className="erro-add">{errors.description?.message}</p>
                </div>
                {confirmLoadingButton ? 
                    <button className="button-add-loading" type="submit" disabled><span className="loading"/></button>
                    :
                    <button className="button-add" type="submit">Adicionar Contato</button>
                }
            </form>
        </ModalAddStyle>
    );
};

export default ModalAdd