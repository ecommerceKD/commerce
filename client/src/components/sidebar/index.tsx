import { useState } from 'react'
import { BiMenuAltLeft } from '../../icons'

import './index.scss'

interface SidebarInterface {
    close?: boolean;
}

export default function Sidebar(props: SidebarInterface) {
    const [closeSidebar, setCloseSidebar] = useState({})
    const [buttonMenu, setButtonMenu] = useState({})
    const [overlay, setOverlay] = useState({})

    function closeSide() {
        //Fechar sidebar
        const styleSidebar = Object.entries(closeSidebar).length
        if (styleSidebar <= 0) { setCloseSidebar({ left: "0" }); setOverlay({ display: "flex" }) }
        if (styleSidebar > 0) { setCloseSidebar({}); setOverlay({ display: "none" }) }

        //Mudar posição do botão
        const styleMenu = Object.entries(buttonMenu).length
        if (styleMenu <= 0) setButtonMenu({ marginRight: "0" })
        if (styleMenu > 0) setButtonMenu({})
        console.log(styleMenu)
    }

    return (
        <>
            <aside id="sidebar" style={closeSidebar}>
                <button id="close-sidebar" onClick={closeSide} style={buttonMenu}>
                    <BiMenuAltLeft />
                </button>
                <ul id="ul-sidebar">
                    <li className="li-sidebar"> Minha conta </li>
                    <li className="li-sidebar"> Meus Pedidos </li>
                    <li className="li-sidebar"> Rastreamento </li>
                    <li className="li-sidebar"> Fale Conosco </li>
                </ul>
            </aside>

            <div id="overlay-sidebar" onClick={closeSide} style={overlay}></div>
        </>
    )
}