import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import api from "../../services/api";

import "./style.css";

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const teacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post("connections", {
            user_id: teacher.id,
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>{teacher.cost}</strong>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={createNewConnection}
                        href={`https://wa.me/${teacher.whatsapp}`}
                    >
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </a>
                </p>
            </footer>
        </article>
    );
};

export default teacherItem;
