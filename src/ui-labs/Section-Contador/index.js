import {lazy, React, useEffect, useState} from "react";
// import { useObserver } from "./useObserver";
import CountUp from 'react-countup';
import './index.css'

function SectionContadorLabs() {

    // const [observer, setElements, entries] = useObserver({
    //     threshold: 0.75,
    //     root: null
    // })

    // useEffect(function() {
    //     const contador = document.querySelectorAll(".container-contador-labs")
    //     setElements(contador);
    // }, [setElements])

    // useEffect(function() {
    //     entries.forEach(entry => {
    //         if(entry.isIntersecting) {
    //             const lazyCounter = entry.target;
    //             lazyCounter.src = lazyCounter.dataset.src;
    //             lazyCounter.classList.remove("container-contador-labs");
    //             observer.unobserve(lazyCounter)
    //         }
    //     })
    // }, [entries, observer]);

    return (
        <div id="community" className="general-container-contador-labs">
            <div className="container-titulo-contador-labs">
                <h2 className="h2-contador-labs"><a className="a-555labs-h2">555 LABS</a> ha sido la empresa encargada del lanzamiento de la colección hispana más famosa,<a className="a-cats-h2" href="/dady"> Cats Family </a>, cuya valoración llegó a ser de más de 500.000 de dólares durante el año 2022</h2>
            </div>

            <div className="container-contador-labs">

                <CountUp delay={0} start={0} end={7000} duration={4} >
                    {({ countUpRef }) => (
                        <div className="container-general-twitter-contador-labs" data-aos="zoom-out-right">
                            <div className="container-titulo-twitter-contador-labs">
                                <h2 className="h2-twitter-contador-labs">TWITTER</h2>
                            </div>
                            
                            <div className="container-numero-twitter-contador-labs">
                                <div className="container-simbolo-numero">
                                    <p className="simbolo-numero-nft-contador-labs simbolo-twitter">+</p>
                                    <span ref={countUpRef} className="p-numero-contador-labs" />
                                </div>
                                <p className="p-texto-contador-labs">De seguidores en Twitter</p>
                            </div>
                        </div>
                    )}
                </CountUp>

                <CountUp start={100} end={75} delay={0} duration={4}>
                    {({ countUpRef }) => (
                        <div className="container-general-nft-contador-labs" data-aos="fade-in-up">
                            <div className="container-titulo-nft-contador-labs">
                                <h2 className="h2-nft-contador-labs">NFTs</h2>
                            </div>

                            <div className="container-numero-nft-contador-labs">
                                <div className="container-simbolo-numero">
                                    <p className="simbolo-numero-nft-contador-labs">#</p>
                                    <span ref={countUpRef} className="p-numero-contador-labs" />
                                </div>
                                <p className="p-texto-contador-labs">Nuestro ranking global</p>
                            </div>
                        </div>
                    )}
                </CountUp>

                <CountUp start={0} end={500} delay={0} duration={4}>
                    {({ countUpRef }) => (
                        <div className="container-general-discord-contador-labs" data-aos="zoom-out-left">
                            <div className="container-titulo-discord-contador-labs">
                                <h2 className="h2-discord-contador-labs">DISCORD</h2>
                            </div>

                            <div className="container-numero-discord-contador-labs">
                                <div className="container-simbolo-numero">
                                    <p className="simbolo-numero-nft-contador-labs simbolo-discord">+</p>
                                    <span ref={countUpRef} className="p-numero-contador-labs" />
                                </div>
                                <p className="p-texto-contador-labs">En nuestra comunidad</p>
                            </div>
                        </div>
                    )}
                </CountUp>
            </div>
        </div>
    )
}

export { SectionContadorLabs }


