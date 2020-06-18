import React, { Component } from 'react';
import { Button, Col, Row } from "react-materialize";
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default class RestaurantListPage extends Component {
    state = { restaurantNames: [],
        showNewRestaurantForm: false }

    handleAddRestaurant = (newRestaurant) => {
        this.setState(state => ({
            showNewRestaurantForm: false,
            restaurantNames: [
                newRestaurant,
                ...state.restaurantNames,
            ],
        }));
    }

    handleShowNewRestaurant = () => {
        this.setState({ showNewRestaurantForm: true });
    }

    render() {
        const { restaurantNames, showNewRestaurantForm } = this.state;
        return (
            <div>
                <Row>
                    <Button data-test="addRestaurantButton" type='button' onClick={this.handleShowNewRestaurant}>
                    Add Restaurant
                    </Button>
                </Row>
                <Row>
                    {showNewRestaurantForm && <NewRestaurantForm
                        onSave={this.handleAddRestaurant}
                    />}
                </Row>
                <Row>
                    <RestaurantList restaurants={restaurantNames}/>
                </Row>
            </div>
        );
    }
}
