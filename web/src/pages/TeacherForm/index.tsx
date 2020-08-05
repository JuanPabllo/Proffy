import React from "react";
import Pageheader from "../../components/PageHeader";

import 'styles.css'

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

                    <div className="input-block">
                        <label htmlFor="name">Nome completo</label>
                        <input type="text" id="name" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="avatar">Avatar</label>
                        <input type="text" id="avatar" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="text" id="whatsapp" />
                    </div>
                </fieldset>
            </main>
        </div>
    );
}

export default Teacherform;
