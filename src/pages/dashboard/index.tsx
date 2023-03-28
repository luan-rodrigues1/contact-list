import { useContext, useState } from "react"
import CardMain from "../../components/Card/CardMain"
import CardUser from "../../components/Card/CardUser"
import ListCardContacts from "../../components/Card/ListCardContacts"
import Header from "../../components/Header"
import Loading from "../../components/Loading"
import { AccessContext } from "../../contexts/AccessContext"

const Dashboard =  () => {
    const {isLoading} = useContext(AccessContext)
    return (
        <>
            {isLoading ? (
                <Loading/>
            ): 
                <> 
                    <Header/>
                    <CardMain />
                </>
            }
        </>
    )

}

export default Dashboard