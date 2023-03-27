import { CardContactsStyle } from "./style"
import noPhoto from "../../../assets/nophoto.png"
import emailIcon from "../../../assets/emailicon.png"
import cellIcon from "../../../assets/cellicon.png"
import editPenWhite from "../../../assets/editpenwhite.png"
import { useContext } from "react"
import { ContactContext } from "../../../contexts/ContactContext"

const CardContacts = () => {
    const {infoUser} = useContext(ContactContext)
    return (
        <>
            {infoUser?.contacts[0] === undefined ?
            <CardContactsStyle>
                <div className="no-contacts">Nenhuma contato cadastrado</div>
            </CardContactsStyle>
        :
            <CardContactsStyle >
                {infoUser?.contacts.map(contact => {
                    return (
                        <li key={contact.id}>
                            <div className="container-card">    
                                <div>
                                    <img className="card-contact-photo" src={noPhoto} alt="contact photo" />
                                    <div>
                                        <h2>{contact.name}</h2>
                                        <span>{contact.description}</span>
                                    </div>
                                </div>
                                <section>
                                    <div>
                                        <img className="card-contact-icon"  src={cellIcon} alt="Contact cell-phone icon" />
                                        <span>{contact.email}</span>
                                    </div>
                                    <div>
                                        <img className="card-contact-icon" src={emailIcon} alt="Contact email icon" />
                                        <span>{contact.cell_phone}</span>
                                    </div>
                                </section>
                                <img className="edit-button" src={editPenWhite} alt="edit button" />
                            </div>
                        </li>
                    )
                })}
            </CardContactsStyle>
        }
        </>
    )
}

export default CardContacts