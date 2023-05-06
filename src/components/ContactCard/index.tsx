import noPhoto from "../../assets/nophoto.png"
import editPenWhite from "../../assets/editpenwhite.png"
import emailIcon from "../../assets/emailicon.png"
import cellIcon from "../../assets/cellicon.png"
import { ContactCardStyle } from "./style"

const ContactCard = () => {

    return (
        <ContactCardStyle>
            <li>
                <header>
                    <div className="box-contact">
                        <div className="box-info-contact">
                            <img src={noPhoto} alt="profile photo" />
                            <div className="box-description-contact">
                                <h3>Lucas Silva</h3>
                                <p>Dentista</p>
                            </div>
                        </div>
                        <button>
                            <img src={editPenWhite} alt="button edit contact" />
                        </button>
                    </div>
                </header>
                <section className="box-communication-contact">
                    <div>
                        <img src={cellIcon} alt="contact number" />
                        <span>+55 21 98888-8888</span>
                    </div>
                    <div>
                        <img src={emailIcon} alt="contact email" />
                        <span>Teste@mail.com</span>
                    </div>
                </section>
            </li>
            <li>
                <header>
                    <div className="box-contact">
                        <div className="box-info-contact">
                            <img src={noPhoto} alt="profile photo" />
                            <div className="box-description-contact">
                                <h3>Lucas Silva</h3>
                                <p>Dentista</p>
                            </div>
                        </div>
                        <button>
                            <img src={editPenWhite} alt="button edit contact" />
                        </button>
                    </div>
                </header>
                <section className="box-communication-contact">
                    <div>
                        <img src={cellIcon} alt="contact number" />
                        <span>+55 21 98888-8888</span>
                    </div>
                    <div>
                        <img src={emailIcon} alt="contact email" />
                        <span>Teste@mail.com</span>
                    </div>
                </section>
            </li>
            <li>
                <header>
                    <div className="box-contact">
                        <div className="box-info-contact">
                            <img src={noPhoto} alt="profile photo" />
                            <div className="box-description-contact">
                                <h3>Lucas Silva</h3>
                                <p>Dentista</p>
                            </div>
                        </div>
                        <button>
                            <img src={editPenWhite} alt="button edit contact" />
                        </button>
                    </div>
                </header>
                <section className="box-communication-contact">
                    <div>
                        <img src={cellIcon} alt="contact number" />
                        <span>+55 21 98888-8888</span>
                    </div>
                    <div>
                        <img src={emailIcon} alt="contact email" />
                        <span>Teste@mail.com</span>
                    </div>
                </section>
            </li>
            <li>
                <header>
                    <div className="box-contact">
                        <div className="box-info-contact">
                            <img src={noPhoto} alt="profile photo" />
                            <div className="box-description-contact">
                                <h3>Lucas Silva</h3>
                                <p>Dentista</p>
                            </div>
                        </div>
                        <button>
                            <img src={editPenWhite} alt="button edit contact" />
                        </button>
                    </div>
                </header>
                <section className="box-communication-contact">
                    <div>
                        <img src={cellIcon} alt="contact number" />
                        <span>+55 21 98888-8888</span>
                    </div>
                    <div>
                        <img src={emailIcon} alt="contact email" />
                        <span>Teste@mail.com</span>
                    </div>
                </section>
            </li>
            <li>
                <header>
                    <div className="box-contact">
                        <div className="box-info-contact">
                            <img src={noPhoto} alt="profile photo" />
                            <div className="box-description-contact">
                                <h3>Lucas Silva</h3>
                                <p>Dentista</p>
                            </div>
                        </div>
                        <button>
                            <img src={editPenWhite} alt="button edit contact" />
                        </button>
                    </div>
                </header>
                <section className="box-communication-contact">
                    <div>
                        <img src={cellIcon} alt="contact number" />
                        <span>+55 21 98888-8888</span>
                    </div>
                    <div>
                        <img src={emailIcon} alt="contact email" />
                        <span>Teste@mail.com</span>
                    </div>
                </section>
            </li>
        </ContactCardStyle>
    )

}

export default ContactCard