import noPhoto from "../../assets/nophoto.png"
import editPenWhite from "../../assets/editpenwhite.png"
import emailIcon from "../../assets/emailicon.png"
import cellIcon from "../../assets/cellicon.png"
import { ContactCardStyle } from "./style"
import { useContext } from "react"
import { ContactContext } from "../../contexts/ContactContext"

const ContactCard = () => {

    const { setSelectedUser, listContacts, setModalUpdateContact, selectedUser } = useContext(ContactContext)

    return (
        <>
            {listContacts[0] === undefined ?
            <ContactCardStyle>
                <div className="no-contacts"><h2>Nenhum contato cadastrado</h2></div>
            </ContactCardStyle>
        :
            <ContactCardStyle >
                {listContacts.map(contact => {
                    return (
                        <li key={contact.id}> 
                            <header>
                                <div className="box-contact">
                                    <div className="box-info-contact">
                                        <img src={contact?.profile_picture !== null ? `http://localhost:8080/files/${contact.profile_picture}` : noPhoto} alt="profile photo" className={contact?.profile_picture !== null ? "contactImage" : "noImage"} />
                                        <div className="box-description-contact">
                                            <h3>{contact.name}</h3>
                                            <p>{contact.description}</p>
                                        </div>
                                    </div>
                                    <button>
                                        <img src={editPenWhite} alt="button edit contact" onClick={() => (setSelectedUser(contact), setModalUpdateContact(false))}/>
                                    </button>
                                </div>
                            </header>
                            <section className="box-communication-contact">
                                <div>
                                    <img src={cellIcon} alt="contact number" />
                                    <a 
                                    target="_blank" 
                                    href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(55+contact.cell_phone.replace(/\D/g, ''))}&text=${encodeURIComponent("Olá, estou vindo do site Contact List")}`}
                                    >{contact.cell_phone}</a>
                                </div>
                                <div>
                                    <img src={emailIcon} alt="contact email" />
                                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                </div>
                            </section>
                        </li>
                    )
                })}
            </ContactCardStyle>
        }
        </>
    )

}

export default ContactCard