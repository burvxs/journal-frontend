/*
    This component will be a parent component for other
    task sets
*/
import D2DTasks from './D2DTasks'
import React from "react";

const Tasker = () => {
    return (
        <div className="taskContainer">
            <D2DTasks/>
        </div>
    );
}

export default Tasker;
