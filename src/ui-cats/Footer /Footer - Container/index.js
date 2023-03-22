import React from "react";
import "./index.css"
import magic from "./MagicEden.png"
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function ContainerFooter() {
    return ( 
        <div className="contenedor">
            <div className="contenido-footer">
                <div className="rrss">
                    <a href="https://twitter.com/CatsFamilyNFT" target="_blank"><i className="fa-brands fa-twitter fa-footer a-twitter-footer"></i></a>

                    <a href="https://discord.com/invite/JpfC8jRZhW" target="_blank"><i className="fa-brands fa-discord fa-footer a-discord-footer"></i></a>

                    <a href="https://magiceden.io/marketplace/daddy_cats" target="_blank"><img className="magic-eden-logo" src={magic} alt="Buy a Daddy Cat on MagicEden" /></a>

                </div>

                <div className="condiciones-legales">
                    <nav className="contenedor-nav-footer">
                        <ul>
                            <li  className="li-nav-footer">
                                <Link to="quienes-somos">¿Quiénes Somos?</Link>
                            </li>
                            
                            <li className="li-nav-footer">
                                <Link to="utilidad">Utilidades</Link>
                            </li>

                            <li className="li-nav-footer">
                                <Link to="beneficios">Beneficios</Link>
                            </li>

                            <li className="li-nav-footer">
                                <Link to="servicios">Servicios</Link>
                            </li>

                            <li className="li-nav-footer">
                                <Link to="roadmap">Roadmap</Link>
                            </li>

                            <li className="li-nav-footer">
                                <Link to="adquirir">Adquirir NFTs</Link>
                            </li>

                            <li className="li-nav-footer">
                                <Link to="faq">FAQs</Link>
                            </li>

                            <li className="li-nav-footer">
                                <Link to="contacto">Contáctanos</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="legales">
                        <a href="" className="terminos">Términos y Condiciones</a>
                        <a href="" className="privacidad">Condiciones legales y política de privacidad</a>
                        <a href="" className="cookies">Política de cookies</a>
                    </div>
                </div>

                <div className="copyright">
                    <p>© Cats Family 2022</p>
                </div>
            </div>
        </div>
    )
}

export { ContainerFooter }