import React, { Component } from 'react';
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
                <button data-test="addRestaurantButton" type='button' onClick={this.handleShowNewRestaurant}>
                    Add Restaurant
                </button>
                {showNewRestaurantForm && <NewRestaurantForm
                    onSave={this.handleAddRestaurant}
                />}
                <RestaurantList restaurants={restaurantNames}/>
            </div>
        );
    }
}
