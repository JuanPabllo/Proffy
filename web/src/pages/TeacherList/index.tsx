import React from "react";

import Pageheader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/input";

import "./styles.css";

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <Pageheader title="Esses são os Proffys disponíveis.">
                <form id="search-teachers">

                    <Input name="subject" label="Matéria" />
                    <Input name="week_day" label="Dia da semana" />
                    <Input type="time" name="time" label="Hora" />

                </form>
            </Pageheader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;
