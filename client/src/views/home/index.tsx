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

import Navbar from '../../components/navbar'
import Card from '../../components/card'
import Sidebar from "../../components/sidebar"

import bannerImg from '../../assets/banners/banner.jpg'
import productImg from '../../assets/product/exemplo.png'


import './index.scss'

export default function Home() {

    return (
        <>
            <Sidebar/>
            <Navbar title={false} username="Entrar" />

            <section id="content-title-home">
                <h1 id="title-home">UMBU</h1>
            </section>

            <section id="content-banner-home">
                <img id="banner-home" src={bannerImg} alt="banner de demonstração" />
            </section>

            <section id="content-destaques-home">
                <h2 id="content-title-destaque">Destaques</h2>
                <div className="content-cards-home">
                    <div className="row one">
                        <Card price={22.50} thumbnail={productImg} />
                        <Card price={22.50} thumbnail={productImg} />
                        <Card price={22.50} thumbnail={productImg} />
                        <Card price={22.50} thumbnail={productImg} />
                    </div>
                    <div className="row two">
                        <Card price={22.50} thumbnail={productImg} />
                        <Card price={22.50} thumbnail={productImg} />
                        <Card price={22.50} thumbnail={productImg} />
                        <Card price={22.50} thumbnail={productImg} />
                    </div>
                </div>
            </section>

            <footer id="footer-home">
                <div className="content-footer">
                    <h3><AiOutlineContacts /> Contatos</h3>
                    <a href="https://wa.me/+559984657562" target="_blank"> <FaWhatsapp /> Whatsapp</a>

                    <a href="mailto:umbustores@gmail.com" target="_blank"> <AiOutlineMail /> Email</a>
                    <a href="https://t.me/edinelsonslima" target="_blank"> <FaTelegramPlane /> Telegram</a>
                </div>

                <div className="content-footer">
                    <h3><AiOutlineLike /> Redes Sociais</h3>
                    <a href="https://www.instagram.com/umbu.store/" target="_blank"> <AiOutlineInstagram/> Instagram </a>
                    <a href="http://" target="_blank"> <AiOutlineFacebook/> Facebook </a>
                </div>

                <div className="content-footer">
                    <h3><GoLocation /> Endereço</h3>
                    <a href="http://" target="_blank">Lorem ipsum</a>
                    <a href="http://" target="_blank">Lorem ipsum</a>
                    <a href="http://" target="_blank">Lorem ipsum</a>
                </div>
            </footer>
        </>
    )
}