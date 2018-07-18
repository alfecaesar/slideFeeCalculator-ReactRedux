import React, { Component } from "react";

import { AgGridReact } from "ag-grid-react";
import { Button } from "@progress/kendo-react-buttons";

import UserForm from "../UserForm";

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
            firstname: "",
            lastname:"",
            gender:"",
            dob: new Date(),
            mrnumber: "",
            relationship: "",
            rowSelection: "multiple",
            openUserForm: false
        };
    }

    changeDate = ({ value }) => {
        this.setState({ dob: value });
    };

    onChangeText = e => {
        console.log(e);
        this.setState({
            [e.target.props.name]: e.target.value
        });
    };

    onAddPatient = e => {
        const { firstname,lastname, dob, mrnumber, relationship, id,gender } = this.state;
        const dateMoment = moment.utc(dob).format("MM/DD/YYYY");
        const Id = id + 1;
        console.log("firstname:" + firstname );
        console.log("lastname:" + lastname );
        console.log("dob:" + dob );
        console.log("mrnumber:" + mrnumber );
        console.log("relationship:" + relationship );
        console.log("gender:" + gender );
        if (
            isEmpty(firstname) ||
            isEmpty(lastname) ||
            isEmpty(dateMoment) ||
            isEmpty(mrnumber) ||
            isEmpty(relationship) || isEmpty(gender)
        ) {
            alert("All fields are required");

            return false;
        }

        const data = {
            Id,
            PatientName: firstname +" "+ lastname,
            Dob: dateMoment,
            MRNumber: mrnumber,
            Relationship: relationship
        };

        this.gridApi.updateRowData({ add: [data] }); //update grid

        this.setState({
            gridData: [...this.state.gridData, data],
            firstname: "",
            lastname:"",
            gender:"",
            dob: new Date(),
            mrnumber: "",
            relationship: "",
            id: Id,
            openUserForm: false
        });
    };

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    onRemoveSelected() {
        var selectedData = this.gridApi.getSelectedRows();
        this.gridApi.updateRowData({ remove: selectedData });
    }

    onSelectionChanged = () => {
        var selectedRows = this.gridApi.getSelectedRows();
        if (!isEmpty(selectedRows)) {
            console.log(selectedRows);
            console.log(selectedRows[0].Id);
            console.log(selectedRows[0].PatientName);
            this.setState({ open: true });
        }
    };

    onCloseModal = () => {
        this.setState({ openUserForm: false });
    };

    onOpenModal = () => {
        this.setState({ openUserForm: true });
    };

    render() {
        const {
            firstname,
            lastname,
            gender,
            dob,
            mrnumber,
            relationship,
            openUserForm
        } = this.state;
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
                <UserForm
                    firstname={firstname}
                    lastname={lastname}
                    gender={gender}
                    dob={dob}
                    mrnumber={mrnumber}
                    relationship={relationship}
                    open={openUserForm}
                    onAddPatient={this.onAddPatient}
                    onChangeText={this.onChangeText}
                    changeDate={this.changeDate}
                />
                <button onClick={this.onOpenModal}>Add Patient</button>

                <button
                    onClick={this.onRemoveSelected.bind(this)}
                    style={{ float: "right" }}
                >
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
                        onSelectionChanged={this.onSelectionChanged}
                    />
                </div>
                <br />
            </div>
        );
    }
}

export default PatientGrid;
