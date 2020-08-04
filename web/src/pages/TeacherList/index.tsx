import React from "react";
import Pageheader from "../../components/PageHeader";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <Pageheader title="Esses são os Proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </Pageheader>

            <main>
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
                        Entusiasta por tecnologias da física ahan
                        <br />
                        <br />
                        Apaixonado em explodir coisas
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
            </main>
        </div>
    );
}

export default TeacherList;
