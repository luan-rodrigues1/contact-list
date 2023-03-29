import { ModalAddStyle } from "./style"

const ModalAdd = () => {
    return (
        <ModalAddStyle hidden={true}>
            <div className="header-modal-add">
                <div>
                    <h2>ADICIONAR CONTATO</h2>
                    <span>X</span>
                </div>
            </div>
            <form className="from-modal-add">
                <div>
                    <label htmlFor="name-add">Nome</label>
                    <input type="text"placeholder="Digite o nome aqui" id="name-add"/>
                    <p className="erro-add">erro blá blá blá</p>
                </div>
                <div>
                    <label htmlFor="email-add">E-mal</label>
                    <input type="text"placeholder="Digite o email aqui" id="email-add"/>
                    <p className="erro-add">erro blá blá blá</p>
                </div>
                <div>
                    <label htmlFor="cell-add">Telefone</label>
                    <input type="text"placeholder="Digite o Telefone aqui" id="cell-add"/>
                    <p className="erro-add">erro blá blá blá</p>
                </div>
                <div>
                    <label htmlFor="description-add">Descrição</label>
                    <input type="text"placeholder="Digite a descrição aqui" id="description-add"/>
                    <p className="erro-add">erro blá blá blá</p>
                </div>
                <button className="button-add" type="submit">Adicionar Contato</button>
            </form>
        </ModalAddStyle>
    )
}

export default ModalAdd