import React from "react";
import Modal from "react-responsive-modal";
import { Button } from "@progress/kendo-react-buttons";
import pdf from "../../../assets/pdf/Sliding_Scale_Calculator_Training_Handout.pdf";

const Help = ({ open, onCloseModal, style }) => {
    console.log(style);
    return (
        <div>
            <Modal open={open} center style={style} showCloseIcon={false}>
                <div style={{ textAlign: "center", margin: "20px" }}>
                    <h1 style={{ width: "600px" }}>
                        Sliding Scale Calculator Training Video
                    </h1>
                    <div
                        style={{
                            height: "300px",
                            width: "300x",
                            border: "1px solid black",
                            textAlign: "center"
                        }}
                    >
                        TUTORIAL VIDEO HERE
                    </div>
                    <div
                        className="text-container"
                        style={{ textAlign: "center", fontSize: "25px" }}
                    >
                        <a href={pdf} download>
                            Training Manual
                        </a>{" "}
                        <br />
                        <span>Need more help?</span>{" "}
                        <a href="mailto:support@naiacorp.com">Email Us!</a>{" "}
                        <br />
                        <Button
                            onClick={onCloseModal}
                            style={{ background: "#37AF81", color: "white" }}
                        >
                            Done
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Help;
