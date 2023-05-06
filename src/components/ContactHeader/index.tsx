import search from "../../assets/search.png"
import { ContactHeaderStyle } from "./style"

const ContactHeader = () => {

    return (
        <ContactHeaderStyle>
            <h2>Seus Contatos:</h2>
            <form>
                <input placeholder="Digite aqui" type="text" />
                <button className="search-button" type="submit"><img src={search} alt="search button" /></button>
                <button type="button" className="button-add">+</button>
            </form>
            <button className="floating-button-add">+</button>
        </ContactHeaderStyle>
    )

}
export default ContactHeader