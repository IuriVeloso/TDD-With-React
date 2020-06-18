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

    renderNewRestauranteForm =() => {
        if (this.state.showNewRestaurantForm) {
            return (
                <NewRestaurantForm
                    onSave={this.handleAddRestaurant}
                />
            );
        }
    }

    render() {
        const { restaurantNames } = this.state;
        return (
            <div>
                <Row>
                    <Button data-test="addRestaurantButton" type='button' onClick={this.handleShowNewRestaurant}>
                    Add Restaurant
                    </Button>
                </Row>
                <Row>
                    {this.renderNewRestauranteForm()}
                </Row>
                <Row>
                    <RestaurantList restaurants={restaurantNames}/>
                </Row>
            </div>
        );
    }
}
