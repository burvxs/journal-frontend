import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SUBLIST_GET_URL} from '../constants'

const SubCategoryList = (props) => {
    const [list, setList] = useState([]);

    const fetchSubList = () => {
        axios.get(SUBLIST_GET_URL)
        .then((res) => {
            console.log(res.data);
            setList(res.data["sub_list"]);
        })
        .catch((err) => {
            console.warn(err);
        });
    }

    useEffect(() => {
        fetchSubList();
    }, []);

    const handleClick = (e) => {
        props.history.push(`/category_sub_list/${e.target.id}`)
    }

    const renderList = () => {
        return list.map((item) => {
            return (
                <li onClick={handleClick} key={item.id} id={item.id}>
                    {item.title}
                </li>
            );
        });
    };
    return (
        <div className="sublistWrapper">
        <ul>{renderList()}</ul>
        </div>
    );
}

export default SubCategoryList;
