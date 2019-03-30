import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { QRCode }           from 'react-qr-svg';
import zclassicjs            from 'zclassicjs';

import art1 from '../btcz_paper_front.png';
import art2 from '../btcz_paper_back.png';

class Paper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'T',
            priv: '',
            wif: '',
            addr: ''
        };
    }

    genAddress() {
        const priv      = zclassicjs.address
            .mkPrivKey(this.props.entropy + new Date().getTime());
        const privWIF   = zclassicjs.address.privKeyToWIF(priv, true);
        const pubKey    = zclassicjs.address.privKeyToPubKey(priv, true);
        const znAddr    = zclassicjs.address.pubKeyToAddr(pubKey);

        this.setState({
            priv: priv,
            wif: privWIF,
            addr: znAddr
        });
    }

    render() {
        return (
            <Col md={12} id="Paper">
                <hr />
                <Row className="r1">
                    <Col md={2}>
                        <Button onClick={() => this.genAddress()}>
                            Generate a new wallet
                        </Button>
                    </Col>
                    <Col md={2}>
                        <Button onClick={window.print}>
                            Print
                        </Button>
                    </Col>
                </Row>
                <hr />
                {this.state.addr ? (
                    <Row className="r2">
                        <Col md={12} className="max-width">

                            <h2>Overview</h2>

                            <img alt="art1"
                            className="print-only"
                            id="art1" src={art1} />
                            <img alt="art2"
                            className="print-only"
                            id="art2" src={art2} />

                            <div id="art-area">


                                <span id="addr-QR">
                                    <QRCode
                                        bgColor="#FFFFFF"
                                        fgColor="#000000"
                                        level="L"
                                        style={{ width: 96 }}
                                        value={this.state.addr}
                                    />
                                </span>

                                <b id="addr-str1">
                                    {this.state.addr}
                                </b>
                                <b id="addr-str2">
                                    {this.state.addr}
                                </b>

                                <span id="wif-QR">
                                    <QRCode
                                        bgColor="#FFFFFF"
                                        fgColor="#000000"
                                        level="L"
                                        style={{ width: 96 }}
                                        value={this.state.wif}
                                    />
                                </span>

                                <b id="wif-str1">
                                    {this.state.wif}
                                </b>
                                <b id="wif-str2">
                                    {this.state.wif}
                                </b>

                            </div>

                        </Col>
                    </Row>
                ) : (
                    <Row className="r2 no-padding"></Row>
                )}
                <hr />
                <Row className="r3">
                    <Col>
                        <p>
                          A paper wallet is a piece of paper containing a public address and a private key. It allows you to store Zero Classic coins offline.
                        </p>
                        <p>
                          These kind of wallets are vulnerable to loss and theft. You should keep it safe like jewels or cash. Therefore it is recommended either to have a backup or to generate it only for a temporary use.
                        </p>
                        <p>
                          <b>Special Print Instructions:</b>
                        </p>
                        <ul>
                        <li><b>1)</b> Must use Google Chrome / Firefox</li>
                        <li><b>2)</b> Set to landscape </li>
                        <li><b>3)</b> Set to print pages 1,2</li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Paper;
