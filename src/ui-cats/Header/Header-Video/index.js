import React from "react";
import "./index.css";
import videoPortada from "./fondo_portada.mp4"

function VideoFondo(){

    return (
        <video className="video-fondo" autoPlay="autoplay" loop={true} muted={true} defaultmuted="true" playsInline={true} disablePictureInPicture={true} >
            <source src={videoPortada} type="video/mp4" />
        </video>
    )
}

export { VideoFondo }