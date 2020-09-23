import React from 'react';
import D2DTasks from './components/D2DTasks';
import CategorisedTasks from "./components/CategorisedTasks";
import SubCategoryList from "./components/SubCategoryList";
import CategoryList from "./components/CategoryList";
import Login from "./components/Login";
import axios from 'axios'
import NavBar from './components/NavBar'
import {HashRouter as Router, Route} from 'react-router-dom';

const Routes = () => {
    const setDefaultHeaders = () => {
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
            "jwt"
        )}`;
    };
    setDefaultHeaders();
    return (
      <Router>
        <div>
            <Route path="/" component={NavBar}/>
            <Route exact path="/D2D" render={(props) => {
                if (localStorage.getItem("jwt") === "null") {
                    props.history.push("/login");
                    return;
                }
                return (
                    <div>
                        <div className="taskContainer">
                            <D2DTasks {...props}/>
                        </div>
                        <div>
                            <CategoryList {...props}/>
                        </div>
                    </div>
                )
            }} />
            <Route exact path="/category_sub_list" render={(props) => {
                if (localStorage.getItem("jwt") === "null"){
                    props.history.push("/login");
                    return;
                }
                return ( 
                    <div>
                        <SubCategoryList {...props}/>
                        <CategoryList {...props}/>
                    </div>
                )
            }}/>
            <Route exact path="/category_sub_list/:listId" render={(props) => {
                if (localStorage.getItem("jwt") === "null") {
                    props.history.push("/login");
                    return;
                }
                return (
                    <div>
                    <CategorisedTasks {...props} />
                    <CategoryList {...props} />
                    </div>
                );
            }}/>
            <Route
                exact
                path="/categorised/:listId"
                component={CategorisedTasks}
            />
            <Route
                exact
                path="/login"
                component={Login}
            />
        </div>
      </Router>
    );
}

export default Routes;
