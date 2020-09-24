import React from 'react';
import D2DTasks from './components/D2DTasks';
import CategorisedTasks from "./components/CategorisedTasks";
import SubCategoryList from "./components/SubCategoryList";
import StatSheet from "./components/StatSheet";
import CategoryList from "./components/CategoryList";
import WeeklyReview from "./components/WeeklyReview";
import {checkAuth, generateCurrentDateString, isSunday} from './utils';
import Login from "./components/Login";
import axios from 'axios';
import NavBar from './components/NavBar';
import {HashRouter as Router, Route} from 'react-router-dom';
import FloatingTasks from './components/FloatingTasks';

const Routes = () => {
    const setDefaultHeaders = () => {
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
            "jwt"
        )}`;
    };
    const onlyRenderReviewRouteIfSunday = () => {
        if (isSunday()){
            return (
              <Route
                exact
                path="/review"
                render={(props) => {
                  if (!checkAuth) {
                    props.history.push("/login");
                  } else {
                    return (
                      <div>
                        <WeeklyReview {...props}/>
                      </div>
                    );
                  }
                }}
              />
            );
        }
    }
    setDefaultHeaders();
    return (
      <Router>
        <div>
            <Route path="/" component={NavBar}/>
            {onlyRenderReviewRouteIfSunday()}
            <Route path="/" render={(props) => {
                if (!checkAuth()) {
                    props.history.push("/login");
                }else{
                    return (
                        <div className="statSheet">
                            <StatSheet {...props}/>
                        </div>
                    )
                }
            }}/>
            <Route exact path="/floaters" render={(props) => {
                if (!checkAuth()) {
                    props.history.push("/login");
                } else {
                    return (
                    <div className="contentWrapper">
                        <div className="taskContainer">
                            <FloatingTasks {...props} />
                        </div>
                        <div>
                            <CategoryList {...props} />
                        </div>
                    </div>
                    );
                }
            }}/>
            <Route exact path="/D2D" render={(props) => {
                if (!checkAuth()) {
                    props.history.push("/login");       
                }else{
                    return (
                        <div className="contentWrapper">
                            <h5>{generateCurrentDateString()}</h5>
                            <div className="taskContainer">
                                <D2DTasks {...props} />
                            </div>
                            <div>
                                <CategoryList {...props} />
                            </div>
                        </div>
                    );
                }

            }} />
            <Route exact path="/category_sub_list/:category_id" render={(props) => {
                if (!checkAuth()){
                    props.history.push("/login");
                }else{
                    return (
                      <div className="contentWrapper">
                        <div className="taskContainer">
                          <D2DTasks {...props} />
                        </div>
                        <div>
                          <CategoryList {...props} />
                          <SubCategoryList {...props}/>
                        </div>
                      </div>
                    );
                }

            }}/>
            <Route exact path="/category_sub_list/:category_id/:listId" render={(props) => {
                if (!checkAuth()) {
                    props.history.push("/login");
                }else{
                    return (
                      <div>
                        <div className="contentWrapper">
                          <div className="taskContainer">
                            <CategorisedTasks {...props} />
                          </div>
                          <div>
                            <CategoryList {...props} />
                            <SubCategoryList {...props} />
                          </div>
                        </div>
                      </div>
                    );
                }
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
