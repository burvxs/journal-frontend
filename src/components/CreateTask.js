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
        setTimeout(() => {
            if (validateInput()) {
                axios.post(TASK_CREATE_URL, {
                    task: state.task,
                    solidifier: state.solidifier,
                    priorityLevel: state.priorityLevel,
                    global: false,
                })
                .then((res) => {
                    props.onCreate(res.data);
                    console.log("POST DATA: ", res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            }
        }, 5000);
    }
    const validateInput = () => {
        if (state.priorityLevel == 0 || typeof(state.priorityLevel) !== 'number' || state.solidifier == '' || state.task == ''){
            return false
        }else{
            return true
        }
    }
    return (
      <React.Fragment>
        <input type="checkbox" readOnly/>
        <input name="task" type="text" onChange={handleInput} />
        <input name="solidifier" type="text" onChange={handleInput}/>
        <input
          type="text"
          name="priorityLevel"
          style={{ width: "30px", height: "20px" }}
          onChange={handleInput}
        />
      </React.Fragment>
    );
}

export default CreateTask;
