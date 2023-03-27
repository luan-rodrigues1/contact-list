import { CardUserStyle } from "./style"
import noPhoto from "../../../assets/nophoto.png"
import editpen from "../../../assets/editpen.png"
import { useContext } from "react"
import { ContactContext } from "../../../contexts/ContactContext"

const CardUser = () => {

    const {infoUser} = useContext(ContactContext)

    return (
        <CardUserStyle>
            <div className="card-user">
                <img className="card-user-photo" src={noPhoto} alt="user photo" />
                <div>
                    <h3>Bem-vindo(a)</h3>
                    <p>{infoUser?.name}</p>
                </div>
                <img className="card-user-edit" src={editpen} alt="edit button" />
                <section className="card-user-info">
                    <div>
                        <img src=" " alt="cell-phone icon" />
                        <span>+55 {infoUser?.cell_phone}</span>
                    </div>
                    <div>
                        <img src=" " alt="email icon" />
                        <span>+55 {infoUser?.email}</span>
                    </div>
                </section>
            </div>
        </CardUserStyle>
    )
}

export default CardUser