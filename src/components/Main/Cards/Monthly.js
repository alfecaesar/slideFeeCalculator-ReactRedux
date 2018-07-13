import React, { Component } from "react";
import { Card } from "antd";

import { NumericTextBox, Input } from "@progress/kendo-react-inputs";

import "./Cards.css";
class Monthly extends Component {
    constructor() {
        super();

        this.state = {
            monthly: 0,
            monthlyyear: 0,
            incomesource: "",
            total: 0
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { monthly } = this.state;

        const total = monthly * 12;
        if (prevState.total !== total) {
            this.props.getAllValues(total);
            this.setState({
                total
            });
        }
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
        const { monthly, incomesource } = this.state;
        return (
            <div className="card-container">
                <Card
                    style={{
                        height: "550px",
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
                    </div>
                    <br />
                    <div className="form-container" style={{ width: "100%" }}>
                        <label>
                            <strong>Income Source Description</strong>
                        </label>
                        <br />
                        <Input
                            value={incomesource}
                            style={{ width: "100%" }}
                            name="incomesource"
                            onChange={this.onChangeMonthly}
                        />

                        <br />
                        <br />
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
                        <strong>Yearly Total: {this.state.total}</strong>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Monthly;
