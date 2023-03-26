import { useContext } from "react"
import { AccessContext } from "../../../contexts/AccessContext"
import LoginFirstColumn from "../LoginFirstColumn"
import LoginSecondColumn from "../LoginSecondColumn"
import RegisterFirstColumn from "../RegisterFirstColumn"
import RegisterSecondColumn from "../RegisterSecondColumn"
import { FormStyle } from "./style"

const Form = () => {
    const { switchButton } = useContext(AccessContext);

    return (
        <FormStyle>
            <section  className={switchButton ? "content-second" : "content"}>
                <div className={switchButton ? "register-form-back" : "register-form-front"}>
                    <RegisterFirstColumn/>
                    <RegisterSecondColumn/>
                </div>
                <div className={switchButton ? "login-form-front" : "login-form-back"}>
                    <LoginFirstColumn/>
                    <LoginSecondColumn/>
                </div>
            </section>
        </FormStyle>
    )
}

export default Form