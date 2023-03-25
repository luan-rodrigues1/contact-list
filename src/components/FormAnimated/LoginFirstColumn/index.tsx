import { LoginFirstColumnStyle } from "./style"

const LoginFirstColumn = () => {
    return (
        <LoginFirstColumnStyle>
            <div className="login-first">
                <h2>Login</h2>
                <span>Preencha os campos abaixo para para acessar sua conta</span>
                <form>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" placeholder="Digite seu nome" id="name-login"/>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" placeholder="Digite seu email" id="email-login"/>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" placeholder="Digite sua senha" id="password-login"/>
                    </div>
                    <button>Entrar</button>
                </form>
            </div>
        </LoginFirstColumnStyle>
    )
}

export default LoginFirstColumn