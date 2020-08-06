import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

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
    return (
        <article className="teacher-item">
            <header>
                <img 
                src={teacher.avatar}
                alt={teacher.name} 
                />
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
                    <a href={`https://wa.me/${teacher.whatsapp}`}>
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </a>
                </p>
            </footer>
        </article>
    );
};

export default teacherItem;
