import React from "react";
import "./index.css";
import videoPortada from "./fondo_portada.mp4"

function VideoFondo(){
    return (
        <video className="video-fondo" autoplay="autoplay" loop="true" muted defaultMuted playsinline="true" disablePictureInPicture="true" >
            <source src={videoPortada} type="video/mp4" />
        </video>
    )
}

export { VideoFondo }