import { useMemo, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

import {
    RiShoppingCart2Line,
    CgProfile,
} from '../../icons'

import './index.scss'

interface InterfaceNavbar {
    title?: boolean,
}


export default function Navbar(props: InterfaceNavbar) {
    const { user } = useContext(UserContext)
    const [redirect, setRedirect] = useState('/login')
    const [username, setUsername] = useState('')
    const [contOrders, setContOrders] = useState('1')

    const styleTitle = props.title ? "" : "none"

    if (Number(contOrders) > 9) setContOrders('9+')


    useMemo(() => {
        if (user) {
            setUsername(user.nome_usuario)
            setRedirect('/profile')
        } else {
            setRedirect('/login')
        }
    }, [user])

    return (

        <nav id="navbar">
            <div id="nav">

                <h1 id="title-bar" style={{ display: styleTitle }}>UMBU</h1>

                <div className="content-buttons">
                    <div id="info-user">
                        <CgProfile id="login-button-icon" />
                        <div id="content-info-user">
                            <Link className="text-info-user" to={redirect}>
                                {username ? username : "Entrar"}
                            </Link>
                            <p className='text-info-user'>
                                Sair
                            </p>
                        </div>
                    </div>
                    <button className="car-button">
                        <span id="cont-orders">{contOrders}</span>
                        <RiShoppingCart2Line id="car-button-icon" />
                    </button>
                </div>

            </div>

            <div id="options">
                <ul id="ul-options">
                    <a href="#" className="link-options" > <li className="li-options"> Lorem Ipsum </li> </a>
                    <a href="#" className="link-options" > <li className="li-options"> Lorem Ipsum </li> </a>
                    <a href="#" className="link-options" > <li className="li-options"> Lorem Ipsum </li> </a>
                    <a href="#" className="link-options" > <li className="li-options"> Lorem Ipsum </li> </a>
                    <a href="#" className="link-options" > <li className="li-options"> Lorem Ipsum </li> </a>
                </ul>
            </div>
        </nav >
    )
}