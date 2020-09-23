/*
    This component will be a parent component for other
    task sets
*/
import D2DTasks from './D2DTasks'
import CategoryList from "./CategoryList";
import React, {useState} from "react";

const Tasker = () => {
    const [currentComponent, setCurrentComponent] = useState(<D2DTasks/>)
    return (
        <div className="taskContainer">
            <CategoryList/>
            {currentComponent}
        </div>
    );
}

export default Tasker;
