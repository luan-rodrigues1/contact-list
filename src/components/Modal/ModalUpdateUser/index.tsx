import { ModalUpdateUserStyle } from "./style"
import noPhoto from "../../../assets/nophoto.png"

const ModalUpdateUser = () => {
    return (
        <ModalUpdateUserStyle hidden={true}>
            <div className="modal-update">
                <div className="header-modal-update">
                    <div>
                        <img src={noPhoto} alt="profile picture" />
                        <button>Adicionar imagem</button>
                    </div>
                </div>
                <form className="form-modal-update">
                    <h2>Suas Informações</h2>
                    <div>
                        <label htmlFor="name-update">Nome</label>
                        <input type="text"placeholder="Digite o nome aqui" id="name-update"/>
                        <p className="erro-update">erro blá blá blá</p>
                    </div>
                    <div>
                        <label htmlFor="email-update">E-mal</label>
                        <input type="text"placeholder="Digite o email aqui" id="email-update"/>
                        <p className="erro-update">erro blá blá blá</p>
                    </div>
                    <div>
                        <label htmlFor="cell-update">Telefone</label>
                        <input type="text"placeholder="Digite o Telefone aqui" id="cell-update"/>
                        <p className="erro-update">erro blá blá blá</p>
                    </div>
                    <div>
                        <label htmlFor="password-update">Telefone</label>
                        <input type="password"placeholder="Digite o Telefone aqui" id="password-update"/>
                        <p className="erro-update">erro blá blá blá</p>
                    </div>
                    <div className="form-button">
                        <button type="submit" className="form-button-update">Atualizar conta</button>
                        <button type="button" className="form-button-delete">Excluir conta</button>
                    </div>
                </form>
                <span className="close-modal-update">X</span>
            </div>
        </ModalUpdateUserStyle>
    )
}

export default ModalUpdateUser