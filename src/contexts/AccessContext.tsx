import { ChangeEvent, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IContact } from "../interfaces/contact.interfaces";
import { ILoginUser, IRegisterUser } from "../interfaces/user.interfaces";
import { loginUserApi } from "../services/loginUserApi";
import { registerUserApi } from "../services/registerUserApi";
import { ContactContext } from "./ContactContext";
import { UseFormReset, UseFormSetValue } from "react-hook-form";

interface IAccessProvidersProps {
  children: ReactNode;
}
export interface IAccessContext {
  switchButton: boolean
  setSwitchButton: React.Dispatch<React.SetStateAction<boolean>>
  registerUser: (data: IRegisterUser, reset: UseFormReset<IRegisterUser>) => Promise<void>
  loginUser: (data: ILoginUser) => Promise<void>
  logoutUser: () => void
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  buttonLoading: boolean
  setButtonLoading: React.Dispatch<React.SetStateAction<boolean>>
  maskedValue: string
  setMaskedValue: React.Dispatch<React.SetStateAction<string>>
  formatCellInput: (e: React.FormEvent<HTMLInputElement>, valueCallback: UseFormSetValue<any>) => void
}

export const AccessContext = createContext<IAccessContext>({} as IAccessContext);

export const AccessProvider = ({ children }: IAccessProvidersProps) => {

    const navigate = useNavigate();
    const [switchButton, setSwitchButton] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [buttonLoading, setButtonLoading] = useState<boolean>(true)
    const [maskedValue, setMaskedValue] = useState<string>('')

    const registerUser = async (data: IRegisterUser, reset: UseFormReset<IRegisterUser>) => {
        setButtonLoading(false)
        try {
            await registerUserApi(data);
            setButtonLoading(true)
            toast.success("Conta criada com sucesso!");
            reset()

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

    const formatCellInput = (e: React.FormEvent<HTMLInputElement>, valueCallback: UseFormSetValue<any>) => {
        e.currentTarget.maxLength = 15
        let value = e.currentTarget.value
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
        valueCallback("cell_phone", value)

    };

    useEffect(() => {
        if (location.pathname === "/") {
            const token = window.localStorage.getItem("TOKEN");

            if (token) {
                navigate("/dashboard")
            }
        }

    }, [location])

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
        setButtonLoading,
        maskedValue,
        setMaskedValue,
        formatCellInput
    }}>
      {children}
    </AccessContext.Provider>
  );
}