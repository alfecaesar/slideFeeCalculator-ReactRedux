import React, { Component } from "react";
import { Upload, Button, Icon, Card } from "antd";

import { NumericTextBox, Input } from "@progress/kendo-react-inputs";

import "./Cards.css";
class Hourly extends Component {
    constructor() {
        super();

        this.state = {
            rate: 0,
            hours: 0,
            incomesource: "",
            total: 0
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { hours, rate } = this.state;

        const total = hours * rate * 52;
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
        const { rate, hours } = this.state;

        const total = rate * hours * 52;
        this.props.getAllValues(total);
        return total;
    };

    render() {
        const { rate, incomesource, hours } = this.state;
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
                        <strong>Hourly</strong>
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
                            onChange={this.onChangeMonthly}
                        />

                        <br />
                        <br />
                        <label>
                            <strong>Pay Rate</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={rate}
                            width="100%"
                            name="rate"
                            onChange={this.onChangeMonthly}
                            spinners={false}
                        />
                        <br />
                        <br />
                        <label>
                            <strong>Hours/Week</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={hours}
                            width="100%"
                            name="hours"
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

export default Hourly;
