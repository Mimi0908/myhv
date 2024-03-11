import React from "react";
import "./header.css";
import fotoPersonal from "./logo.jpeg"
import {Smartphone, LocationOn, EmailOutlined} from "@mui/material"

export default function Header(){
    return(
        <div className="header">
            <div className="headerPhoto">
                <img src={fotoPersonal} alt="foto-personal" className="headerPhotoImg"/>
            </div>
            <div className="headerNombres">
                <h1>EMILY GARCÍA MONTES</h1>
                <p>Estudiante del SENA</p>
                <p>Tecnologo en analisis y desarrollo de software</p>
                <p>programadora JUNIOR</p>
            </div>
            <div className="headerContacto">
                <ul className="contactList">
                    <li className="contactListItem"><p><Smartphone/></p><p>(+57) 3205047610</p></li>
                    <li className="contactListItem"><p><LocationOn/></p><p>Santa Rossa de Cabal/Risaralda - Colombia</p></li>
                    <li className="contactListItem"><p><EmailOutlined/></p><p>emilygarciamontes@gmail.com</p></li>
                </ul>
            </div>
        </div>
    )
}