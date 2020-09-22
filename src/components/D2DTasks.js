import React from 'react';
import TaskItem from './TaskItem';

const D2DTasks = (props) => {
    const renderTasks = () => {
        if (props.tasks){
            return props.tasks.map((item) => {
                return (
                    <TaskItem
                        priorityLevel={item["priority_level"]}
                        userTask={item.task}
                        solidifier={item.solidifier}
                        isComplete={item.completed}
                        key={item.id}
                    />
                );
            });
        }
    }
    return (
      <React.Fragment>
        <div className="priorityLevel">Priority Level</div>
        <div className="date">Tuesday 22nd of September</div>
        <div className="solidifier">Solidifier</div>
        <div className="completed">Completed?</div>
        <input type="number" style={{ width: "30px", height: "20px" }} />
        <input type="text" />
        <input type="text" />
        <input type="checkbox" />
        {renderTasks()}
      </React.Fragment>
    );
}

export default D2DTasks;
