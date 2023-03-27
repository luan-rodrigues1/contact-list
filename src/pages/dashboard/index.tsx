import { useContext, useState } from "react"
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
                    <CardUser />
                    <ListCardContacts />
                </>
            }
        </>
    )

}

export default Dashboard