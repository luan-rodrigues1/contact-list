import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginUser, IRegisterUser } from "../interfaces/user.interfaces";
import { postLoginApi } from "../services/loginUserApi";
import { postRegisterApi } from "../services/registerUserApi";

interface IAccessProvidersProps {
  children: ReactNode;
}
export interface IAccessContext {
  switchButton: boolean
  setSwitchButton: React.Dispatch<React.SetStateAction<boolean>>
  registerUser: (data: IRegisterUser) => Promise<void>
  loginUser: (data: ILoginUser) => Promise<void>
}

export const AccessContext = createContext<IAccessContext>({} as IAccessContext);

export const AccessProvider = ({ children }: IAccessProvidersProps) => {

  const [switchButton, setSwitchButton] = useState<boolean>(true)
  const navigate = useNavigate();

  const registerUser = async (data: IRegisterUser) => {
    // setLoadingRegistration(true)
    try {
        await postRegisterApi(data);
        toast.success("Conta criada com sucesso!");
        // setLoadingRegistration(false)
    } catch (error) {
        // toast.error("Ops! Algo deu errado");
        // setLoadingRegistration(false)
        console.error(error)
    }
  }

  const loginUser = async (data: ILoginUser) => {
    // setLoadingLogin(true)

    try {
        const {token} = await postLoginApi(data);
        toast.success("Login realizado com sucesso!");
        window.localStorage.clear();
        window.localStorage.setItem("TOKEN", token);

        // setIsLogged(loginInfo.user)
        // setLoadingLogin(false)
        navigate("/dashboard")
        console.log(token)
    } catch (error) {
        toast.error("Ops! Algo deu errado");
        // setLoadingLogin(false)
    }
  }

  return (
    <AccessContext.Provider value={{
        switchButton,
        setSwitchButton,
        registerUser,
        loginUser
    }}>
      {children}
    </AccessContext.Provider>
  );
}