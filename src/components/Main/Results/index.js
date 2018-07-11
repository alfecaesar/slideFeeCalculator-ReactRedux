import React, { Component } from "react";

class Results extends Component {
    constructor() {
        super();

        this.state = {
            pavLine: 12140,
            pavScale: 4320,
            group: "",
            due: "",
            procedure: ""
        };
    }

    componentDidMount() {
        this.renderGroup();
    }
    renderGroup = () => {
        let pavRation =
            this.props.totalYearly /
            (this.state.pavLine + this.state.pavScale * (6 - 1));
        console.log(pavRation);
        if (pavRation < 1) {
            return "Group B";
        } else if (pavRation > 1 && pavRation < 1.25) {
            return "Group C";
        } else if (pavRation > 1.25 && pavRation < 1.5) {
            return "Group D";
        } else if (pavRation > 1.5 && pavRation < 1.75) {
            return "Group E";
        } else if (pavRation > 1.75 && pavRation < 2) {
            return "Group F";
        } else if (pavRation > 2) {
            return "Group G";
        }
    };

    renderDue = () => {
        let pavRation =
            this.props.totalYearly /
            (this.state.pavLine + this.state.pavScale * (6 - 1));

        if (pavRation < 1) {
            return "$35";
        } else if (pavRation > 1 && pavRation < 1.25) {
            return "$45";
        } else if (pavRation > 1.25 && pavRation < 1.5) {
            return "$55";
        } else if (pavRation > 1.5 && pavRation < 1.75) {
            return "$70";
        } else if (pavRation > 1.75 && pavRation < 2) {
            return "$85";
        } else if (pavRation > 2) {
            return "$100";
        }
    };

    renderProcedure = () => {
        let pavRation =
            this.props.totalYearly /
            (this.state.pavLine + this.state.pavScale * (6 - 1));

        if (pavRation < 1) {
            return "70%";
        } else if (pavRation > 1 && pavRation < 1.25) {
            return "75%";
        } else if (pavRation > 1.25 && pavRation < 1.5) {
            return "80%";
        } else if (pavRation > 1.5 && pavRation < 1.75) {
            return "85%";
        } else if (pavRation > 1.75 && pavRation < 2) {
            return "90%";
        } else if (pavRation > 2) {
            return "100%";
        }
    };

    render() {
        return (
            <div>
                <table
                    width="100%"
                    cellPadding="20px"
                    cellSpacing="0px"
                    style={{ backgroundColor: "white" }}
                >
                    <tbody>
                        <tr>
                            <td
                                style={{
                                    border: "1px solid lightgray",
                                    textAlign: "right"
                                }}
                            >
                                Grand Total Yearly Income for Household
                            </td>
                            <td style={{ border: "1px solid lightgray" }}>
                                {this.props.totalYearly}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    border: "1px solid lightgray",
                                    textAlign: "right"
                                }}
                            >
                                Sliding Scale Group
                            </td>
                            <td style={{ border: "1px solid lightgray" }}>
                                {this.renderGroup()}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    border: "1px solid lightgray",
                                    textAlign: "right"
                                }}
                            >
                                Flat Payment Due
                            </td>
                            <td style={{ border: "1px solid lightgray" }}>
                                {this.renderDue()}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    border: "1px solid lightgray",
                                    textAlign: "right"
                                }}
                            >
                                Procedure %
                            </td>
                            <td style={{ border: "1px solid lightgray" }}>
                                {this.renderProcedure()}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Results;
