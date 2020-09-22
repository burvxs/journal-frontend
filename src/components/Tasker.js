/*
    This component will be a parent component for other
    task sets
*/
import D2DTasks from './D2DTasks'
import { USER_TASKS_URL } from "../constants";
import axios from 'axios'
import React, { useState, useEffect } from "react";

const Tasker = () => {
    const [userD2DTasks, setUserD2DTasks] = useState([]);

    const loadRequestedUserTasks = (request) => {       
        axios.get(USER_TASKS_URL, {
           params: {request}
        })
        .then((res) => setUserD2DTasks(res.data))
        .catch((err) => console.warn(err));
    }

    useEffect(() => {
        loadRequestedUserTasks("D2D");
    }, []);

    return (
        <div className="taskContainer">
            <D2DTasks tasks={userD2DTasks["requested_task_set"]}/>
        </div>
    );
}

export default Tasker;
