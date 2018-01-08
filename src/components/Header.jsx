import React, { Component }     from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
                    <Nav pullRight>
                        <NavItem href="https://github.com/johandjoz/zclassicpaperwallet.com" className="headerLeftOption">SOURCE</NavItem>
                        <Navbar.Text>|</Navbar.Text>
                        <NavItem href="http://www.zclassicexplorer.com/" className="headerLeftOption">EXPLORER</NavItem>
                    </Nav>
                </div>
            </Navbar>

        );
    }
}
