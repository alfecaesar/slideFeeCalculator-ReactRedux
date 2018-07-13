import React, { Component } from "react";
import { Card } from "antd";
import { Input } from "@progress/kendo-react-inputs";
import "./Cards.css";
class Homeless extends Component {
    constructor() {
        super();

        this.state = {
            incomesource: ""
        };
    }

    onChangeHomeless = e => {
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    render() {
        const { incomesource } = this.state;
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
                        <strong>Homeless</strong>
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
                            onChange={this.onChangeHomeless}
                        />

                        <br />
                        <br />
                    </div>
                    <div
                        className="total-container"
                        style={{
                            bottom: "10px",
                            position: "absolute",
                            marginLeft: "100px"
                        }}
                    >
                        <strong>Yearly Total: Homeless</strong>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Homeless;
