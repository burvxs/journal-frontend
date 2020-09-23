import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {CATEGORY_INDEX_URL } from "../constants";

const CategoryList = (props) => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = () => {
        axios
        .get(CATEGORY_INDEX_URL)
        .then((res) => {
            setCategories(res.data["user_categories"]);
            console.log(res.data);
        })
        .catch((err) => {
            console.warn(err);
        });
    };
    const handleItemClick = (e) => {
        props.history.push(`/category_sub_list`)
    }
    const renderList = () => {
        if(Array.isArray(categories)){
            return categories.map((c) => {
                return <li onClick={handleItemClick} id={c.id} key={c.id}>{c.title}</li>;
            });
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])
    return (
        <div className="categoryList">
            <h3>Categories</h3>
            <ul>
                {renderList()}
            </ul>
        </div>
    );
}

export default CategoryList;
