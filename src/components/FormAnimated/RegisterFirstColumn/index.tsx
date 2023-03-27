import { useContext } from "react";
import { AccessContext } from "../../../contexts/AccessContext";
import { RegisterFirstColumnStyle } from "./style"

const RegisterFirstColumn = () => {

    const { setSwitchButton } = useContext(AccessContext);

    return (
        <RegisterFirstColumnStyle>
            <div className="register-first">
                <h1>Contact List</h1>
                <div>
                    <h2>Para acessar sua conta, faça o login com suas</h2>
                    <h2>informações Clicando no botão abaixo</h2>
                </div>
                <button onClick={() => setSwitchButton(true)}>Login</button>
            </div>
        </RegisterFirstColumnStyle>
    )
}

export default RegisterFirstColumn