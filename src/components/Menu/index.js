import React from 'react';
import logo from '../../assets/img/logonotflix.png';
import './Menu.css';
import Button from '../Button/index';
function Menu(){
    return (
        <nav className="Menu">
            <a href='/'>
            <img className="logo" src={logo} alt="NotFlix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;