import React, { Component } from "react";
import { Card } from "antd";

import { NumericTextBox, Input } from "@progress/kendo-react-inputs";

import "./Cards.css";
class BiWeekly extends Component {
    constructor() {
        super();

        this.state = {
            biweekone: 0,
            biweektwo: 0,
            incomesource: "",
            total: 0
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const total = (this.state.biweekone + this.state.biweektwo) * 13;
        if (prevState.total !== total) {
            const origin = "biweekly_" + this.props.indexCon;
            this.props.getAllValues(total, origin);
            this.setState({
                total
            });
        }
    }

    onChangeBiweekly = e => {
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    onCompute = () => {
        const total = (this.state.biweekone + this.state.biweektwo) * 13;
        //this.props.getAllValues(total);
        return total;
    };

    render() {
        const { biweekone, biweektwo, incomesource } = this.state;
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
                        <strong>Bi-Weekly</strong>
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
                            onChange={this.onChangeBiweekly}
                        />

                        <br />
                        <br />
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
                        <strong>Yearly Total: {this.state.total}</strong>
                    </div>
                </Card>
            </div>
        );
    }
}

export default BiWeekly;
