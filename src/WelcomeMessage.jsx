import React, { useState, useEffect } from "react";
import './css/TheMessage.css';
import changementDeCouleur from "./models/colorManage";
import messageManager from "./models/messageManager";

function Message() {
    const [isMessageOpen, setIsmessageOpen] = useState(false);

    const showMessage = () => {
        setIsmessageOpen(!isMessageOpen);
    }

    useEffect(() => {
        changementDeCouleur();
        messageManager();
    }, []);

    return (
        <div className="there" id="message">
            <img src="https://icons-for-free.com/iconfiles/png/512/pokemon+pokecenter-1320568182920890288.png" alt="pokedex" className="sambo" />
            <p>Bienvenue dans notre application LePokedex.com !<br />
                Changer de thème en fonction de vos envies juste en bas grâce au "theme switcher"<br />
                Consultez la navigation aussi pour pouvoir voir les détails sur tous les pokémons !<br />
                Appuyer sur le bouton ci-dessous pour faire disparaitre le message !
            </p>
            <button onClick={showMessage} className="button" id="sir">
                <span className="fleche">&rarr;</span>
            </button>
        </div>
    )
}

export default Message;
