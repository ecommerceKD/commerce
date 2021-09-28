import {
    AiOutlineLike,
    GoLocation,
    AiOutlineContacts,
    FaTelegramPlane,
    AiOutlineMail,
    FaWhatsapp,
    AiOutlineFacebook,
    AiOutlineInstagram
} from "../../icons"

import './index.scss'

export default function Footer() {
    return (
        <footer id="footer-home">
            <div className="content-footer">
                <h3><AiOutlineContacts /> Contatos</h3>
                <a rel="noreferrer" href="https://wa.me/+559984657562" target="_blank"> <FaWhatsapp /> Whatsapp</a>

                <a rel="noreferrer" href="mailto:umbustores@gmail.com" target="_blank"> <AiOutlineMail /> Email</a>
                <a rel="noreferrer" href="https://t.me/edinelsonslima" target="_blank"> <FaTelegramPlane /> Telegram</a>
            </div>

            <div className="content-footer">
                <h3><AiOutlineLike /> Redes Sociais</h3>
                <a rel="noreferrer" href="https://www.instagram.com/umbu.store/" target="_blank"> <AiOutlineInstagram /> Instagram </a>
                <a rel="noreferrer" href="http://" target="_blank"> <AiOutlineFacebook /> Facebook </a>
            </div>

            <div className="content-footer">
                <h3><GoLocation /> Endereço</h3>
                <a rel="noreferrer" href="#" target="_blank">Lorem ipsum</a>
                <a rel="noreferrer" href="#" target="_blank">Lorem ipsum</a>
                <a rel="noreferrer" href="#" target="_blank">Lorem ipsum</a>
            </div>
        </footer>
    )
}