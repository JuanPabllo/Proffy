import React from "react";

import Pageheader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <Pageheader title="Esses são os Proffys disponíveis.">
                <form id="search-teachers">

                <Select name="subject" label="Matéria" options={[
                        { value: 'Artes', label: 'Artes'},
                        { value: 'Ciências', label: 'Ciências'},
                        { value: 'Educação física', label: 'Educação física'},
                        { value: 'Física', label: 'Física'},
                        { value: 'Geografia', label: 'Geografia'},
                        { value: 'Sociologia', label: 'Sociologia'},
                        { value: 'Português', label: 'Português'},
                        { value: 'Inglês', label: 'Inglês'},
                        { value: 'Matemática', label: 'Matemática'},
                        { value: 'Química', label: 'Química'},
                        { value: 'Biologia', label: 'Biologia'},
                        { value: 'Inglês', label: 'Inglês'},
                        { value: 'Filosofia', label: 'Filosofia'},
                    ]} />
                    <Select name="week_day" label="Dia da semana" options={[
                        { value: '0', label: 'Domingo'},
                        { value: '1', label: 'Segunda-feira'},
                        { value: '2', label: 'Terça-feira'},
                        { value: '3', label: 'Quarta-feira'},
                        { value: '4', label: 'Quinta-feira'},
                        { value: '5', label: 'Sexta-feira'},
                        { value: '6', label: 'Sábado'},
                    ]} />
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
