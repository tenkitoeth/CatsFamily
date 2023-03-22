import React, { useState } from "react";
import "./index.css"

function ContactSection() {
    
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');

    // const handleSubmit = async (event) => { 
    //         event.preventDefault();
    //         console.log(this.name.value);
    //         try {
    //             await fetch('https://formspree.io/f/mzbqaven', {
    //             method: 'post',
    //             headers: {'Content-Type':'application/json'},
    //             body: {
    //             "email": this.email.value,
    //             "message": `nombre: ${this.name.value} 
    //                         asunto: ${this.subject.value}
    //                         mensaje: ${this.message.value}`
    //             }
    //         });
    //         } catch (error) {
    //             console.log(error);
    //         }
    // };
    
    
    return (
        <section id="contacto">
            <div className="contenedor">
                <div className="contenido-contacto">
                    <h2><span>CONTACTA</span> CON NOSOTROS</h2>
                
                    <p className="textsection-p">Puedes establecer contacto con nosotros <span className="textsection-p--span">sin ningún tipo de compromiso</span> a través del siguiente formulario. Una vez estudiemos tu caso te daremos un presupuesto acorde al mismo.</p>

                    {/* <form onSubmit={handleSubmit}>
                        <div className="div-form">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="div-form">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="div-form">
                            <label htmlFor="subject">Asunto</label>
                            <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </div>

                        <div className="div-form">
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>

                        <button type="submit" className="btn-ghost primary">Enviar <i className="fa-solid fa-paper-plane"></i></button>
                    </form> */}

                    <div className="div-button-contactanos">
                        <a href="mailto:kittycatssol@protonmail.com" className="button-contactanos">CONTACTANOS<i className="icono-button-contactanos fa-solid fa-envelope-open-text"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { ContactSection } 
