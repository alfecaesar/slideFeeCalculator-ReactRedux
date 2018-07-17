import React, { Component } from "react";
import { Upload, Button, Icon, Card } from "antd";

import { NumericTextBox, Input } from "@progress/kendo-react-inputs";
import MaskedInput from "react-text-mask";
import moment from "moment";

import "./Cards.css";
class YearToDate extends Component {
    constructor() {
        super();

        this.state = {
            jobstart: moment()
                .startOf("year")
                .format("MM/DD/YYYY"),
            yeardateamount: 0,
            datepaid: "",
            yeardateyear: 0,
            incomesource: ""
        };
    }

    onChangeMask = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onChangeYearToDate = e => {
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    onCompute = () => {
        const { jobstart, datepaid, yeardateamount } = this.state;

        const momentstart = moment(jobstart);
        const momentdatepaid = moment(datepaid);

        const weeks = momentdatepaid.diff(momentstart, "week");
        console.log(weeks);

        const total = Math.round((yeardateamount / weeks) * 52);

        this.props.getAllValues(total);

        return total;
    };

    render() {
        const { yeardateamount, datepaid, jobstart, incomesource } = this.state;
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
                        <strong>Year to Date</strong>
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
                            onChange={this.onChangeYearToDate}
                        />

                        <br />
                        <br />
                        <label>
                            <strong>Gross Amount</strong>
                        </label>
                        <br />
                        <NumericTextBox
                            defaultValue={yeardateamount}
                            width="100%"
                            name="yeardateamount"
                            spinners={false}
                            onChange={this.onChangeYearToDate}
                        />
                        <br />
                        <br />
                        <label>
                            <strong>Job Start</strong>
                        </label>
                        <br />
                        <Input
                            value={jobstart}
                            width="100%"
                            name="jobstart"
                            disabled
                        />
                        <br />
                        <br />
                        <label>
                            <strong>Date Paid</strong>
                        </label>
                        <br />
                        <MaskedInput
                            style={{ width: "100%" }}
                            mask={[
                                /\d/,
                                /\d/,
                                "/",
                                /\d/,
                                /\d/,
                                "/",
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/
                            ]}
                            placeholder="MM/DD/YYYY"
                            name="datepaid"
                            value={datepaid}
                            onChange={this.onChangeMask}
                            className="k-textbox"
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

export default YearToDate;
