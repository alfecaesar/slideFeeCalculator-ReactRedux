import React, { Component } from "react";
import { Upload, Button, Icon, Card } from "antd";

import { NumericTextBox, Input } from "@progress/kendo-react-inputs";

import "./Cards.css";
class TaxForm1040EZ extends Component {
    constructor() {
        super();

        this.state = {
            line4: 0,
            incomesource: ""
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
        const { line4, incomesource } = this.state;
        return (
            <div className="card-container">
                <Card
                    style={{
                        height: "650px",
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
                    </div>
                    <br />
                    <div className="form-container" style={{ width: "100%" }}>
                        <Upload multiple={false}>
                            <Button style={{ marginLeft: "50px" }}>
                                <Icon type="paper-clip" /> Upload File(5MB Max
                                size)
                            </Button>
                        </Upload>
                        <br />
                        <label>
                            <strong>Income Source Description</strong>
                        </label>
                        <br />
                        <Input
                            value={incomesource}
                            style={{ width: "100%" }}
                            name="incomesource"
                            onChange={this.onChange1040EZ}
                        />

                        <br />
                        <br />
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
