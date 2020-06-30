import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Col, Row } from "react-materialize";

import store from "../store/index";
import RestaurantListPage from './RestaurantListPage/index';
import RestaurantDetailsPage from './RestaurantDetails/index';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Row>
            <Col s={12} m={10} l={8} offset={'m1 l2'}>
              <Route path='/' exact component={RestaurantListPage}/>
              <Route path='/restaurants/:name' component={RestaurantDetailsPage}/>
            </Col>
          </Row>
        </Router>
      </Provider>
    );
  }
}
