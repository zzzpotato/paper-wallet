import React, { Component } from 'react';
import { Row, Col, Button, FormGroup, Radio }
                            from 'react-bootstrap';
import { QRCode }           from 'react-qr-svg';
import zclassicjs            from 'zclassicjs';

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'T',
            priv: '',
            wif: '',
            addr: ''
        };
    }

    genTAddress() {
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

    genZAddress() {
        const z_secretKey   = zclassicjs.zaddress
            .mkZSecretKey(this.props.entropy + new Date().getTime());
        const spendingKey   = zclassicjs.zaddress
                                .zSecretKeyToSpendingKey(z_secretKey);
        const a_pk          = zclassicjs.zaddress
                                .zSecretKeyToPayingKey(z_secretKey);
        const pk_enc        = zclassicjs.zaddress
                                .zSecretKeyToTransmissionKey(z_secretKey);
        const Zaddress      = zclassicjs.zaddress.mkZAddress(a_pk, pk_enc);

        this.setState({
            priv: z_secretKey,
            wif: spendingKey,
            addr: Zaddress
        });
    }

    handleCheckRadio(type) {
        this.setState({
            type: type,
            priv: '',
            wif: '',
            addr: ''
        });
    }

    getZpriv() {
        if (this.state.type === 'Z')
            return("private key: " + this.state.priv);
    }

    render() {
        return (
            <Col md={12} id="Single">
                <hr />
                <Row className="r1">

                    <Col md={4}>
                        <FormGroup>
                            <Radio name="radioGroup"
                            onMouseDown={() => this.handleCheckRadio('T')}
                            checked={this.state.type === 'T'} inline>
                                T Address
                            </Radio>
                            <br />
                            <Radio name="radioGroup"
                            onMouseDown={() => this.handleCheckRadio('Z')}
                            checked={this.state.type === 'Z'} inline>
                                Z Address
                            </Radio>
                        </FormGroup>
                    </Col>

                    <Col md={2}>
                        <Button onClick={this.state.type === 'T' ?
                            () => this.genTAddress()
                            : () => this.genZAddress()}
                        >
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
                        <Col md={3} className="max-width singleTabs col-sm-offset-3">
                            <h1 style={{color:'green'}}>Public</h1>
                            <h3>ZERC Address</h3>
                            <div>
                                <QRCode
                                    bgColor="#FFFFFF"
                                    fgColor="#000000"
                                    level="L"
                                    style={{ width: 200 }}
                                    value={this.state.addr}
                                />
                            </div>
                            <div className="btcztabcode">
                                {this.state.addr}
                            </div>
                        </Col>
                        <Col md={3} className="max-width singleTabs">
                            <h1 style={{color:'red'}}>Secret</h1>
                            <div>
                                {this.state.type === 'T' ? (
                                    <h3>Private Key</h3>
                                ) : (
                                    <h3>Spending Key</h3>
                                )}
                                <div>
                                    <QRCode
                                        bgColor="#FFFFFF"
                                        fgColor="#000000"
                                        level="L"
                                        style={{ width: 200 }}
                                        value={this.state.wif}
                                    />
                                </div>
                                <div className="btcztabcode">{this.state.wif}</div>
                            </div>
                            <p>{this.getZpriv()}</p>
                        </Col>
                    </Row>
                ) : (
                    <Row className="r2 no-padding"></Row>
                )}
                <hr />
                <Row className="r3">
                    <Col>
                        <p>
                            <b>A Zero Classic wallet</b> is as simple as a single pairing of a Zero Classic address with its corresponding Zero Classic private key. You can share your address to receive Zero Classic payments, however your private key is what allows you to unlock and manage your funds, keep it safe.
                        </p>
                        <p>
                            <b>To safeguard this wallet</b> you must print or otherwise record the Zero Classic address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you leave/refresh the site or press the "Generate New Address" button then a new private key will be generated and the previously displayed private key will not be retrievable. Your Zero Classic private key should be kept a secret. Whomever you share the private key with has access to spend all the ZERC associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.
                        </p>
                        <p>
                            <b>Add funds</b> to this wallet by instructing others to send ZERC to your ZERC address.
                        </p>
                        <p>
                            <b>Check your balance</b> by entering your ZERC address on one of these explorers :
                        </p>
                        <ul style={{listStyleType: 'none'}}>
                            <li><a href="https://insight.zeroclassic.org" target="_blank" rel="noopener noreferrer">https://insight.zeroclassic.org</a></li>
                        </ul>
                        <ul style={{listStyleType: 'none'}}>
                            <li><a href="https://explorer.zeroclassic.org" target="_blank" rel="noopener noreferrer">https://explorer.zeroclassic.org</a></li>
                        </ul>
                        <p>
                            <b>To spend your ZERC</b> you can download the <a href='https://github.com/zeroclassic/SwingWallet'>Zero Classic Swing Wallet</a> and import your private key to the p2p client wallet.
                        </p>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Single;
