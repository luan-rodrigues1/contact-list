import { useContext, useState } from "react"
import { AccessContext } from "../../contexts/AccessContext"
import { HeaderStyle } from "./style"
import noPhoto from "../../assets/nophoto.png"
import arrowDown from "../../assets/arrowdown.png"
import { ContactContext } from "../../contexts/ContactContext"
import exit from "../../assets/exit.png"
import settings from "../../assets/settings.png"
import arrowUp from "../../assets/arrowup.png"

const Header = () => {

    const {logoutUser} = useContext(AccessContext)
    const {modalHeader, setModalHeader, setModalUpdateUser, infoUser} = useContext(ContactContext)

    const changeModalHeader = () => {
        if (modalHeader) {
           return setModalHeader(false)
        }

        return setModalHeader(true)
    }

    return (
        <HeaderStyle>
            <nav>
                <h1 onClick={() => location.reload()}>Contact List</h1>
                <div onClick={() => changeModalHeader()} className="box-info-user">
                    <img src={infoUser?.profile_picture !== null ? `http://localhost:8080/files/${infoUser?.profile_picture}` : noPhoto} alt="profile image" className={infoUser?.profile_picture !== null ? "contactImage" : "noImage"} />
                    <div>
                        <p>{infoUser?.name}</p>
                        <img src={modalHeader ? arrowUp : arrowDown} alt="information button" />
                    </div>
                </div>
                <div className={modalHeader ? "modal-bar-big" : "hidden"}>
                    <ul>
                        <li onClick={() => (setModalUpdateUser(false), setModalHeader(false))}>
                            <img src={settings} alt="settings" />
                            <p>Configurações</p>
                        </li>
                        <li onClick={() => (logoutUser(), setModalHeader(false))}>
                            <img src={exit} alt="exit" />
                            <p>Sair</p>
                        </li>
                    </ul>
                </div>
            </nav>
                <div className={modalHeader ? "modal-bar" : "hidden" }>
                    <ul>
                        <li onClick={() => (setModalUpdateUser(false), setModalHeader(false))}>
                            <img src={settings} alt="settings" />
                            <p>Configurações</p>
                        </li>
                        <li onClick={() => (logoutUser(), setModalHeader(false))}>
                            <img src={exit} alt="exit" />
                            <p>Sair</p>
                        </li>
                    </ul>
                </div>
        </HeaderStyle>
    )
}

export default Header