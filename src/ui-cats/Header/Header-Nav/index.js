import {React, useState} from "react";
import "./index.css";
import logoMenu from "./assets/LOGO-1024x1024.webp"
import MagicEden from "./assets/MagicEden.png"

function NavHeader({ menuBurguer }){
    
    const [nav , setNav] = useState(false);
    const [hamburguer, setHamburguer] = useState(false);
    const [hamEffect, setHamEffect] = useState(false)
    
    const showNavbar = () => {
        if(window.scrollY > 0){
            setNav(true)
        } else {
            setNav(false)
        }
    }


    window.addEventListener("scroll", showNavbar)

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <div className="contenedor-menu">

                <div className="logo-menu"> 
                    <a href="#">
                        <img src={logoMenu}></img>
                    </a>
                    <a href="#">
                        <p>CATS FAMILY</p>
                    </a>
                </div>

                <ul className={hamburguer ? "menu show" : "menu"}>
                    <li onClick={() => {
                        return (
                            setHamburguer(!hamburguer),
                            setHamEffect(!hamEffect)
                        )
                    }}>
                        <a className="a-nav-cats" href="../../Section-Quienes-Somos">¿Quiénes somos?</a>
                    </li>

                    <li onClick={() => {
                        return (
                            setHamburguer(!hamburguer),
                            setHamEffect(!hamEffect)
                        )
                    }}>
                        <a className="a-nav-cats" href="../../Section-Utilidades">Utilidades</a>
                    </li>

                    <li onClick={() => {
                        return (
                            setHamburguer(!hamburguer),
                            setHamEffect(!hamEffect)
                        )
                    }}>
                        <a className="a-nav-cats" href="../../Section-Beneficios">Beneficios</a>
                    </li>

                    <li onClick={() => {
                        return (
                            setHamburguer(!hamburguer),
                            setHamEffect(!hamEffect)
                        )
                    }}>
                        <a className="a-nav-cats" href="../../Section-Beneficios">Servicios</a>
                    </li>

                    <li onClick={() => {
                        return (
                            setHamburguer(!hamburguer),
                            setHamEffect(!hamEffect)
                        )
                    }}>
                        <a className="a-nav-cats" href="../../Roadmap">Roadmap</a>
                    </li>

                    <li onClick={() => {
                        return (
                            setHamburguer(!hamburguer),
                            setHamEffect(!hamEffect)
                        )
                    }}>
                        <a className="a-nav-cats" href="../../Section-Adquirir">Adquirir NFTs</a>
                    </li>

                    <li onClick={() => {
                        return (
                            setHamburguer(!hamburguer),
                            setHamEffect(!hamEffect)
                        )
                    }}>
                        <a className="a-nav-cats" href="../../Section-Questions">FAQs</a>
                    </li>

                    <li onClick={() => {
                        return (
                            setHamburguer(!hamburguer),
                            setHamEffect(!hamEffect)
                        )
                    }}>
                        <a className="a-nav-cats" href="/555Labs/#/Cats/Section-Contact">Contáctanos</a>
                    </li>

                    <li onClick={() => {
                        return (
                            setHamburguer(!hamburguer),
                            setHamEffect(!hamEffect)
                        )
                    }}>
                        <a className="a-twitter-nav-cats" href="https://twitter.com/CatsFamilyNFT" target="_blank">
                            <span>Twitter</span>
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>

                </ul>


                <div id="hamburguer" className="three col" onClick={() => {setHamburguer(!hamburguer)}}>
                    <div 
                        className={hamEffect ? 'hamburger is-active' : 'hamburger'} 
                        onClick={() => setHamEffect(!hamEffect)}
                        id="hamburger-6"
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>

            </div>
        </nav>
    ) 
}

export { NavHeader }