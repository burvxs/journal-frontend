import React, {useState, useEffect} from 'react';
import axios from "axios";

import { USER_TASKS_URL } from "../constants";

import TaskItem from './TaskItem';
import CreateTask from './CreateTask';

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
            params: { request : "D2D" },
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

    const renderTasks = () => {
        const renderArray = allD2Dtasks.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    <TaskItem
                        priorityLevel={item["priority_level"]}
                        userTask={item.task}
                        solidifier={item.solidifier}
                        isComplete={item.completed}
                        id={item.id}
                        key={item.id}
                    />
                </React.Fragment>
            );
        });
        return renderArray;
    }
    return (
      <div id="columnHeaders">
        <div className="completed"></div>
        <div className="date">Tasks</div>
        <div className="solidifier">Solidifier</div>
        <div className="priorityLevel">Priority Level</div>
        <CreateTask onCreate={passCreatedTask}/>
        {renderTasks()}
      </div>
    );
}

export default D2DTasks;
