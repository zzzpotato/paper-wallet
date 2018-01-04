import React, { Component }     from 'react';
import { Navbar } from 'react-bootstrap';

import logoFull from "../logo_full.png";

export default class Header extends Component {

    render() {
        return (

            <Navbar id="header" className="zenHeader" fluid={true}>
                <div className="container">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img src={logoFull} alt="logo"/>
                        </Navbar.Brand>
                    </Navbar.Header>
                </div>
            </Navbar>

        );
    }
}
