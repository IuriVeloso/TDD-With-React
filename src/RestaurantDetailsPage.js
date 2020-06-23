/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Modal, Row } from "react-materialize";
import NewDishForm from './newDishForm';
import DishList from "./dishList.js";

import { addDish } from './store/dishes/actions';

class RestaurantDetailsPage extends Component {
    state= {
      dishes: [],
    }

    handleAddDish = (dishName) => {
      const restaurantName = this.props.match.params.name;

      this.props.addDish({ restaurantName, dishName });
      $('#addDishModal').modal('close');
    }

    render() {
      const { dishes } = this.props;
      const restaurantName = this.props.match.params.name;
      const restaurantDishes = dishes[restaurantName] || [];

      return (
        <div>
          <Link data-testid='backButton' to='/'>
            Back
          </Link>
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
            <DishList
              restaurantName={restaurantName}
              dishNames={restaurantDishes}
            />
          </Row>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  dishes: state.dishes,
});

const mapDispatchToProps = {
  addDish,
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetailsPage);
