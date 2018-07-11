import React, { Component } from "react";

class Results extends Component {
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
                                Results
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
                                Results
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
                                Results
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Results;
