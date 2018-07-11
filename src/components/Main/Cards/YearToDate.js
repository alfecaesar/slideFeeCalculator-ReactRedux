import React, { Component } from "react";
import { Card } from "antd";

import { NumericTextBox, Input } from "@progress/kendo-react-inputs";

import "./Cards.css";
class YearToDate extends Component {
    constructor() {
        super();

        this.state = {
            yeardateamount: 0,
            yeardate: "",
            yeardateyear: 0
        };
    }
    render() {
        const { yeardateamount, yeardateyear, yeardate } = this.state;
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
                        <strong>Year to Date</strong>
                        <br />
                        <span>Income Source Description</span>
                    </div>
                    <br />
                    <div className="form-container" style={{ width: "100%" }}>
                        <label>
                            <strong>Amount</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={yeardateamount}
                            format="c2"
                            width="100%"
                            name="weekone"
                        />
                        <br />
                        <br />

                        <label>
                            <strong>Date</strong>
                        </label>
                        <br />
                        <Input value={yeardate} />
                    </div>
                    <div
                        className="total-container"
                        style={{
                            bottom: "10px",
                            position: "absolute",
                            marginLeft: "100px"
                        }}
                    >
                        <strong>Yearly Total: {yeardateyear}</strong>
                    </div>
                </Card>
            </div>
        );
    }
}

export default YearToDate;
