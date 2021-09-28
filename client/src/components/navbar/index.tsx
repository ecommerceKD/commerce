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
    const [redirect, setRedirect] = useState('/login')
    const [username, setUsername] = useState('')
    const styleTitle = props.title ? "" : "none"

    const { user } = useContext(UserContext)

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

                <div className="content-buttons" id="left-buttons-bar">
                    <div id="info-user">
                        <CgProfile id="login-button-icon" />
                        <div id="content-info-user">
                            <Link id="login-link" to={redirect}>
                                {username ? username : "Entrar"}
                            </Link>
                        </div>
                    </div>
                    <button className="menu-button">
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