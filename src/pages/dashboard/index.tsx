import { useContext, useState } from "react"
import CardMain from "../../components/Card/CardMain"
import Header from "../../components/Header"
import Loading from "../../components/Loading"
import ModalAdd from "../../components/Modal/ModalAdd"
import ModalContact from "../../components/Modal/ModalContact"
import ModalUpdateUser from "../../components/Modal/ModalUpdateUser"
import { AccessContext } from "../../contexts/AccessContext"
import ContactHeader from "../../components/ContactHeader"
import ContactCard from "../../components/ContactCard"

const Dashboard =  () => {
    const {isLoading} = useContext(AccessContext)
    return (
        <>
            {isLoading ? (
                <Loading/>
            ): 
                <> 
                    <Header/>
                    {/* <CardMain/> */}
                    <ContactHeader/>
                    <ContactCard/>
                    <ModalAdd/>
                    <ModalUpdateUser/>
                    <ModalContact/>
                </>
            }
        </>
    )

}

export default Dashboard