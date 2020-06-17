import React, { Component } from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default class RestaurantListPage extends Component {
    state = { restaurantNames: [] }

    handleAddRestaurant = (newRestaurant) => {
        this.setState(state => ({
            restaurantNames: [
                newRestaurant,
                ...state.restaurantNames,
            ],
        }));
    }

    render() {
        const { restaurantNames } = this.state;
        return (
            <div>
                <button data-test="addRestaurantButton" type='button'>
                    Add Restaurant
                </button>
                <NewRestaurantForm
                    onSave={this.handleAddRestaurant}
                />
                <RestaurantList restaurants={restaurantNames}/>
            </div>
        );
    }
}
