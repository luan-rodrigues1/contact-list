import { useContext } from "react"
import { ContactContext } from "../../../contexts/ContactContext"
import CardContacts from "../CardContacts"
import { ListCardContactsStyle } from "./style"

const ListCardContacts = () => {

    const { setModaladd } = useContext(ContactContext)

    return (
        <ListCardContactsStyle>
            <div className="header-list">
                <h2>Seus Contatos:</h2>  
                <button onClick={() => setModaladd(false)}>+</button>
            </div>
            <CardContacts/>
        </ListCardContactsStyle>
    )
}

export default ListCardContacts