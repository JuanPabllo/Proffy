import React from "react";

import Pageheader from "../../components/PageHeader";
import Input from "../../components/input";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

function Teacherform() {
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
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input name="sibject" label="Matéria" />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default Teacherform;
