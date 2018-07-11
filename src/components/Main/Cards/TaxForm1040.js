import React, { Component } from "react";
import { Card } from "antd";

import { NumericTextBox } from "@progress/kendo-react-inputs";

import "./Cards.css";
class TaxForm1040 extends Component {
    constructor() {
        super();

        this.state = {
            line8b: 0,
            line15a: 0,
            line15b: 0,
            line16a: 0,
            line16b: 0,
            line20a: 0,
            line20b: 0,
            line22: 0
        };
    }

    onChange1040 = e => {
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    onCompute = () => {
        const {
            line8b,
            line15a,
            line15b,
            line16a,
            line16b,
            line20a,
            line20b,
            line22
        } = this.state;

        let line15 = 0;
        let line16 = 0;
        let line20 = 0;

        if (line15a - line15b > 0) {
            line15 = line15a - line15b;
        }

        if (line16a - line16b > 0) {
            line16 = line16a - line16b;
        }

        if (line20a - line20b > 0) {
            line20 = line20a - line20b;
        }
        const total = line8b + line22 + line15 + line16 + line20;
        this.props.getAllValues(total);

        return total;
    };

    render() {
        const {
            line8b,
            line15a,
            line15b,
            line16a,
            line16b,
            line20a,
            line20b,
            line22
        } = this.state;
        return (
            <div className="card-container">
                <Card
                    style={{
                        height: "500px",
                        width: "400px"
                    }}
                >
                    <div className="detail-container">
                        <span style={{ fontSize: "22px" }}>
                            Income Source # {this.props.number}
                        </span>
                        <br />
                        <strong>Tax Form 1040</strong>
                        <br />
                        <span>Income Source Description</span>
                    </div>
                    <br />
                    <div className="form-container" style={{ width: "100%" }}>
                        <label>
                            <strong>Line 8B</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={line8b}
                            format="c2"
                            width="100%"
                            name="line8b"
                            onChange={this.onChange1040}
                        />
                        <br />
                        <br />
                        <div
                            className="line-layer1-container"
                            style={{ display: "flex" }}
                        >
                            <div style={{ display: "inline-block" }}>
                                <label>
                                    <strong>Line 15A</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line15a}
                                    format="c2"
                                    width="95%"
                                    name="line15a"
                                    onChange={this.onChange1040}
                                />
                            </div>
                            <div style={{ display: "inline-block" }}>
                                <label>
                                    <strong>Line 15B</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line15b}
                                    format="c2"
                                    width="95%"
                                    name="line15b"
                                    onChange={this.onChange1040}
                                />
                            </div>
                        </div>
                        <br />
                        <div
                            className="line-layer2-container"
                            style={{ display: "flex" }}
                        >
                            <div style={{ display: "inline-block" }}>
                                <label>
                                    <strong>Line 16A</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line16a}
                                    format="c2"
                                    width="95%"
                                    name="line16a"
                                    onChange={this.onChange1040}
                                />
                            </div>
                            <div style={{ display: "inline-block" }}>
                                <label>
                                    <strong>Line 16B</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line16b}
                                    format="c2"
                                    width="95%"
                                    name="line16b"
                                    onChange={this.onChange1040}
                                />
                            </div>
                        </div>
                        <br />
                        <div
                            className="line-layer3-container"
                            style={{ display: "flex" }}
                        >
                            <div style={{ display: "inline-block" }}>
                                <label>
                                    <strong>Line 20A</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line20a}
                                    format="c2"
                                    width="95%"
                                    name="line20a"
                                    onChange={this.onChange1040}
                                />
                            </div>
                            <div style={{ display: "inline-block" }}>
                                <label>
                                    <strong>Line 20B</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line20b}
                                    format="c2"
                                    width="95%"
                                    name="line20b"
                                    onChange={this.onChange1040}
                                />
                            </div>
                        </div>
                        <br />
                        <label>
                            <strong>Line 20</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={line22}
                            format="c2"
                            width="100%"
                            name="line22"
                            onChange={this.onChange1040}
                        />
                    </div>
                    <div
                        className="total-container"
                        style={{
                            bottom: "10px",
                            position: "absolute",
                            marginLeft: "100px"
                        }}
                    >
                        <strong>Yearly Total: {this.onCompute()}</strong>
                    </div>
                </Card>
            </div>
        );
    }
}

export default TaxForm1040;
