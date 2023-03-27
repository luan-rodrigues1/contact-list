import { useContext } from "react"
import { AccessContext } from "../../contexts/AccessContext"
import { HeaderStyle } from "./style"

const Header = () => {

    const {logoutUser} = useContext(AccessContext)

    return (
        <HeaderStyle>
            <nav>
                <h1>Contact List</h1>
                <button onClick={() => logoutUser()}>Sair</button>
            </nav>
        </HeaderStyle>
    )
}

export default Header