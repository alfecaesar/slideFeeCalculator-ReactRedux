import React, { Component } from "react";
import { Input } from "@progress/kendo-react-inputs";
import { DateInput } from "@progress/kendo-react-dateinputs";
import { AgGridReact } from "ag-grid-react";

import FontAwesome from "react-fontawesome";
import moment from "moment";
import isEmpty from "lodash.isempty";

import "./Grid.css";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";
class PatientGrid extends Component {
    constructor() {
        super();
        this.state = {
            gridData: [],
            id: 0,
            patientname: "",
            dob: new Date(),
            mrnumber: "",
            relationship: "",
            rowSelection: "multiple"
        };
    }

    changeDate = ({ value }) => {
        this.setState({ dob: value });
    };

    onChangeText = e => {
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    onAddPatient = e => {
        const { patientname, dob, mrnumber, relationship, id } = this.state;
        const dateMoment = moment.utc(dob).format("MM/DD/YYYY");
        const Id = id + 1;

        if (
            isEmpty(patientname) ||
            isEmpty(dateMoment) ||
            isEmpty(mrnumber) ||
            isEmpty(relationship)
        ) {
            alert("All fields are required");

            return false;
        }

        const data = {
            Id,
            PatientName: patientname,
            Dob: dateMoment,
            MRNumber: mrnumber,
            Relationship: relationship
        };

        this.gridApi.updateRowData({ add: [data] }); //update grid

        this.setState({
            gridData: [...this.state.gridData, data],
            patientname: "",
            dob: new Date(),
            mrnumber: "",
            relationship: "",
            id: Id
        });
    };

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    onRemoveSelected() {
        var selectedData = this.gridApi.getSelectedRows();
        var res = this.gridApi.updateRowData({ remove: selectedData });
    }

    render() {
        const { patientname, dob, mrnumber, relationship } = this.state;
        const columnDefs = [
            { headerName: "PatientName", field: "PatientName" },
            { headerName: "Date of Birth", field: "Dob" },
            { headerName: "MR #", field: "MRNumber" },
            {
                headerName: "Relationship To Head of Household",
                field: "Relationship"
            }
        ];

        return (
            <div>
                <button onClick={this.onRemoveSelected.bind(this)}>
                    Remove Selected
                </button>
                <br />
                <br />
                <div
                    className="ag-theme-balham"
                    style={{ width: "100%", height: "200px" }}
                >
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={this.state.gridData}
                        animateRows={true}
                        rowSelection={this.state.rowSelection}
                        onGridReady={this.onGridReady.bind(this)}
                    />
                </div>
                <br />

                <div
                    className="form-container"
                    style={{
                        display: "flex",
                        width: "110%"
                    }}
                >
                    <div
                        className="patientname-container"
                        style={{ display: "inline-block", width: "25%" }}
                    >
                        <Input
                            label="Patient Name"
                            name="patientname"
                            value={patientname}
                            onChange={this.onChangeText}
                        />
                    </div>
                    <div
                        className="dob-container"
                        style={{ display: "inline-block", width: "25%" }}
                    >
                        <DateInput
                            label="Date of birth"
                            value={dob}
                            onChange={this.changeDate}
                        />
                    </div>
                    <div
                        className="mrnumber-container"
                        style={{ display: "inline-block", width: "25%" }}
                    >
                        <Input
                            label="MR #"
                            value={mrnumber}
                            width="100%"
                            name="mrnumber"
                            onChange={this.onChangeText}
                        />
                    </div>

                    <div
                        className="relationship-container"
                        style={{ display: "inline-block", width: "25%" }}
                    >
                        <Input
                            label="Relationship"
                            value={relationship}
                            width="100%"
                            name="relationship"
                            onChange={this.onChangeText}
                        />
                    </div>
                    <div
                        className="addpatient-container"
                        style={{ display: "inline-block", width: "10%" }}
                    >
                        <FontAwesome
                            name="plus-circle"
                            style={{
                                fontSize: "30px",
                                cursor: "pointer",
                                marginTop: "15px"
                            }}
                            onClick={this.onAddPatient}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default PatientGrid;
