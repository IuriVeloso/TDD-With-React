/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Row } from "react-materialize";
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

import { addRestaurant, loadRestaurants } from 'src/store/restaurant/actions';

class RestaurantListPage extends Component {
  state = { restaurantNames: [] }

  componentDidMount() {
    this.props.loadRestaurants();
  }

    handleAddRestaurant = (newRestaurant) => {
      this.props.addRestaurant(newRestaurant);
      $('#addFormsModal').modal('close');
    }

    handleCancelRestaurant = () => {
      $('#addFormsModal').modal('close');
    }

    render() {
      const { restaurants } = this.props;
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
            <RestaurantList restaurants={restaurants}/>
          </Row>
        </div>);
    }
}

const mapStateToProps = (state) => ({ restaurants: state.restaurants });

const mapDispatchToProps = { addRestaurant, loadRestaurants };

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListPage);
