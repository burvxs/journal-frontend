import React, {useState, useEffect} from 'react';
import axios from "axios";

import { USER_TASKS_URL } from "../constants";
import {renderTasks} from "../utils"

import ColumnHeader from './ColumnHeader';
import CreateTask from './CreateTask'

const D2DTasks = () => {
    const [createdTask, setCreatedTask] = useState({})
    const [allD2Dtasks, setAllD2DTasks] = useState([]);

    const passCreatedTask = (newTask) => {
        if (newTask !== undefined){
            setCreatedTask(newTask)
            setAllD2DTasks([...allD2Dtasks, createdTask])
        }
    }
    const loadD2DTasks = () => {
        axios
        .get(USER_TASKS_URL, {
            params: { task_type : "D2D" },
        })
        .then((res) => {
            console.log(res)
            setAllD2DTasks([...res.data["requested_task_set"]])
        })
        .catch((err) => console.warn(err));
    };

    useEffect(() => {
        loadD2DTasks("D2D");
    }, [createdTask]);

    return (
      <div className="taskListWrapper">
        <ColumnHeader />
        <CreateTask onCreate={passCreatedTask}/>
        {renderTasks(allD2Dtasks)}
      </div>
    );
}

export default D2DTasks;
