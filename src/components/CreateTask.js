import React, {useState} from 'react';
import {TASK_CREATE_URL} from '../constants'
import axios from 'axios'

const CreateTask = (props) => {
    const [state, setState] = useState({
        priorityLevel : 0,
        task : '',
        solidifier : ''
    })

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const validateInput = () => {
        console.log(state);
        if (state.priorityLevel === '' || state.solidifier === '' || state.task === ''){
            return false
        }else{
            return true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(validateInput());

        setTimeout(() => {
            if (validateInput() && props.taskType === "D2D") {
                axios.post(TASK_CREATE_URL, {
                    task: state.task,
                    solidifier: state.solidifier,
                    priorityLevel: state.priorityLevel,
                    global: false,
                })
                .then((res) => {
                    props.onCreate(res.data);
                    console.log("POST DATA: ", res.data);
                    e.submit();
                })
                .catch((err) => {
                    console.log(err);
                });
            }else if(validateInput() && props.taskType === "SUBLIST"){
                    axios.post(TASK_CREATE_URL, {
                        task: state.task,
                        solidifier: state.solidifier,
                        priorityLevel: state.priorityLevel,
                        subListId : props.listId,
                        global: false,
                    })
                    .then((res) => {
                    props.onCreate(res.data);
                    console.log("POST DATA: ", res.data);
                    e.submit();
                    })
                    .catch((err) => {
                    console.log(err);
                    });
            }
        }, 1000);
    }

    return (
      <React.Fragment>
        <form className="D2Dform" onSubmit={handleSubmit}>
          <input type="checkbox" readOnly />
          <input name="task" type="text" onChange={handleInput} />
          <input name="solidifier" type="text" onChange={handleInput} />
          <input
            type="text"
            name="priorityLevel"
            style={{ width: "30px", height: "20px" }}
            onChange={handleInput}
          />
          <button hidden type="submit"></button>
        </form>
      </React.Fragment>
    );
}

export default CreateTask;
