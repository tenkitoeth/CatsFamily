import React from 'react';
import "./index.css"
import {Accordion} from './accordion';

const QuestionsSection = () => {


  const accordionData = [
    {
      title: '¿Qué es Cats Family?',
      content: `Cats Family es una colección de NFTs desarrollada en la red de ETH. El objetivo principal es crear la comunidad NFT más potente del ecosistema, en la que se eduque a los miembros a desenvolverse en el sector.`
    },
    {
      title: '¿Cuál es el supply total y el precio de lanzamiento?',
      content: `El supply total es de 555 NFTs, y el lanzamiento fue GRATIS, al que solo se podía acceder cumpliendo una serie de requisitos.`
    },
    {
      title: 'No estuve en el lanzamiento, ¿puedo seguir comprando un NFT de Cats Family?',
      content: `Por supuesto, la colección está listada en los mercados NFTs más importantes, por lo que puedes encontrar la colección en cualquiera de ellos, como por ejemplo Opensea o MagicEden.`
    },
    {
      title: '¿Cuándo fue el lanzamiento?',
      content: `El lanzamiento fue el 6 de Marzo de 2022 y un año después, en Marzo de 2023, con motivo del aniversario, se produjo la mutación de los NFTs, permitiendo a los holders obtener un NFT completamente nuevo y mejorado.`
    },
    {
      title: '¿Como verifico que soy poseedor de un Cats Family para poder acceder a todos los beneficios que tiene ser holder?',
      content: `En el canal oficial de discord se ha habilitado una verificación detallada paso a paso, para que todos los poseedores puedan verificarse y comenzar a disfrutar de las ventajas que ofrece formar parte de esta comunidad.`
    }
  ];

  return (
    <section id="faq">
        <div className="titulo-faq">
            <h2>Preguntas Frecuentes</h2>
        </div>
        <div className="preguntas">
            <div className="contenedor-preguntas">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    </section>
  );
};

export { QuestionsSection };