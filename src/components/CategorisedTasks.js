import React, {useState, useEffect} from 'react';
import {renderTasks, loadRequestedTasks} from '../utils'
import {CATEGORY_INDEX_URL} from '../constants'
import ColumnHeader from "./ColumnHeader";
import CreateTask from "./CreateTask";

const CategorisedTasks = (props) => {
    const [associatedTasks, setAssociatedTasks] = useState([]);
    let isMounted = false;

    const fetchAssociatedTasks = () => {
        if (isMounted) {
            loadRequestedTasks(
            {
                task_type: "CATEGORISED",
                list_id: props.match.params.listId,
            },
            setAssociatedTasks
            );
        }
    }

    useEffect(() => {
        isMounted = true   
        fetchAssociatedTasks();

        return () => {
            isMounted = false
        }
    }, [])

    useEffect(() => {
        isMounted = true;
        fetchAssociatedTasks();

        return () => {
          isMounted = false;
        };
    }, [props.match.params.listId])

    return (
        <div className="taskContainer">
            <ColumnHeader/>
            <CreateTask taskType="SUBLIST" listId={props.match.params.listId}/>
            {renderTasks(associatedTasks)}
        </div>
    );
}

export default CategorisedTasks;
