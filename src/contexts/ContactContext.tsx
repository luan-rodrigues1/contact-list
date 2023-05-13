import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IContact, ICreateContact, IUpdateContact } from "../interfaces/contact.interfaces";
import { IInfoUser, IUpdateUser } from "../interfaces/user.interfaces";
import { createContactApi } from "../services/createContactApi";
import { deleteContactApi } from "../services/deleteContactApi";
import { deleteUserApi } from "../services/deleteUserAPi";
import { infoUserApi } from "../services/infoUserApi";
import { listContactsApi, searchContactApi } from "../services/listContactsApi";
import { updateContactApi } from "../services/updateContactApi";
import { updateProfileImageApi, updateUserApi } from "../services/updateUserApi";
import { AccessContext } from "./AccessContext";
import { UseFormReset } from "react-hook-form";

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
  modalHeader: boolean
  setModalHeader: React.Dispatch<React.SetStateAction<boolean>>
  CreateContact: (data: ICreateContact, reset: UseFormReset<ICreateContact>) => Promise<void>
  UpdateContact: (data: IUpdateContact, reset: UseFormReset<IUpdateContact>) => Promise<void>
  deleteContact: () => Promise<void>
  UpdateUser: (data: IUpdateUser, reset: UseFormReset<IUpdateUser>) => Promise<void>
  deleteUser: () => Promise<void>
  contactSearch: string
  setContactSearch: React.Dispatch<React.SetStateAction<string>>
  searchContact: () => Promise<void>
  latestPolls: string[]
  setLatestPolls: React.Dispatch<React.SetStateAction<string[]>>
  activeSearch: boolean
  setActiveSearch: React.Dispatch<React.SetStateAction<boolean>>
  fileProfileImage:  Blob | MediaSource | null
  setFileProfileImage: React.Dispatch<React.SetStateAction<Blob | MediaSource | null>>
  updateProfileImage: (data: IUpdateUser, reset: UseFormReset<IUpdateUser>) => Promise<void>
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
    const [modalHeader, setModalHeader] = useState<boolean>(false)
    const [contactSearch, setContactSearch] = useState<string>("")
    const [latestPolls, setLatestPolls] = useState<string[]>([])
    const [activeSearch, setActiveSearch] = useState<boolean>(false)
    const [fileProfileImage, setFileProfileImage] = useState<Blob | MediaSource | null>(null)

    useEffect(() => {
        const fetchData = async () => {
        if (location.pathname === "/dashboard") {

            const token = window.localStorage.getItem("TOKEN");

            if (token) {
                try {
                    const data = await infoUserApi();
                    setInfoUser(data);
                    setListContacts(data.contacts)
                    setIsLoading(false)
                } catch (error) {
                    console.error(error);
                }
            } else {
                setIsLoading(true)
                navigate("/")
            }
        }
        };
        fetchData();
    }, [location]);

    const UpdateUser = async (data: IUpdateUser, reset: UseFormReset<IUpdateUser>) => {
        
        try {
            await updateUserApi(data)
            const infoUser = await infoUserApi()
            setInfoUser(infoUser)
            toast.success("Conta atualizado com sucesso!")
            setConfirmLoadingButton(false)
            setModalUpdateUser(true)
            reset()

        } catch (error: any){
            console.error(error)
            setConfirmLoadingButton(false)
            if (error.response.status === 409) {

                toast.error("já existe um usuário com essa email ou telefone")
            } else {

                toast.error("Ops! Algo deu errado")
            }
        }

    }

    const deleteUser = async () => {
        try {
            await deleteUserApi()
            toast.success("Conta deletada com sucesso!")
            window.localStorage.clear()
            setDeleteLoadingButton(false)
            setIsLoading(true)
            navigate("/")
        } catch {
            setDeleteLoadingButton(false)
            toast.error("Ops! Algo deu errado")
        }
    }

    const CreateContact = async (data: ICreateContact, reset: UseFormReset<ICreateContact>) => {
        setConfirmLoadingButton(true)

        try {
            await createContactApi(data)
            const list = await listContactsApi()
            setListContacts(list)
            toast.success("Contato cadastrado com sucesso!")
            setModaladd(true)
            setConfirmLoadingButton(false)
            reset()
        } catch (error: any) {
            if (error.response.status === 409) {

                toast.error("Já existe um contato cadastrado com esse email ou telefone")
            } else {

                toast.error("Ops! Algo deu errado")
            }
            setConfirmLoadingButton(false)
        }

    }

    const UpdateContact = async (data: IUpdateContact, reset: UseFormReset<IUpdateContact>) => {
        setConfirmLoadingButton(true)

        try {
            await updateContactApi(data, selectedUser?.id!)
            let list: IContact[] = []
            activeSearch ? list = await searchContactApi(latestPolls[0]) : list = await listContactsApi()
            setListContacts(list)
            toast.success("Contato atualizado com sucesso!")
            setModalUpdateContact(true)
            setConfirmLoadingButton(false)
            reset()

        } catch (error: any){
            console.error(error)
            if (error.response.status === 409) {

                toast.error("já existe um contato com essa email ou telefone")

            } else {

                toast.error("Ops! Algo deu errado")
            }
            setConfirmLoadingButton(false)
        }

    }

    const deleteContact = async () => {
        setDeleteLoadingButton(true)
        try {
            await deleteContactApi(selectedUser?.id!)
            let list: IContact[] = []
            activeSearch ? list = await searchContactApi(latestPolls[0]) : list = await listContactsApi()
            setListContacts(list)
            toast.success("Contato deletado com sucesso!")
            setModalUpdateContact(true)
            setDeleteLoadingButton(false)

        } catch {
            toast.error("Ops! Algo deu errado")
            setDeleteLoadingButton(false)
        }
    }

    const searchContact = async () => {

        try {
            const searchList = await searchContactApi(contactSearch)
            contactSearch.trim() === "" ? setActiveSearch(false) : setActiveSearch(true)
            contactSearch.trim() === "" ? setLatestPolls([...latestPolls]) : setLatestPolls([contactSearch, ...latestPolls])
            setListContacts(searchList)
            
        } catch (error) {
            toast.error("Ops! Algo deu errado")
        }
    }

    const updateProfileImage = async (data: IUpdateUser, reset: UseFormReset<IUpdateUser>) => {

        try {
            await updateProfileImageApi(fileProfileImage)
            setFileProfileImage(null)
            UpdateUser(data, reset)

        } catch (error) {
            toast.error("Ops! Algo deu errado")
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
            setDeleteLoadingButton,
            modalHeader,
            setModalHeader,
            contactSearch,
            setContactSearch,
            searchContact,
            latestPolls,
            setLatestPolls,
            activeSearch,
            setActiveSearch,
            fileProfileImage,
            setFileProfileImage,
            updateProfileImage
        }}>
        {children}
        </ContactContext.Provider>
    );
}