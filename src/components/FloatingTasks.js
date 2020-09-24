import React, {useEffect, useState} from 'react';
import ColumnHeader from "./ColumnHeader";
import CreateTask from "./CreateTask";
import {renderTasks, loadRequestedTasks} from '../utils'

const FloatingTasks = () => {
    const [floaters, setFloaters] = useState([]);

    useEffect(() => {
        loadRequestedTasks({
            task_type : "FLOATERS"
        }, setFloaters);
    }, []);

    return (
        <React.Fragment>
            <ColumnHeader />
            <CreateTask taskType="FLOATER" />
            {renderTasks(floaters)}
        </React.Fragment>
    );
}

export default FloatingTasks;
