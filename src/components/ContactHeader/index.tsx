import { useContext } from "react"
import search from "../../assets/search.png"
import { ContactContext } from "../../contexts/ContactContext"
import { ContactHeaderStyle } from "./style"

const ContactHeader = () => {

    const { setModaladd, contactSearch, setContactSearch, searchContact, searchLoading, setSearchLoading } = useContext(ContactContext)
    
    return (
        <ContactHeaderStyle>
            <h2>Seus Contatos:</h2>
            <form onSubmit={(event) => (event.preventDefault(), setSearchLoading(true),searchContact())}>
                <input placeholder="Digite aqui" type="text" onChange={(event) => setContactSearch(event.target.value)}/>
                <button className="search-button" type="submit">
                    {searchLoading ? 
                        <span className="loading" />
                        :
                        <img src={search} alt="search button" />
                    }
                </button>
                <button type="button" className="button-add" onClick={() => setModaladd(false)}>+</button>
            </form>
            <button className="floating-button-add" onClick={() => setModaladd(false)}>+</button>
        </ContactHeaderStyle>
    )

}
export default ContactHeader