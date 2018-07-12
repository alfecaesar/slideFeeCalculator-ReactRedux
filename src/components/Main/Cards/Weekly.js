import React, { Component } from "react";
import { Card } from "antd";

import { NumericTextBox } from "@progress/kendo-react-inputs";

import "./Cards.css";
class Weekly extends Component {
    constructor() {
        super();

        this.state = {
            weekone: 0,
            weektwo: 0,
            weekthree: 0,
            weekfour: 0
        };
    }

    onChangeWeekly = e => {
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    onCompute = () => {
        const { weekone, weektwo, weekthree, weekfour } = this.state;

        const total = (weekone + weektwo + weekthree + weekfour) * 13;

        this.props.getAllValues(total);

        return total;
    };
    render() {
        const { weekone, weektwo, weekthree, weekfour } = this.state;
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
                        <strong>Weekly</strong>
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
                            defaultValue={weekone}
                            width="100%"
                            name="weekone"
                            onChange={this.onChangeWeekly}
                            spinners={false}
                        />
                        <br />
                        <br />
                        <label>
                            <strong>Week 2 Gross</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={weektwo}
                            width="100%"
                            name="weektwo"
                            onChange={this.onChangeWeekly}
                            spinners={false}
                        />
                        <br />
                        <br />
                        <label>
                            <strong>Week 3 Gross</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={weekthree}
                            width="100%"
                            name="weekthree"
                            onChange={this.onChangeWeekly}
                            spinners={false}
                        />
                        <br />
                        <br />
                        <label>
                            <strong>Week 4 Gross</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={weekfour}
                            width="100%"
                            name="weekfour"
                            onChange={this.onChangeWeekly}
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

export default Weekly;
