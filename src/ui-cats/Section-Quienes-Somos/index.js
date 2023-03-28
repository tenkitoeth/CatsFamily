import React from "react";
import "./index.css"

function QuienesSomosSection(){
    return (
        <section id="quienes-somos">
            <div className="contenedor">
                <div className="contenido-quienes-somos">

                    <h2><span>555</span> CATS FAMILY ÚNICOS</h2>

                    <p className="textosection1-p">Cats Family es una colección de <span className="textosection1-p--span">NFTs</span> desarrollada en la red de <span className="textosection1-p--span">Polygon</span>. Ser poseedor de al menos uno de estos artículos te da <span className="textosection1-p--span">acceso exclusivo</span> a ventajas que solo se ofrecen a los <span className="textosection1-p--span">holders</span> de la colección. Todos estos <span className="textosection1-p--span">ventajas</span> los puedes encontrar en nuestro canal oficial de comunicación, que es <span className="textosection1-p--span">Discord</span>.</p>

                    <div className="botones">
                        <a href="https://magiceden.io/marketplace/daddy_cats" target="_blank" className="btn-ghost primary" data-aos="fade-right">
                            Únete a Cats Family <i className="fa-solid fa-arrow-right-long"></i>
                        </a>

                        <a href="https://discord.com/invite/JpfC8jRZhW" target="_blank" className="btn-ghost secundary" data-aos="fade-left">
                            Discord <i className="fa-brands fa-discord"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { QuienesSomosSection }