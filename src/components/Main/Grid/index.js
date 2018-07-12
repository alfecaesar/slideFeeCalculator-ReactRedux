import React, { Component } from "react";
import { Card } from "antd";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

import { Button } from "@progress/kendo-react-buttons";

import patients from "./patient.json";
import "./Grid.css";
class PatientGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridData: patients
        };
    }
    render() {
        return (
            <div>
                <Grid data={this.state.gridData}>
                    <Column field="PatientName" title="PatientName" />
                    <Column field="Dob" title="Date of Birth" />
                    <Column field="MRNumber" title="MR #" />
                    <Column
                        field="Relationship"
                        title="Relationship To Head of Household"
                        width="250px"
                    />
                </Grid>
            </div>
        );
    }
}

export default PatientGrid;
