import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faRocket, faScaleBalanced, faBook, faUserTie, faChartLine } from '@fortawesome/free-solid-svg-icons';

function SectionServicesLabs() {
    return (
        <section id="services" className="section-services-labs">

            <div className="container-uno-services-labs">
                <h2 className="h2-services-labs">¿Quieres lanzar tu propio proyecto NFT?</h2>
                <p className="p-services-labs">Estás en el lugar correcto. En 555 LABS nos encargamos de guiarte en todo el proceso de creación de una colección de NFTs de principio a fin, ofreciendo diferentes servicios.</p>
            </div>

            <div className="container-dos-services-labs">
                <h1 className="h1-services-labs">Servicios que ofrecemos desde 555 LABS</h1>
            </div>

            <div className="container-tres-services-labs">

                <div className="article-container-tres-services-labs uno">
                    <FontAwesomeIcon icon={faLightbulb} className="icono-services"/>
                    <h3 className="h3-article-services-labs">Creación de la colección desde 0</h3>
                    <p className="p-article-services-labs">Seguimiento del proyecto, creación del arte de la colección, generación de la metadata de cada NFT.</p>
                </div>

                <div className="article-container-tres-services-labs dos" >
                    <FontAwesomeIcon icon={faRocket} className="icono-services"/>
                    <h3 className="h3-article-services-labs">Lanzamiento de la colección</h3>
                    <p className="p-article-services-labs p-dos">Creación y ayuda con la gestión de las redes sociales y el marketing de las mismas, creación de la comunidad de discord, lanzamiento de la colección en launchpad</p>
                </div>

                <div className="article-container-tres-services-labs tres">
                    <FontAwesomeIcon icon={faScaleBalanced} className="icono-services"/>
                    <h3 className="h3-article-services-labs">Estudio jurídico y asesoramiento</h3>
                    <p className="p-article-services-labs">Estudio jurídico del proyecto y asesoramiento completo desde el principio del proyecto hasta su lanzamiento (Regularización legal).</p>
                </div>

                <div className="article-container-tres-services-labs cuatro" >
                    <FontAwesomeIcon icon={faBook} className="icono-services"/>
                    <h3 className="h3-article-services-labs revision">Revisión de documentos</h3>
                    <p className="p-article-services-labs">Se revisarán todos los documentos solicitados (whitepaper, tokenomics, términos y condiciones). También ofrecemos la redacción de los mismos, en caso de ser necesario.</p>
                </div>

                <div className="article-container-tres-services-labs cinco" >
                    <FontAwesomeIcon icon={faUserTie} className="icono-services"/>
                    <h3 className="h3-article-services-labs">Creación de empresa</h3>
                    <p className="p-article-services-labs">Creación de empresa (en caso de solicitarlo), tanto a nivel nacional como internacional</p>
                </div>

                <div className="article-container-tres-services-labs seis" >
                    <FontAwesomeIcon icon={faChartLine} className="icono-services"/>
                    <h3 className="h3-article-services-labs">Publicidad y marketing</h3>
                    <p className="p-article-services-labs">Optimización y plan de marketing, contacto con influencers, social media, SEO, web, Ads.</p>
                </div>
            </div>

            <div className="container-cuatro-services-labs">
                <h2 className="h2-container-cuatro-services-labs">¿Estás interesado en nuestros servicios o tienes alguna duda?</h2>
                <p className="p-container-cuatro-services-labs">No dudes en <a href="mailto:kittycatssol@protonmail.com" className="btn-labs-escribirnos">ESCRIBIRNOS <i className="fa-solid fa-envelope-open-text"></i></a></p>
            </div>
        </section>
    )
}

export { SectionServicesLabs }