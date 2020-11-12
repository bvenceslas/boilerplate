import React, { Component } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class Header extends Component {
    state = { 
        owner: 'VENCESLAS'
     }
    render() { 
        return ( 
            <div className="header-container">
                <h2 className="header-logo">
                    {this.state.owner}
                </h2>
                <div className="header-menu">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/addPost">POST</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                    </ul>
                </div>
                <div className="search-part">
                <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        );
    }
}
 
export default Header;