/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Button, Modal, Row } from "react-materialize";
import NewDishForm from './newDishForm';
import DishList from "./dishList.js";

export default class RestaurantDetailsPage extends Component {
    state= {
      dishNames: [],
    }

    handleAddDish = (dishName) => {
      this.setState(state => ({
        dishNames: [
          dishName,
          ...state.dishNames,
        ],
      }));
      $('#addDishModal').modal('close');
    }

    render() {
      const { dishNames } = this.state;
      return (
        <div>
          <Modal
            id='addDishModal'
            header='New Dish'
            actions={[]}
            trigger={
              <Button data-testid='addDishButton'>
              Add Dish
              </Button>}
          >
            <NewDishForm onSave={this.handleAddDish}/>
          </Modal>
          <Row>
            <DishList dishNames={dishNames}/>
          </Row>
        </div>
      );
    }
}
