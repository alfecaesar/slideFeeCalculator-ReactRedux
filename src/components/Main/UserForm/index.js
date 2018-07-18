import React from "react";
import Modal from "react-responsive-modal";
import { Button } from "@progress/kendo-react-buttons";

class UserForm extends React.Component {
    render() {
        return <Modal open={open} center style={style} showCloseIcon={false} />;
    }
}

export default UserForm;
