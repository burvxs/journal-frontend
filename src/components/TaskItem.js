import React, {useState, useEffect} from 'react';

const TaskItem = (props) => {
    const [isComplete, setIsComplete] = useState(props.isComplete);
    const [onCompleteClass, setOnCompleteClass] = useState();

    const handleCompletion = (e) => {
        setIsComplete(!isComplete);
        !isComplete 
        ? setOnCompleteClass("completed")
        : setOnCompleteClass('')
    }
    useEffect(() => {
        props.isComplete
        ? setOnCompleteClass("completed")
        : setOnCompleteClass("");
    }, [])
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
