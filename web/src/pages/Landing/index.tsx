import React from "react";
import LogoImg from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="Logo Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img
                    src={LandingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />
                <div className="buttons-container">
                    <a href="" className=""></a>
                </div>
            </div>
        </div>
    );
}

export default Landing;
