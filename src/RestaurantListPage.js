import React, { Component } from 'react';
import { Button, Modal, Row } from "react-materialize";
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

    renderNewRestauranteForm = () => {
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
          <Modal
            header='New Restaurant'
            id="addFormsModal"
            trigger={
              <Button
                data-test="addRestaurantButton"
                type='button'
                onClick={this.handleShowNewRestaurant}>
                            Add Restaurant
              </Button>
            }
          >
            <NewRestaurantForm
              onSave={this.handleAddRestaurant}
            />
          </Modal>
          <Row>
            <RestaurantList restaurants={restaurantNames}/>
          </Row>
        </div>
      );
    }
}
