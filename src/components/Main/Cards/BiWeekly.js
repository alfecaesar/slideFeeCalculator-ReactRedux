import React, { Component } from "react";
import { Card } from "antd";

import { NumericTextBox } from "@progress/kendo-react-inputs";

import "./Cards.css";
class BiWeekly extends Component {
    constructor() {
        super();

        this.state = {
            biweekone: 0,
            biweektwo: 0
        };
    }

    onChangeBiweekly = e => {
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    onCompute = () => {
        const total = (this.state.biweekone + this.state.biweektwo) * 13;
        this.props.getAllValues(total);
        return total;
    };

    render() {
        const { biweekone, biweektwo } = this.state;
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
                        <strong>Bi-Weekly</strong>
                        <br />
                        <span>Income Source Description</span>
                    </div>
                    <br />
                    <div className="form-container" style={{ width: "100%" }}>
                        <label>
                            <strong>Week 1 Gross</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={biweekone}
                            width="100%"
                            name="biweekone"
                            onChange={this.onChangeBiweekly}
                            spinners={false}
                        />
                        <br />
                        <br />
                        <label>
                            <strong>Week 2 Gross</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={biweektwo}
                            width="100%"
                            name="biweektwo"
                            onChange={this.onChangeBiweekly}
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

export default BiWeekly;
