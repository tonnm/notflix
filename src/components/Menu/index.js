import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/img/logonotflix.png';
import './Menu.css';
import Button from '../Button/index';
function Menu(){
    return (
        <nav className="Menu">
            <Link to='/'>
            <img className="logo" src={logo} alt="NotFlix logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;