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
      console.log('oi');
      // eslint-disable-next-line no-undef
      $('#addFormsModal').modal('close');
    }

    render() {
      const { restaurantNames } = this.state;
      return (
        <div>
          <Modal
            header='New Restaurant'
            id="addFormsModal"
            data-test="addRestaurantModal"
            open={false}
            options={{ dismissible: true }}
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
        </div>);
    }
}
