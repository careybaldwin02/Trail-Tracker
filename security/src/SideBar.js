import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <Menu >
            <Link to = {"/main"}>
            <i className="fas fa-search"></i>
            </Link>

            <Link to = {"/about"}>
            <i className="fas fa-question"></i>
            </Link>

            <Link to = {"/"}>
            <i className="fas fa-sign-in-alt"></i>
            </Link>

            <Link to = {"/user"}>
            <i class="far fa-user-circle"></i>
            </Link>

            <Link to = {"/settings"}>
            <i class="fas fa-cog"></i>
            </Link>

        </Menu>
    )
};

//export default BurgerMenu;







