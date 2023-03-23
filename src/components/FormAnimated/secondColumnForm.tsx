const secondColumnForm = () => {
    return (
        <div className="second-column">
            <h2>Crie sua conta</h2>
            <span>Preencha os campos abaixo para se cadastrar</span>
            <button>Cadastrar</button>
            <form>
                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome"/>
                <input type="email" placeholder="Digite seu email"/>
                <input type="text" placeholder="Digite seu número "/>
                <input type="password" placeholder="Digite sua senha"/>
                <input type="password" placeholder="Digite sua senha novamente"/>
            </form>
        </div>
    )
}

export default secondColumnForm