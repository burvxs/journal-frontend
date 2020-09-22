import React, {useState} from 'react';

const TaskItem = (props) => {
    const [isComplete, setIsComplete] = useState(props.isComplete)
    const handleCompletion = (e) => {
        setIsComplete(e.target.value)
    }
    return (
      <React.Fragment>
        <p>{props.priorityLevel}</p>
        <p>{props.userTask}</p>
        <p>{props.solidifier}</p>
        <input type="checkbox" checked={isComplete} onChange={handleCompletion}/>
      </React.Fragment>
    );
}

export default TaskItem;
