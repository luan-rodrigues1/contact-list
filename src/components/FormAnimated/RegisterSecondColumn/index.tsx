import { RegisterSecondColumnStyle } from "./style"

const RegisterSecondColumn = () => {
    return (
        <RegisterSecondColumnStyle>
            <div className="register-second">
                <h2>Crie sua conta</h2>
                <span>Preencha os campos abaixo para se cadastrar</span>
                <form>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" placeholder="Digite seu nome" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" placeholder="Digite seu email" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="cell-phone">Telefone</label>
                        <input type="text" placeholder="Digite seu número" id="cell-phone"/>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" placeholder="Digite sua senha" id="password"/>
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirmar senha</label>
                        <input type="password" placeholder="Digite sua senha novamente" id="confirm-password"/>
                    </div>
                    <button>Cadastrar</button>  
                </form>
            </div>
        </RegisterSecondColumnStyle>
    )
}

export default RegisterSecondColumn