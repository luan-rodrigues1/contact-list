import { CardUserStyle } from "./style"
import noPhoto from "../../../assets/nophoto.png"
import editpen from "../../../assets/editpen.png"
import emailIcon from "../../../assets/emailblue.png"
import cellIcon from "../../../assets/cellblue.png"
import { useContext } from "react"
import { ContactContext } from "../../../contexts/ContactContext"

const CardUser = () => {

    const {infoUser} = useContext(ContactContext)

    return (
        <CardUserStyle>
            <div className="card-user">
                <img className={infoUser?.profile_picture !== null ? "photo-exist-user" : "card-user-photo"} src={infoUser?.profile_picture !== null ? infoUser?.profile_picture : noPhoto} alt="user photo" />
                <div className="card-user-name">
                    <h3>Bem-vindo(a)</h3>
                    <p>{infoUser?.name}</p>
                </div>
                <img className="card-user-edit" src={editpen} alt="edit button" />
                <section className="card-user-info">
                    <div>
                        <img src={cellIcon} alt="cell-phone icon" />
                        <span>+55 {infoUser?.cell_phone}</span>
                    </div>
                    <div>
                        <img src={emailIcon} alt="email icon" />
                        <span>{infoUser?.email}</span>
                    </div>
                </section>
            </div>
        </CardUserStyle>
    )
}

export default CardUser