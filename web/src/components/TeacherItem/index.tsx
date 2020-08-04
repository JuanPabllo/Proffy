import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './style.css'


function teacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars1.githubusercontent.com/u/59495901?s=460&u=78581ed6769f49a748a10da7cb03722587cc51be&v=4"
                    alt="Juan Pablo"
                />
                <div>
                    <strong>Juan Pablo</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
            Entusiasta das melhores tecnologias de química avançada. 
                <br />
                <br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>70,00</strong>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </button>
                </p>
            </footer>
        </article>
    );
}

export default teacherItem;
