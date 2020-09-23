import React, {useState, useEffect} from 'react';
import { CATEGORY_INDEX_URL } from "../constants";
import axios from 'axios'

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(CATEGORY_INDEX_URL)
        .then((res) => {
            setCategories(res.data["user_categories"]);
            console.log(res.data);
        })
        .catch((err) => {
            console.warn(err)
        });
    }, []);

    const renderList = () => {
        if(Array.isArray(categories)){
            return categories.map((c) => {
                return <li key={c.id}>{c.title}</li>;
            });
        }
    }
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
