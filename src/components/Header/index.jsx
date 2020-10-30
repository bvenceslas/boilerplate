import React, { Component } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    state = { 
        owner: 'VENCESLAS'
     }
    render() { 
        return ( 
            <div className="container">
                <h2 className="logo">
                    {this.state.owner}
                </h2>
                <div className="menu">
                    <ul>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/post">ABOUT</a></li>
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