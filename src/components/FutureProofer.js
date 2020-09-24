import React, {useState, useEffect} from 'react';
import {renderTasks, loadRequestedTasks} from '../utils'

const FutureProofer = () => {
    const [proofers, setProofers] = useState([]);

    useEffect(() => {
        loadRequestedTasks({
            task_type : "PROOFERS"
        })
    });

    return (
        <div>
            
        </div>
    );
}

export default FutureProofer;
