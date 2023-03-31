import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IContact, ICreateContact, IUpdateContact } from "../interfaces/contact.interfaces";
import { IInfoUser, IUpdateUser } from "../interfaces/user.interfaces";
import { createContactApi } from "../services/createContactApi";
import { deleteContactApi } from "../services/deleteContactApi";
import { deleteUserApi } from "../services/deleteUserAPi";
import { infoUserApi } from "../services/infoUserApi";
import { listContactsApi } from "../services/listContactsApi";
import { updateContactApi } from "../services/updateContactApi";
import { updateUserApi } from "../services/updateUserApi";
import { AccessContext } from "./AccessContext";

interface IContactProvidersProps {
  children: ReactNode;
}
export interface IContactContext {
  infoUser: IInfoUser | null
  setInfoUser: React.Dispatch<React.SetStateAction<IInfoUser | null>>
  listContacts: IContact[]
  setListContacts: React.Dispatch<React.SetStateAction<IContact[]>>
  selectedUser: IContact | undefined
  setSelectedUser: React.Dispatch<React.SetStateAction<IContact | undefined>>
  modalUpdateContact: boolean
  setModalUpdateContact: React.Dispatch<React.SetStateAction<boolean>>
  modalUpdateUser: boolean
  setModalUpdateUser: React.Dispatch<React.SetStateAction<boolean>>
  modaladd: boolean
  setModaladd: React.Dispatch<React.SetStateAction<boolean>>
  confirmLoadingButton: boolean
  setConfirmLoadingButton: React.Dispatch<React.SetStateAction<boolean>>
  deleteLoadingButton: boolean
  setDeleteLoadingButton: React.Dispatch<React.SetStateAction<boolean>>
  CreateContact: (data: ICreateContact) => Promise<void>
  UpdateContact: (data: IUpdateContact) => Promise<void>
  deleteContact: () => Promise<void>
  UpdateUser: (data: IUpdateUser) => Promise<void>
  deleteUser: () => Promise<void>

}

export const ContactContext = createContext<IContactContext>({} as IContactContext);

export const ContactProvider = ({ children }: IContactProvidersProps) => {

  const navigate = useNavigate();
  const location = useLocation();
  const [infoUser, setInfoUser] = useState<IInfoUser | null>(null);
  const {setIsLoading} = useContext(AccessContext)
  const [listContacts, setListContacts] = useState<IContact[]>([])
  const [selectedUser, setSelectedUser] = useState<IContact>()
  const [modaladd, setModaladd] = useState<boolean>(true)
  const [modalUpdateContact, setModalUpdateContact] = useState<boolean>(true)
  const [modalUpdateUser, setModalUpdateUser] = useState<boolean>(true)
  const [confirmLoadingButton, setConfirmLoadingButton] = useState<boolean>(false)
  const [deleteLoadingButton, setDeleteLoadingButton] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      if (location.pathname === "/dashboard") {

        const token = window.localStorage.getItem("TOKEN");

        if (token !== null) {
          try {
            const data = await infoUserApi();
            setInfoUser(data);
            setListContacts(data.contacts)
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

  const UpdateUser = async (data: IUpdateUser) => {

    try {
      await updateUserApi(data)
      const infoUser = await infoUserApi()
      setInfoUser(infoUser)
      toast.success("Conta atualizado com sucesso!")
      setModalUpdateUser(true)

    } catch {
      toast.error("Ops! Algo deu errado")
    }

  }

  const deleteUser = async () => {
    try {
      await deleteUserApi()
      toast.success("Conta deletada com sucesso!")
      window.localStorage.clear()
      setIsLoading(true)
      navigate("/")
    } catch {
      toast.error("Ops! Algo deu errado")
    }
  }

  const CreateContact = async (data: ICreateContact) => {
    setConfirmLoadingButton(true)

    try {
      await createContactApi(data)
      const list = await listContactsApi()
      setListContacts(list)
      toast.success("Contato cadastrado com sucesso!")
      setModaladd(true)
      setConfirmLoadingButton(false)

    } catch (erro) {
      toast.error("Ops! Algo deu errado")
      setConfirmLoadingButton(false)

    }

  }

  const UpdateContact = async (data: IUpdateContact) => {
    setConfirmLoadingButton(true)

    try {
      await updateContactApi(data, selectedUser?.id!)
      const list = await listContactsApi()
      setListContacts(list)
      toast.success("Contato atualizado com sucesso!")
      setModalUpdateContact(true)
      setConfirmLoadingButton(false)

    } catch {
      toast.error("Ops! Algo deu errado")
      setConfirmLoadingButton(false)
    }

  }

  const deleteContact = async () => {
    setDeleteLoadingButton(true)
    try {
      await deleteContactApi(selectedUser?.id!)
      const list = await listContactsApi()
      setListContacts(list)
      toast.success("Contato deletado com sucesso!")
      setModalUpdateContact(true)
      setDeleteLoadingButton(false)

    } catch {
      toast.error("Ops! Algo deu errado")
      setDeleteLoadingButton(false)
    }
  }

  return (
    <ContactContext.Provider value={{
        infoUser,
        setInfoUser,
        CreateContact,
        UpdateContact,
        UpdateUser,
        listContacts,
        setListContacts,
        selectedUser,
        setSelectedUser,
        modalUpdateContact,
        setModalUpdateContact,
        modalUpdateUser,
        setModalUpdateUser,
        modaladd,
        setModaladd,
        deleteContact,
        deleteUser,
        confirmLoadingButton, 
        setConfirmLoadingButton,
        deleteLoadingButton, 
        setDeleteLoadingButton
    }}>
      {children}
    </ContactContext.Provider>
  );
}