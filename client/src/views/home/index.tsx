import { UserProvider } from '../../context/UserContext'

import Navbar from '../../components/navbar'
import Sidebar from "../../components/sidebar"
import CardRow from "../../components/cardRow"
import Footer from '../../components/footer'

import bannerImg from '../../assets/banners/banner.jpg'

import './index.scss'

export default function Home() {
    return (
        <UserProvider>
            <Sidebar />
            <Navbar title={false} />

            <section id="content-title-home">
                <h1 id="title-home">UMBU</h1>
            </section>

            <section id="content-banner-home">
                <img id="banner-home" src={bannerImg} alt="banner de demonstração" />
            </section>

            <section id="content-destaques-home">
                <h2 id="content-title-destaque">Destaques</h2>
                <CardRow qtd={4} />
                <CardRow qtd={4} />
            </section>

            <Footer />
        </UserProvider>
    )
}