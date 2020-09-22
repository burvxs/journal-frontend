import React from 'react';

const TaskItem = (props) => {
    return (
      <div className="taskItem">
        <p>{props.priorityLevel}</p>
        <p>{props.userTask}</p>
        <p>{props.solidifier}</p>
        <input type="checkbox" checked={props.isComplete}/>
      </div>
    );
}

export default TaskItem;
