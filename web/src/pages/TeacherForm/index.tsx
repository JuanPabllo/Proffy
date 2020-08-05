import React from "react";

import Pageheader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

function Teacherform() {
    const scheduleItems = [
        { weel_day: 0, from: "8:00AM", to: "4:00PM" },
        { weel_day: 2, from: "10:00AM", to: "6:00PM" },
    ];

    return (
        <div id="page-teacher-form" className="container">
            <Pageheader
                title="Que incrivel que você quer dar aulas."
                description="O primeiro passo é preencher o formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="Avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsappo" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Ciências", label: "Ciências" },
                            {
                                value: "Educação física",
                                label: "Educação física",
                            },
                            { value: "Física", label: "Física" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "Sociologia", label: "Sociologia" },
                            { value: "Português", label: "Português" },
                            { value: "Inglês", label: "Inglês" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Química", label: "Química" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Inglês", label: "Inglês" },
                            { value: "Filosofia", label: "Filosofia" },
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button">+ Novo horário</button>
                    </legend>

                    {scheduleItems.map((scheduleItem) => {
                        return (
                            <div className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da semana"
                                    options={[
                                        { value: "0", label: "Domingo" },
                                        { value: "1", label: "Segunda-feira" },
                                        { value: "2", label: "Terça-feira" },
                                        { value: "3", label: "Quarta-feira" },
                                        { value: "4", label: "Quinta-feira" },
                                        { value: "5", label: "Sexta-feira" },
                                        { value: "6", label: "Sábado" },
                                    ]}
                                />
                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="Até" type="time" />
                            </div>
                        );
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    );
}

export default Teacherform;
