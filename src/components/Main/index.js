import React, { Component } from "react";

import Grid from "./Grid/";
import Results from "./Results/";
import Cards from "./Cards/";
import Help from "./Help";

import FontAwesome from "react-fontawesome";
import { Tooltip } from "antd";
import { Button } from "@progress/kendo-react-buttons";

import isEmpty from "lodash.isempty";

class Main extends Component {
    constructor() {
        super();

        this.state = {
            totalYearly: 0,
            overall: 0,
            open: false,
            homeless: "",
            origin: "",
            allsource: []
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const overall = this.state.overall + this.state.totalYearly;
        if (prevState.overall !== overall) {
            this.setState({
                overall
            });
        }
    }

    getAllValues = (value, origin) => {
        /*const { source } = this.state;
        let newsource =[]
        if(isEmpty(source)){
            newsource = 
            source.push();
        } else{
            var index = source.findIndex(a => a.origin == "yey");
        }*/
        //console.log(index);
        /*onsole.log("val" + value);
        if (value === 0) {
            console.log(">>>pasok" + value + "<<<<<" + this.state.totalYearly);
            this.setState({
                totalYearly: this.state.totalYearly,
                overall: this.state.totalYearly + this.state.overall
            });
        } else {
            console.log("wews>>>" + this.state.overall);
            this.setState({
                totalYearly: value
            });
        }*/
    };

    onCompute = () => {
        const overall = this.state.overall + this.state.totalYearly;
        console.log("<<<labase:" + overall + ">>>>" + this.state.totalYearly);
        return overall;
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    checkHomeless = e => {
        /*
        if (e) {
            this.setState({
                totalYearly: "Homeless",
                overall: ""
            });
        }*/
    };

    render() {
        return (
            <div className="sliding-fee-container" style={{ margin: "20px" }}>
                <h1 style={{ float: "left" }}>Sliding Scale Fee Calculator</h1>

                <Tooltip placement="bottom" title="Help">
                    <FontAwesome
                        name="question-circle"
                        style={{
                            fontSize: "30px",
                            float: "right",
                            cursor: "pointer"
                        }}
                        onClick={this.onOpenModal}
                    />
                </Tooltip>

                <Help
                    open={this.state.open}
                    onCloseModal={this.onCloseModal}
                    style={{ width: "700px" }}
                />

                <div
                    style={{
                        width: "100%",
                        display: "flex"
                    }}
                >
                    <div
                        className="grid-container"
                        style={{
                            display: "inline-block",
                            width: "60%"
                        }}
                    >
                        <Grid />
                    </div>

                    <div
                        className="results-container"
                        style={{
                            display: "inline-block",
                            width: "50%"
                        }}
                    >
                        <Results totalYearly={this.state.overall} />
                    </div>
                </div>

                <div style={{ marginTop: "30px" }}>
                    <form>
                        <Cards
                            totalYearly={this.state.totalYearly}
                            getAllValues={this.getAllValues}
                            checkHomeless={this.checkHomeless}
                        />
                    </form>
                </div>
                <div />
            </div>
        );
    }
}

export default Main;
