import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ICreateContact, IUpdateContact } from "../interfaces/contact.interfaces";
import { IInfoUser, IUpdateUser } from "../interfaces/user.interfaces";
import { infoUserApi } from "../services/infoUserApi";
import { AccessContext } from "./AccessContext";

interface IContactProvidersProps {
  children: ReactNode;
}
export interface IContactContext {
    infoUser: IInfoUser | null
    setInfoUser: React.Dispatch<React.SetStateAction<IInfoUser | null>>
    CreateContact: (data: ICreateContact) => Promise<void>
    UpdateContact: (data: IUpdateContact) => Promise<void>
    UpdateUser: (data: IUpdateUser) => Promise<void>

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
        } else {
          navigate("/")
        }
      }
    };
    fetchData();
  }, [location]);

  const CreateContact = async (data: ICreateContact) => {
    console.log(data)

  }

  const UpdateContact = async (data: IUpdateContact) => {
    console.log(data)

  }

  const UpdateUser = async (data: IUpdateUser) => {
    console.log(data)

  }



  return (
    <ContactContext.Provider value={{
        infoUser,
        setInfoUser,
        CreateContact,
        UpdateContact,
        UpdateUser
    }}>
      {children}
    </ContactContext.Provider>
  );
}