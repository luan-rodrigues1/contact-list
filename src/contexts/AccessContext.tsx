import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IContact } from "../interfaces/contact.interfaces";
import { ILoginUser, IRegisterUser } from "../interfaces/user.interfaces";
import { loginUserApi } from "../services/loginUserApi";
import { registerUserApi } from "../services/registerUserApi";
import { ContactContext } from "./ContactContext";

interface IAccessProvidersProps {
  children: ReactNode;
}
export interface IAccessContext {
  switchButton: boolean
  setSwitchButton: React.Dispatch<React.SetStateAction<boolean>>
  registerUser: (data: IRegisterUser) => Promise<void>
  loginUser: (data: ILoginUser) => Promise<void>
  logoutUser: () => void
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  buttonLoading: boolean
  setButtonLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccessContext = createContext<IAccessContext>({} as IAccessContext);

export const AccessProvider = ({ children }: IAccessProvidersProps) => {

    const navigate = useNavigate();
    const [switchButton, setSwitchButton] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [buttonLoading, setButtonLoading] = useState<boolean>(true)

    const registerUser = async (data: IRegisterUser) => {
        setButtonLoading(false)
        try {
            await registerUserApi(data);
            setButtonLoading(true)
            toast.success("Conta criada com sucesso!");

        } catch (error: any) {
            console.error(error)
            if (error.response.data.message === "E-mail already registered") {
                
                toast.error("E-mail já cadastrado");
            } else if (error.response.data.message === "Cell phone already registered") {

                toast.error("Telefone já cadastrado");
            } else {

                toast.error("Ops! Algo deu errado");
            }
            setButtonLoading(true)
        }
    }

    const loginUser = async (data: ILoginUser) => {
        setButtonLoading(false)

        try {
            const {token} = await loginUserApi(data);
            window.localStorage.clear();
            window.localStorage.setItem("TOKEN", token);
            toast.success("Login realizado com sucesso!");
            navigate("/dashboard")
            setButtonLoading(true)
        } catch (error: any) {
            console.error(error)
            if (error.request.status === 403) {

                toast.error("E-mail ou senha incorretos");
            } else {

                toast.error("Ops! Algo deu errado");
            }
            setButtonLoading(true)
        }
    }

    const logoutUser = () => {
        window.localStorage.clear()
        setIsLoading(true)
        return navigate("/")
    }

  return (
    <AccessContext.Provider value={{
        switchButton,
        setSwitchButton,
        registerUser,
        loginUser,
        logoutUser,
        isLoading,
        setIsLoading,
        buttonLoading,
        setButtonLoading
    }}>
      {children}
    </AccessContext.Provider>
  );
}