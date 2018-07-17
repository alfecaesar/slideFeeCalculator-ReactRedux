import React, { Component } from "react";
import { Card } from "antd";
import { DropDownList } from "@progress/kendo-react-dropdowns";

import "./Cards.css";

class AddSource extends Component {
    render() {
        const source = [
            "Weekly",
            "Bi-Weekly",
            "Monthly",
            "Year to Date",
            "Tax Form 1040",
            "Tax Form 1040A",
            "Tax Form 1040EZ",
            "Unemployed",
            "Homeless"
        ];
        return (
            <div className="card-container">
                <Card
                    style={{
                        height: "650px",
                        width: "400px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    <span style={{ fontSize: "22px" }}>Add Income Source</span>
                    <DropDownList
                        data={source}
                        style={{ width: "100%" }}
                        onChange={this.props.onChangeSource}
                        value=""
                    />
                    <br />
                    <br />
                </Card>
            </div>
        );
    }
}

export default AddSource;
