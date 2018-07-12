import React, { Component } from "react";
import { Card } from "antd";

import { NumericTextBox } from "@progress/kendo-react-inputs";

import "./Cards.css";
class Unemployed extends Component {
    constructor() {
        super();

        this.state = {
            amount: 0,
            receiving: 0
        };
    }

    onChangeUnemployed = e => {
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    onCompute = () => {
        const total = this.state.amount * this.state.receiving;
        this.props.getAllValues(total);
        return total;
    };

    render() {
        const { amount, receiving } = this.state;
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
                        <strong>Unemployed</strong>
                        <br />
                        <span>Income Source Description</span>
                    </div>
                    <br />
                    <div className="form-container" style={{ width: "100%" }}>
                        <label>
                            <strong>Amount per week</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={amount}
                            width="100%"
                            name="amount"
                            onChange={this.onChangeUnemployed}
                            spinners={false}
                        />
                        <br />
                        <br />
                        <label>
                            <strong>Weeks Receiving</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={receiving}
                            width="100%"
                            name="receiving"
                            onChange={this.onChangeUnemployed}
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

export default Unemployed;
