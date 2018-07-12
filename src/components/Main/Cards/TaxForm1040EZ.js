import React, { Component } from "react";
import { Card } from "antd";

import { NumericTextBox } from "@progress/kendo-react-inputs";

import "./Cards.css";
class TaxForm1040EZ extends Component {
    constructor() {
        super();

        this.state = {
            line4: 0
        };
    }

    onChange1040EZ = e => {
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    onCompute = () => {
        const { line4 } = this.state;

        const total = line4;
        this.props.getAllValues(total);
        return total;
    };
    render() {
        const { line4 } = this.state;
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
                        <strong>Tax Form 1040EZ</strong>
                        <br />
                        <span>Income Source Description</span>
                    </div>
                    <br />
                    <div className="form-container" style={{ width: "100%" }}>
                        <label>
                            <strong>Line 4</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={line4}
                            width="100%"
                            name="line4"
                            onChange={this.onChange1040EZ}
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

export default TaxForm1040EZ;
