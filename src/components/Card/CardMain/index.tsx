import CardUser from "../CardUser"
import ListCardContacts from "../ListCardContacts"
import { CardMainStyle } from "./style"

const CardMain = () => {
    return (
        <CardMainStyle>
            <CardUser />
            <ListCardContacts />
        </CardMainStyle>
    )   
}

export default CardMain