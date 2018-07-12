import React, { Component } from "react";
import { Card } from "antd";

import { NumericTextBox } from "@progress/kendo-react-inputs";

import "./Cards.css";
class TaxForm1040A extends Component {
    constructor() {
        super();

        this.state = {
            line8b: 0,
            line11a: 0,
            line11b: 0,
            line12a: 0,
            line12b: 0,
            line14a: 0,
            line14b: 0,
            line15: 0
        };
    }

    onChange1040A = e => {
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    onCompute = () => {
        const {
            line8b,
            line11a,
            line11b,
            line12a,
            line12b,
            line14a,
            line14b,
            line15
        } = this.state;

        let line11 = 0;
        let line12 = 0;
        let line14 = 0;

        if (line11a - line11b > 0) {
            line11 = line11a - line11b;
        }

        if (line12a - line12b > 0) {
            line12 = line12a - line12b;
        }

        if (line14a - line14b > 0) {
            line14 = line14a - line14b;
        }
        const total = line8b + line15 + line11 + line12 + line14;
        this.props.getAllValues(total);
        return total;
    };
    render() {
        const {
            line8b,
            line11a,
            line11b,
            line12a,
            line12b,
            line14a,
            line14b,
            line15
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
                        <strong>Tax Form 1040A</strong>
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
                            width="100%"
                            name="line8b"
                            onChange={this.onChange1040A}
                            spinners={false}
                        />
                        <br />
                        <br />
                        <div
                            className="line-layer1-container"
                            style={{ display: "flex" }}
                        >
                            <div style={{ display: "inline-block" }}>
                                <label>
                                    <strong>Line 11A</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line11a}
                                    width="95%"
                                    name="line11a"
                                    onChange={this.onChange1040A}
                                    spinners={false}
                                />
                            </div>
                            <div style={{ display: "inline-block" }}>
                                <label>
                                    <strong>Line 11B</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line11b}
                                    width="95%"
                                    name="line11b"
                                    onChange={this.onChange1040A}
                                    spinners={false}
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
                                    <strong>Line 12A</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line12a}
                                    width="95%"
                                    name="line12a"
                                    onChange={this.onChange1040A}
                                    spinners={false}
                                />
                            </div>
                            <div style={{ display: "inline-block" }}>
                                <label>
                                    <strong>Line 12B</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line12b}
                                    width="95%"
                                    name="line12b"
                                    onChange={this.onChange1040A}
                                    spinners={false}
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
                                    <strong>Line 14A</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line14a}
                                    width="95%"
                                    name="line14a"
                                    onChange={this.onChange1040A}
                                    spinners={false}
                                />
                            </div>
                            <div style={{ display: "inline-block" }}>
                                <label>
                                    <strong>Line 14B</strong>
                                </label>
                                <br />
                                <NumericTextBox
                                    defaultValue={line14b}
                                    width="95%"
                                    name="line14b"
                                    onChange={this.onChange1040A}
                                    spinners={false}
                                />
                            </div>
                        </div>
                        <br />
                        <label>
                            <strong>Line 15</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={line15}
                            width="100%"
                            name="line15"
                            onChange={this.onChange1040A}
                            spinners={false}
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

export default TaxForm1040A;
