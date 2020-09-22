import React, {useState} from 'react';

const TaskItem = (props) => {
    const [isComplete, setIsComplete] = useState(props.isComplete)

    const handleCompletion = (e) => {
        setIsComplete(!isComplete)
    }

    return (
      <React.Fragment>
          <input
            type="checkbox"
            checked={isComplete || false}
            onChange={handleCompletion}
          />
          <p>{props.userTask}</p>
          <p>{props.solidifier}</p>
          <p>{props.priorityLevel}</p>
      </React.Fragment>
    );
}

export default TaskItem;
