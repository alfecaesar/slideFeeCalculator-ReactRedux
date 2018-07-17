import React from "react";
import Modal from "react-responsive-modal";
import { Select } from "antd";

const Option = Select.Option;

const IncomeSource = ({ open, onCloseModal, style }) => {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Modal open={open} center style={style} onClose={onCloseModal}>
            <label>Select Income Source:</label>
            <br />
            <Select
                mode="multiple"
                style={{ width: "500px" }}
                onChange={handleChange}
            >
                <Option value="income1">Income source 1</Option>
                <Option value="income2">Income source 2</Option>
                <Option value="income3">Income source 3</Option>
                <Option value="income4">Income source 4</Option>
                <Option value="income5">Income source 5</Option>
                <Option value="income6">Income source 6</Option>
            </Select>
            <br />
            <br />
            <button>Submit</button>
        </Modal>
    );
};

export default IncomeSource;
