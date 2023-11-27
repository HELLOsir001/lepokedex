import React, { useEffect, useState } from "react";
import './css/Navigation.css';
import navette from "./models/BouttonNav";
import { openNav, closeNav } from "./models/BouttonNav";
import changementDeCouleur from "./models/colorManage";
import io from "./models/imageChanger";
import pageReload from "./models/pageReloadOnCLick";

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        if (!isNavOpen) {
            openNav();
        } else {
            closeNav();
        }
    };

    useEffect(() => {
        navette();
    }, []);

    useEffect(() => {
        changementDeCouleur();
        pageReload();
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    useEffect(() => {
        const iconic = document.querySelector('.theme-switch-container');
        const footer = document.querySelector('footer');

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const footerRect = footer.getBoundingClientRect();
            const iconHeight = iconic.offsetHeight;

            const distanceToFooter = windowHeight - footerRect.top;

            if (distanceToFooter > 0) {
                iconic.style.bottom = `${Math.min(60 + distanceToFooter, 60 + iconHeight)}px`;
            } else {
                iconic.style.bottom = '20px';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        io();
    }, []);

    return (
        <div>
            <button onClick={toggleNav} className='boutton active' id="button">
                <div class="menu-icone">
                    <div class="barre"></div>
                    <div class="barre"></div>
                    <div class="barre"></div>
                </div>
            </button>
            <div className={`theme-switch-container ${isDarkTheme ? 'dark' : 'light'} custom-container`} id="pio">
                <button onClick={toggleTheme} className='theme-switcher' id="helloToYou">
                    {isDarkTheme}
                        <div className="theme-switcher-container" id="lion">
                            <div className="theme-switcher-circle" id="lick"></div>
                        </div>
                </button>
            </div>

            <ul id="elpapa">
                <h2 className="mister">Navigation</h2>
                <li className="separator">Classement des Pokemons dans le Pokédex</li>
                <li className="separator separator1">Histoire des pokémons</li>
            </ul>
            <img src="https://icons-for-free.com/iconfiles/png/512/pokemon+pokecenter-1320568182920890288.png" alt="Pokedex" className="elpepe" id="mama"/>
        </div>
    );
}

export default Nav;
