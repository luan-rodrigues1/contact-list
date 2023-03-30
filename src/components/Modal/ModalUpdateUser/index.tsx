import { ModalUpdateUserStyle } from "./style"
import noPhoto from "../../../assets/nophoto.png"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/ContactContext";
import { useContext } from "react";
import { IUpdateUser } from "../../../interfaces/user.interfaces";
import { formUpdateSchema } from "../../../schemas/user.schemas";

const ModalUpdateUser = () => {

    const {UpdateUser, modalUpdateUser, setModalUpdateUser, deleteUser} = useContext(ContactContext)

    const {register, handleSubmit, formState: { errors }} = useForm<IUpdateUser>({
        resolver: yupResolver(formUpdateSchema),
    });

    return (
        <ModalUpdateUserStyle hidden={modalUpdateUser}>
            <div className="modal-update">
                <div className="header-modal-update">
                    <div>
                        <img src={noPhoto} alt="profile picture" />
                        <button>Adicionar imagem</button>
                    </div>
                </div>
                <form className="form-modal-update" onSubmit={handleSubmit(UpdateUser)}>
                    <h2>atualizar Informações</h2>
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
                        <input type="password"placeholder="Digite o Telefone aqui" id="password-update" {...register("password")}/>
                        <p className="erro-update">{errors.password?.message}</p>
                    </div>
                    <div className="form-button">
                        <button type="submit" className="form-button-update">Atualizar conta</button>
                        <button onClick={() => deleteUser()} type="button" className="form-button-delete">Excluir conta</button>
                    </div>
                </form>
                <span onClick={() => setModalUpdateUser(true)} className="close-modal-update">X</span>
            </div>
        </ModalUpdateUserStyle>
    )
}

export default ModalUpdateUser