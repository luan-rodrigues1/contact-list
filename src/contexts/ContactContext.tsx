import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IInfoUser } from "../interfaces/user.interfaces";
import { infoUserApi } from "../services/infoUserApi";
import { AccessContext } from "./AccessContext";

interface IContactProvidersProps {
  children: ReactNode;
}
export interface IContactContext {
    infoUser: IInfoUser | null
    setInfoUser: React.Dispatch<React.SetStateAction<IInfoUser | null>>

}

export const ContactContext = createContext<IContactContext>({} as IContactContext);

export const ContactProvider = ({ children }: IContactProvidersProps) => {

  const navigate = useNavigate();
  const location = useLocation();
  const [infoUser, setInfoUser] = useState<IInfoUser | null>(null);
  const {setIsLoading} = useContext(AccessContext)

  useEffect(() => {
    const fetchData = async () => {
      if (location.pathname === "/dashboard") {
          const token = window.localStorage.getItem("TOKEN");
          if (token !== null) {
            try {
                const data = await infoUserApi();
                setInfoUser(data);
                setIsLoading(false)
            } catch (error) {
                console.error(error);
            }
          }else {
            navigate("/")
          }
        }
    };
    fetchData();
  }, [location]);



  return (
    <ContactContext.Provider value={{
        infoUser,
        setInfoUser
    }}>
      {children}
    </ContactContext.Provider>
  );
}