import React, { Component } from "react";

import Grid from "./Grid/";
import Results from "./Results/";
import Cards from "./Cards/";
class Main extends Component {
    constructor() {
        super();

        this.state = {
            totalYearly: 0,
            overall: 0
        };
    }

    getAllValues = value => {
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
        }
    };

    onCompute = () => {
        const overall = this.state.overall + this.state.totalYearly;
        console.log("<<<labase:" + overall + ">>>>" + this.state.totalYearly);
        return overall;
    };
    render() {
        return (
            <div
                className="sliding-fee-container"
                style={{ marginLeft: "20px", marginRight: "20px" }}
            >
                <h1>Sliding Scale Fee Calculator</h1>
                <div style={{ width: "100%", display: "inline-block" }}>
                    <div
                        className="grid-container"
                        style={{
                            display: "inline-block",
                            verticalAlign: "top",
                            width: "48%"
                        }}
                    >
                        <Grid />
                    </div>

                    <div
                        className="results-container"
                        style={{
                            display: "inline-block",
                            verticalAlign: "top",
                            float: "right",
                            width: "48%"
                        }}
                    >
                        <Results totalYearly={this.onCompute()} />
                    </div>
                </div>

                <div style={{ marginTop: "30px" }}>
                    <form>
                        <Cards
                            totalYearly={this.state.totalYearly}
                            getAllValues={this.getAllValues}
                        />
                    </form>
                </div>
                <div />
            </div>
        );
    }
}

export default Main;
