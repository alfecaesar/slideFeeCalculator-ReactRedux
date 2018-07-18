import React from "react";
import Modal from "react-responsive-modal";

import { Button } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { DatePicker } from '@progress/kendo-react-dateinputs';

import FontAwesome from "react-fontawesome";
import './UserForm.css';
class UserForm extends React.Component {
    render() {
        const {
            firstname,
            lastname,
            dob,
            mrnumber,
            gender,
            relationship,
            onChangeText,
            changeDate,
            open,
            style,
            onAddPatient
        } = this.props;

        return (
            <Modal open={open} center style={style} showCloseIcon={true}>
                <div
                    className="form-container"
                    style={{
                        width: "500px"
                    }}
                >
                    <div className="firstname-container">
                        <label>First Name:</label>
                        <br />
                        <Input
                            name="firstname"
                            value={firstname}
                            onChange={onChangeText}
                            style={{width:"100%"}}
                        />
                    </div>
                    <br />
                    <div className="lastname-container">
                        <label>Last Name:</label>
                        <br />
                        <Input
                            name="lastname"
                            value={lastname}
                            onChange={onChangeText}
                            style={{width:"100%"}}
                        />
                    </div>
                    <br />
                    <div className="mrnumber-container">
                        <label>MR #:</label>
                        <br />
                        <Input
                            value={mrnumber}
                            name="mrnumber"
                            onChange={onChangeText}
                            style={{width:"100%"}}
                        />
                    </div>
                    <br />
                    <div className="gender-container">
                        <label>Gender:</label>
                        <br />
                        <ComboBox name="gender" data={['Male', 'Female']} value={gender} style={{width:"100%"}} onChange={onChangeText}/>
                    </div>
                    <br />
                    <div className="dob-container">
                        <label>Date of Birth:</label>
                        <DatePicker name="dob" onChange={changeDate}/>
                        <br />
                    </div>
                    
                    <br />
                    <div className="relationship-container">
                        <label>Relationship:</label>
                        <br />
                        <ComboBox name="relationship" value={relationship} onChange={onChangeText} data={["Head", "Father", "Mother", "Daughter", "Son", "Grandfather", "Grandmother", "Grandchild", "Cousin"]} style={{width:"100%"}}/>
                    </div>
                    <br/>
                    <Button primary onClick={onAddPatient}>Submit</Button>
                </div>
            </Modal>
        );
    }
}

export default UserForm;
