import { ModalUpdateContactStyle } from "./style"

const ModalContact = () => {
    return (
        <ModalUpdateContactStyle hidden={false}>
            <div className="header-modal-contact">
                <div>
                    <h2>INFORMAÇÕES DO CONTATO</h2>
                    <span>X</span>
                </div>
            </div>
            <form className="from-modal-contact">
                <div>
                    <label htmlFor="name-contact">Nome</label>
                    <input type="text"placeholder="Digite o nome aqui" id="name-contact"/>
                    <p className="erro-contact">erro blá blá blá</p>
                </div>
                <div>
                    <label htmlFor="email-contact">E-mal</label>
                    <input type="text"placeholder="Digite o email aqui" id="email-contact"/>
                    <p className="erro-contact">erro blá blá blá</p>
                </div>
                <div>
                    <label htmlFor="cell-contact">Telefone</label>
                    <input type="text"placeholder="Digite o Telefone aqui" id="cell-contact"/>
                    <p className="erro-contact">erro blá blá blá</p>
                </div>
                <div>
                    <label htmlFor="description-contact">Descrição</label>
                    <input type="text"placeholder="Digite a descrição aqui" id="description-contact"/>
                    <p className="erro-contact">erro blá blá blá</p>
                </div>
                <div className="form-contact-button">
                    <button className="button-contact-update" type="submit">Atualizar Contato</button>
                    <button className="button-contact-delete" type="submit">Deletar Contato</button>
                </div>
            </form>
        </ModalUpdateContactStyle>
    )
}

export default ModalContact