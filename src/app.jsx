import React, { useState, useEffect } from 'react';
import { POKEMONS } from './models/mock-pokemon';
import './css/Style.css';
import Nav from './nav';
import ProgressBar from './page-statut';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import changementDeCouleur from './models/colorManage';
import Message from './WelcomeMessage';
import'./css/TheMessage.css';

function App() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    useEffect(() => {
        changementDeCouleur();
    }, []);

    return (
        <div>
            <ProgressBar />
            <header id='sip'>
                <h1 className="center titre" id='titre'>Pokédex</h1>
            </header>
            <Nav />
            <Message />
            <div className='io' id='io'>
                <div className="container">
                    <div className="row conteneur">
                        <TransitionGroup>
                            {pokemons.map(({ id, name, picture, created }) => (
                                <CSSTransition id='pipiri' key={id} classNames="boite" timeout={500}>
                                    <div className="col s6 m4">
                                        <div className="card horizontal boite">
                                            <div className="card-image">
                                                <img src={picture} alt={name} />
                                            </div>
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                    <p>{name}</p>
                                                    <p><small>{created.toString()}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </div>
                </div>
            </div>
            <footer id='sop'>
                <p className='elpipi hello'>En cas de problème veuillez nous contacter avec ce mail : <p className='elpopo hello'>arendiaye00@gmail.com</p></p>
                <p className='mon hello'>©COPYRIGHT 2024 / LePokedex.com</p>
                <div className='massamba'>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="facebook" className='samba'/>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png" alt="X" className='samba'/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="instagram" className='samba'/>
                </div>
            </footer>
        </div>
    );
}

export default App;