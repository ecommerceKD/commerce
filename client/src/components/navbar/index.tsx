import {
    AiOutlineMenu,
    RiShoppingCart2Fill,
    RiShoppingCart2Line
} from '../../icons'

import './index.scss'

interface InterfaceNavbar {
    title?: boolean,
    username?: string,
}


export default function Navbar(props: InterfaceNavbar) {
    const styleTitle = props.title ? "" : "none"

    return (

        <nav id="navbar">
            <div id="nav">

                {/* <div className="content-buttons">
                    <button className="menu-button">
                        <AiOutlineMenu id="menu-button-icon" >
                        </AiOutlineMenu>
                    </button>
                </div> */}

                <h1 id="title-bar" style={{ display: styleTitle }}>UMBU</h1>

                <div className="content-buttons" id="left-buttons-bar">
                    <button className="menu-button" id="login-button">{props.username ?? "Entrar"}</button>
                    <button className="menu-button">
                        <RiShoppingCart2Line id="car-button-icon" />
                    </button>
                </div>

            </div>

            <div id="options">
                <ul id="ul-options">
                    <a href="#" className="link-options" > <li className="li-options"> novidades</li> </a>
                    <a href="#" className="link-options" > <li className="li-options"> roupas</li> </a>
                    <a href="#" className="link-options" > <li className="li-options"> blusas</li> </a>
                    <a href="#" className="link-options" > <li className="li-options"> saias</li> </a>
                    <a href="#" className="link-options" > <li className="li-options"> vestidos</li> </a>
                </ul>
            </div>
        </nav >
    )
}