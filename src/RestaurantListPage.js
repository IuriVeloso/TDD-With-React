import React, { Component } from 'react';
import { Button } from "react-materialize";
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
                <Button data-test="addRestaurantButton" type='button' onClick={this.handleShowNewRestaurant}>
                    Add Restaurants
                </Button>
                {showNewRestaurantForm && <NewRestaurantForm
                    onSave={this.handleAddRestaurant}
                />}
                <RestaurantList restaurants={restaurantNames}/>
            </div>
        );
    }
}
