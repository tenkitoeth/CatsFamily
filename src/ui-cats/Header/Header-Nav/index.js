import {React, useState} from "react";
import "./index.css";
import logoMenu from "./assets/LOGO-1024x1024.webp"
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";


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
                    <li>
                        <Link to="quienes-somos" className="a-nav-cats" 
                        onClick={() => {
                            return (
                                setHamburguer(!hamburguer),
                                setHamEffect(!hamEffect)
                            )
                        }}>
                            ¿Quiénes Somos?
                        </Link>
                    </li>

                    <li>
                        <Link to="utilidad" className="a-nav-cats"
                        onClick={() => {
                            return (
                                setHamburguer(!hamburguer),
                                setHamEffect(!hamEffect)
                            )
                        }}>
                            Utilidades
                        </Link>
                    </li>

                    <li>
                        <Link to="beneficios" className="a-nav-cats"
                        onClick={() => {
                            return (
                                setHamburguer(!hamburguer),
                                setHamEffect(!hamEffect)
                            )
                        }}>
                        Beneficios</Link>
                    </li>

                    <li>
                        <Link to="servicios" className="a-nav-cats"
                        onClick={() => {
                            return (
                                setHamburguer(!hamburguer),
                                setHamEffect(!hamEffect)
                            )
                        }}>
                        Servicios</Link>
                    </li>

                    <li>
                        <Link to="roadmap" className="a-nav-cats"
                        onClick={() => {
                            return (
                                setHamburguer(!hamburguer),
                                setHamEffect(!hamEffect)
                            )
                        }}>
                        Roadmap</Link>
                    </li>

                    <li>
                        <Link to="adquirir" className="a-nav-cats"
                        onClick={() => {
                            return (
                                setHamburguer(!hamburguer),
                                setHamEffect(!hamEffect)
                            )
                        }}>
                        Adquirir NFTs</Link>
                    </li>

                    <li>
                        <Link to="faq" className="a-nav-cats"
                        onClick={() => {
                            return (
                                setHamburguer(!hamburguer),
                                setHamEffect(!hamEffect)
                            )
                        }}>
                        FAQs</Link>
                    </li>

                    <li>
                        <Link to="contacto" className="a-nav-cats"
                        onClick={() => {
                            return (
                                setHamburguer(!hamburguer),
                                setHamEffect(!hamEffect)
                            )
                        }}>
                        Contáctanos</Link>
                    </li>

                    <li>
                        <NavLink to="https://twitter.com/CatsFamilyNFT" className="a-twitter-nav-cats" target="_blank">
                            <span>Twitter</span>
                            <i className="fa-brands fa-twitter"></i>
                        </NavLink>
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