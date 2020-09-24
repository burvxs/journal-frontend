import React, {useState, useEffect} from 'react';
import axios from "axios";

import { USER_TASKS_URL } from "../constants";
import {renderTasks, loadRequestedTasks, isSunday} from "../utils"

import ColumnHeader from './ColumnHeader';
import CreateTask from './CreateTask'

const D2DTasks = (props) => {
    const [createdTask, setCreatedTask] = useState({})
    const [allD2Dtasks, setAllD2DTasks] = useState([]);

    const passCreatedTask = (newTask) => {
        if (newTask !== undefined){
            setCreatedTask(newTask)
            setAllD2DTasks([...allD2Dtasks, createdTask])
        }
    }

    const ifSundayRedirectForReview = () => {
        if (isSunday()){
            props.history.push("/review")
        }
    }

    useEffect(() => {
        loadRequestedTasks({task_type : "D2D"}, setAllD2DTasks);
        ifSundayRedirectForReview();
    }, [createdTask]);


    return (
      <React.Fragment>
        <ColumnHeader />
        <CreateTask onCreate={passCreatedTask} taskType="D2D" />
        {renderTasks(allD2Dtasks)}
      </React.Fragment>
    );
}

export default D2DTasks;
