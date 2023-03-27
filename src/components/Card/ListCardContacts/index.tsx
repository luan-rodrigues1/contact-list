import CardContacts from "../CardContacts"
import { ListCardContactsStyle } from "./style"

const ListCardContacts = () => {
    return (
        <ListCardContactsStyle>
            <div className="header-list">
                <h2>Seus Contatos:</h2>  
                <button>+</button>
            </div>
            <CardContacts/>
        </ListCardContactsStyle>
    )
}

export default ListCardContacts