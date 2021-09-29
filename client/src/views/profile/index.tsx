import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'

import { BsArrowLeft } from '../../icons'

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import InfoProfile from '../../components/infoProfile';
import CardRow from '../../components/cardRow';
import Footer from '../../components/footer';
import FormProfile from '../../components/formProfile';

import './index.scss'


export default function Profile() {
    const { user } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [option1, setOption1] = useState(false)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(true)
    const [order, setOrders] = useState({})
    const [address, setAddress] = useState({})

    function handleOption(config1: boolean, config2: boolean, config3: boolean) {
        if (config1) {
            setOption2(false)
            setOption3(false)
            if (option1) {
                setOption1(false)
            }
            return
        }

        if (config2) {
            setOption1(false)
            setOption3(false)
            if (option2) {
                setOption2(false)
            }
            return
        }

        if (config3) {
            setOption1(false)
            setOption2(false)
            if (option3) {
                setOption3(false)
            }
            return
        }
    }

    function handleOrders(qtd: number) {
        let array = []
        for (let i = 1; i <= qtd; i++) {
            array.push(
                <InfoProfile
                    order={true}
                    atributo1={"652315213-98"}
                    atributo2={"Alguma roupa ai"}
                    atributo3={"12/05/2021"}
                    atributo4={"R$50,99"}
                />
            )
        }
        setOrders(array)
    }

    function handleAddress(qtd: number) {
        let array = []
        for (let i = 1; i <= qtd; i++) {
            array.push(<InfoProfile
                order={false}
                atributo1={"Casa da fazenda"}
                atributo2={"Teresina - PI"}
                atributo3={"Rua Riachuelo, Nº520"}
                atributo4={"64018-060"}
            />)
        }
        setAddress(array)
    }

    useEffect(() => {
        handleOrders(5)
        handleAddress(6)

        if (user) setUsername(user.nome_usuario)

    }, [user])

    return (
        <>
            <Navbar title={true} />
            <Sidebar />
            <main id="main-profile">
                <div id="username-profile">
                    <Link to="/" id="back-arrow">
                        <BsArrowLeft id="back-arrow-profile" />
                    </Link>
                    <h1 id="user-profile">
                        {username}
                    </h1>
                </div>

                <section id="dados-profile">
                    <div id="options-profile">
                        <div className="content-li-profile">
                            <input
                                type="checkbox"
                                id="check-one-profile"
                                checked={option1}
                                onClick={() => {
                                    setOption1(true);
                                    handleOption(true, false, false)
                                }}
                                readOnly
                            />
                            <label htmlFor="check-one-profile">
                                Meus pedidos
                            </label>
                        </div>

                        <div className="content-li-profile">
                            <input
                                type="checkbox"
                                id="check-two-profile"
                                checked={option2}
                                onClick={() => {
                                    setOption2(true);
                                    handleOption(false, true, false)
                                }}
                                readOnly
                            />
                            <label htmlFor="check-two-profile">
                                Meus endereços
                            </label>
                        </div>

                        <div className="content-li-profile">
                            <input
                                type="checkbox"
                                id="check-three-profile"
                                checked={option3}
                                onClick={() => {
                                    setOption3(true);
                                    handleOption(false, false, true)
                                }}
                                readOnly
                            />
                            <label htmlFor="check-three-profile">
                                Meus dados
                            </label>
                        </div>
                    </div>

                    <div id="show-profile">
                        {
                            option1 ?
                                Object.values(order).map((card) => card) :
                                option2 ?
                                    Object.values(address).map((card) => card) :
                                    option3 ?
                                        <FormProfile />
                                        : <h1>Escolha uma opção</h1>
                        }
                    </div>
                </section>

                <section id="veja-mais-profile">
                    <h1>Veja mais produtos</h1>
                    <CardRow qtd={8} />
                </section>
            </main>

            <Footer />
        </>
    )
}