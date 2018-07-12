import React, { Component } from "react";
import { Card } from "antd";

import { NumericTextBox } from "@progress/kendo-react-inputs";

import "./Cards.css";
class Monthly extends Component {
    constructor() {
        super();

        this.state = {
            monthly: 0,
            monthlyyear: 0
        };
    }

    onChangeMonthly = e => {
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    onCompute = () => {
        const { monthly } = this.state;

        const total = monthly * 12;
        this.props.getAllValues(total);
        return total;
    };

    render() {
        const { monthly } = this.state;
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
                        <strong>Monthly</strong>
                        <br />
                        <span>Income Source Description</span>
                    </div>
                    <br />
                    <div className="form-container" style={{ width: "100%" }}>
                        <label>
                            <strong>Gross Amount</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={monthly}
                            width="100%"
                            name="monthly"
                            onChange={this.onChangeMonthly}
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

export default Monthly;
