import React from "react";
import FontAwesome from "react-fontawesome";
import { Tooltip } from "antd";

const Container = ({ children, counter, onRemoveSource }) => {
    return (
        <div>
            <Tooltip placement="bottom" title="Remove">
                <FontAwesome
                    name="minus"
                    style={{
                        float: "right",
                        zIndex: "999999",
                        marginTop: "10px",
                        marginRight: " 20px",
                        position: "relative",
                        fontSize: "25px",
                        cursor: "pointer"
                    }}
                    onClick={() => onRemoveSource(counter)}
                />
            </Tooltip>
            <div> {children}</div>
        </div>
    );
};

export default Container;
