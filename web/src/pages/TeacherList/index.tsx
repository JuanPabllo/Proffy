import React from "react";
import Pageheader from "../../components/PageHeader";

import "./styles.css";

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <Pageheader title="Esses são os Proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </Pageheader>
        </div>
    );
}

export default TeacherList;
