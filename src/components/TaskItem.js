import React, {useState, useEffect} from 'react';
import {TASK_UPDATE_URL} from '../constants'
import axios from 'axios';

const TaskItem = (props) => {
    const [isComplete, setIsComplete] = useState(props.isComplete);
    const [onCompleteClass, setOnCompleteClass] = useState();

    const handleCompletion = (e) => {
        setIsComplete(!isComplete);
        !isComplete 
        ? setOnCompleteClass("completed")
        : setOnCompleteClass('');

        axios.patch(`${TASK_UPDATE_URL}/${props.id}`, {
            "is_complete" : JSON.stringify(!isComplete)
        })
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err))
        console.log(isComplete);
    }
    
    useEffect(() => {
        props.isComplete
        ? setOnCompleteClass("completed")
        : setOnCompleteClass("");
    }, [props.isComplete]);

    return (
      <div className="itemWrapper">
        <input
          type="checkbox"
          checked={isComplete || false}
          onChange={handleCompletion}
          className={`${onCompleteClass} `}
        />
        <p className={`${onCompleteClass} item`}>{props.userTask}</p>
        <p className={`${onCompleteClass} item`}>{props.solidifier}</p>
        <p className={`${onCompleteClass} item`}>{props.priorityLevel}</p>
      </div>
    );
}

export default TaskItem;
