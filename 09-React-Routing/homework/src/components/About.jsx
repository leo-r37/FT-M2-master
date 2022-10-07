import React from "react";
import s from './About.module.css';
import aboutImg from '../img/about.jpg'

export default function About() {
    return (
        <div className={s.container}>

            <div>
                <h2>Creado por</h2>
            </div>

            <div className={s.photoContainer}>
                <img src={aboutImg} className={s.photo} alt='img'/>
            </div>

            <div>
                <h3>Leandro Ezequiel Rocha</h3>
                <p>
                    Estudiante de Full Stack Developer en Henry.
                </p>
            </div>
        </div>
    )
}