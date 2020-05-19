import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const NavBar = () => {
    // this.state = {
    //     open: '',
    // }

    // handleClick() {
    //     this.setState({
    //         open: !this.state.open
    //     });
    // }

    return (
        <div className = "nav-bar">
            {/* <Link to = {"/main"}>
            <i class="fas fa-home"></i>
            </Link> */}
            <Link to = {"/main"}>
            <span>
            <i className="fas fa-search"></i>
            </span>
            </Link>
            <Link to={`/about`}>
            <span>
            <i className="fas fa-question"></i>
            </span>
            </Link>

            <Link to={'/'}>
            <span>
            <i className="fas fa-sign-in-alt"></i>
            </span>
            </Link>

            <Link to={'/user'}>
            <span>
            <i class="fas fa-ellipsis-v"></i>
            </span>
            </Link>

            <div className = "search-hover">
                click to search person or location
            </div>
         </div> 
    )
}

export default NavBar;