/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Button, Modal, Row } from "react-materialize";
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
      $('#addFormsModal').modal('close');
    }

    handleCancelRestaurant = () => {
      $('#addFormsModal').modal('close');
    }

    render() {
      const { restaurantNames } = this.state;
      return (
        <div>
          <Modal
            header='New Restaurant'
            id="addFormsModal"
            data-testid="addRestaurantModal"
            open={false}
            options={{ dismissible: true }}
            actions={<></>}
            trigger={
              <Button
                data-testid="addRestaurantButton"
                type='button'
                onClick={this.handleShowNewRestaurant}>
                            Add Restaurant
              </Button>
            }
          >
            <NewRestaurantForm
              onSave={this.handleAddRestaurant}
              onCancel={this.handleCancelRestaurant}
            />
          </Modal>
          <Row>
            <RestaurantList restaurants={restaurantNames}/>
          </Row>
        </div>);
    }
}
