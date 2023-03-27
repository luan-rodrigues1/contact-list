import { useContext } from "react";
import { AccessContext } from "../../../contexts/AccessContext";
import { LoginSecondColumnStyle } from "./style"

const LoginSecondColumn = () => {

    const { setSwitchButton } = useContext(AccessContext);

    return (
        <LoginSecondColumnStyle>
            <div className="login-second">
                <h1>Contact List</h1>
                <h2>Faça seu cadastro em nosso site clicando no botão abaixo</h2>
                <button onClick={() => setSwitchButton(false)}>cadastra-se</button>
            </div>
        </LoginSecondColumnStyle>
    )
}

export default LoginSecondColumn