import React from "react";
import './index.css';
import socio1 from '../assets/socio1.png'
import socio2 from '../assets/socio2.png'
import socio3 from '../assets/socio3.png'
import socio4 from '../assets/socio4.png'
import socio5 from '../assets/socio5.png'
import socio6 from '../assets/socio6.png'
import socio7 from '../assets/socio7.png'
import socio8 from '../assets/socio8.png'

function Socios() {
    return (
        <section className="section-socios">
                <h2 className="h2-socios">PARTNERS</h2>
                <div className="container-div-imagenes">
                    <div className="div-imagenes-socios" >
                        <img src={socio1} className="socios socio1"/>
                    </div>
                    
                    <div className="div-imagenes-socios" >
                        <img src={socio2} className="socios socio2"/>
                    </div>

                    <div className="div-imagenes-socios" >
                        <img src={socio3} className="socios socio3"/>
                    </div>

                    <div className="div-imagenes-socios" >
                        <img src={socio4} className="socios socio4"/>
                    </div>

                    <div className="div-imagenes-socios" >
                        <img src={socio5} className="socios socio5"/>
                    </div>

                    <div className="div-imagenes-socios" >
                        <img src={socio6} className="socios socio6"/>
                    </div>
                    
                    <div className="div-imagenes-socios" >
                        <img src={socio7} className="socios socio7"/>
                    </div>

                    <div className="div-imagenes-socios" >
                        <img src={socio8} className="socios socio8"/>
                    </div>
                </div>
        </section>
    )
}

export { Socios }