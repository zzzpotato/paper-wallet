import React, { Component } from 'react';
import { Grid, Row, Col }   from 'react-bootstrap';

import website from "../website.png";
import github from "../github.png";
import twitter from "../twitter.png";
import discord from "../discord.png";
import bitcointalk from "../bitcointalk.png";
import reddit from "../reddit.png";

export default class Footer extends Component {
    render() {
        return (
            <Grid fluid={true} id="footer">
                <br />
                <div className="container">
                <Row>
                    <Col xs={12} className="footerSocialWrap">
                        <ul className="footerSocial">
                            <li>
                                <a href="http://bzedge.org/">
                                    <img src={website} alt="website"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/BZEdge/paper-wallet">
                                    <img src={github} alt="github"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/BitcoinZTeam">
                                    <img src={twitter} alt="twitter"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://discordapp.com/invite/u3dkbFs">
                                    <img src={discord} alt="discord"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://bitcointalk.org/index.php?topic=2166510.0">
                                    <img src={bitcointalk} alt="bitcointalk"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.reddit.com/r/BTCZCommunity">
                                    <img src={reddit} alt="reddit"/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12}>

                    </Col>
                </Row>
                </div>
                <div>
                <p className="footerCopyright">
                    <a href="https://github.com/BZEdge/paper-wallet" target="_blank" rel="noopener noreferrer">JavaScript Client-Side BZEdge Wallet Generator</a>
                </p>
                <div className="text-center"><h3><span className="label label-danger text-center">Beta</span></h3></div>
                <div className="text-center"><h4>We encourage you to test your paper wallet with small sums before sending larger amounts.</h4></div>
                <div className="text-center"><h4> Please also make multiple paper copies to safeguard your coins.</h4></div>
                
                </div>
            </Grid>
        );
    }
}
