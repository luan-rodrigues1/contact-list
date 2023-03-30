import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/ContactContext";
import { ICreateContact } from "../../../interfaces/contact.interfaces";
import { formContactSchema } from "../../../schemas/contact.schemas";
import { ModalAddStyle } from "./style"

const ModalAdd = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const { CreateContact, modaladd, setModaladd, confirmLoadingButton } = useContext(ContactContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ICreateContact>({
        resolver: yupResolver(formContactSchema),
    });

    const onSubmit = (data: ICreateContact) => {
        CreateContact(data);

        formRef.current?.reset();
    };

    return (
        <ModalAddStyle hidden={modaladd}>
            <div className="header-modal-add">
                <div>
                    <h2>ADICIONAR CONTATO</h2>
                    <span onClick={() => setModaladd(true)}>X</span>
                </div>
            </div>
            <form className="from-modal-add" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                <div>
                    <label htmlFor="name-add">Nome</label>
                    <input type="text" placeholder="Digite o nome aqui" id="name-add" {...register("name")} />
                    <p className="erro-add">{errors.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="email-add">E-mal</label>
                    <input type="text" placeholder="Digite o email aqui" id="email-add" {...register("email")} />
                    <p className="erro-add">{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="cell-add">Telefone</label>
                    <input type="text" placeholder="Digite o Telefone aqui" id="cell-add" {...register("cell_phone")} />
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