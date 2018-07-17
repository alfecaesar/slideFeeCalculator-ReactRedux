import React, { Component } from "react";

import AddSource from "./AddSource";
import Weekly from "./Weekly";
import BiWeekly from "./BiWeekly";
import Monthly from "./Monthly";
import YearToDate from "./YearToDate";
import TaxForm1040 from "./TaxForm1040";
import TaxForm1040A from "./TaxForm1040A";
import TaxForm1040EZ from "./TaxForm1040EZ";
import Unemployed from "./Unemployed";
import Homeless from "./Homeless";
import Hourly from "./Hourly";

import Container from "../Common/Container";
import "./Cards.css";
class Cards extends Component {
    constructor() {
        super();

        this.state = {
            numChildren: 0,
            selectedIncome: "",
            children: [],
            displayAdd: true
        };
    }

    onRemoveSource = e => {
        const removeSource = this.state.children.slice();
        removeSource.splice(e, 1);
        this.setState({
            children: removeSource
        });

        console.log(this.state.children);
    };

    onRenderCards = () => {
        const { children } = this.state;

        return children.map(function(card, i) {
            console.log(i);
            return (
                <Container
                    onRemoveSource={this.onRemoveSource}
                    key={i}
                    counter={i}
                >
                    {card.child}
                </Container>
            );
        }, this);
    };

    onChangeSource = e => {
        let newChild = {};
        let displayAdd = true;
        switch (e.target.value) {
            case "Weekly":
                newChild = (
                    <Weekly
                        number={this.state.numChildren + 1}
                        totalYearly={this.props.totalYearly}
                        getAllValues={this.props.getAllValues}
                    />
                );
                break;
            case "Bi-Weekly":
                newChild = (
                    <BiWeekly
                        number={this.state.numChildren + 1}
                        totalYearly={this.props.totalYearly}
                        getAllValues={this.props.getAllValues}
                    />
                );
                break;
            case "Monthly":
                newChild = (
                    <Monthly
                        number={this.state.numChildren + 1}
                        totalYearly={this.props.totalYearly}
                        getAllValues={this.props.getAllValues}
                    />
                );
                break;
            case "Year to Date":
                newChild = (
                    <YearToDate
                        number={this.state.numChildren + 1}
                        totalYearly={this.props.totalYearly}
                        getAllValues={this.props.getAllValues}
                    />
                );
                break;
            case "Tax Form 1040":
                newChild = (
                    <TaxForm1040
                        number={this.state.numChildren + 1}
                        totalYearly={this.props.totalYearly}
                        getAllValues={this.props.getAllValues}
                    />
                );
                break;
            case "Tax Form 1040A":
                newChild = (
                    <TaxForm1040A
                        number={this.state.numChildren + 1}
                        totalYearly={this.props.totalYearly}
                        getAllValues={this.props.getAllValues}
                    />
                );
                break;
            case "Tax Form 1040EZ":
                newChild = (
                    <TaxForm1040EZ
                        number={this.state.numChildren + 1}
                        totalYearly={this.props.totalYearly}
                        getAllValues={this.props.getAllValues}
                    />
                );
                break;
            case "Unemployed":
                newChild = (
                    <Unemployed
                        number={this.state.numChildren + 1}
                        totalYearly={this.props.totalYearly}
                        getAllValues={this.props.getAllValues}
                    />
                );
                break;
            case "Homeless":
                newChild = (
                    <Homeless
                        number={this.state.numChildren + 1}
                        totalYearly={this.props.totalYearly}
                        getAllValues={this.props.getAllValues}
                    />
                );
                displayAdd = false;
                this.props.checkHomeless(true);
                break;
            case "Hourly":
                newChild = (
                    <Hourly
                        number={this.state.numChildren + 1}
                        totalYearly={this.props.totalYearly}
                        getAllValues={this.props.getAllValues}
                    />
                );
                break;
            default:
                break;
        }
        let childs = {
            child: newChild,
            id: this.state.numChildren + 1
        };

        this.setState({
            selectedIncome: e.target.value,
            numChildren: this.state.numChildren + 1,
            children: [...this.state.children, childs],
            displayAdd
        });
    };

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexFlow: "row wrap"
                }}
            >
                {this.onRenderCards()}

                {this.state.displayAdd ? (
                    <AddSource onChangeSource={this.onChangeSource} />
                ) : null}
            </div>
        );
    }
}

export default Cards;
