import React, { Component } from 'react';
import { Button, TextInput, Row } from "react-materialize";
import { Formik } from 'formik';

export default class newDishForm extends Component {
    handleSave=(values) => {
      const { dishName } = values;
      const { onSave } = this.props;
      onSave(dishName);
      // resetForm();
    }

  renderForm = ({
    values,
    handleChange,
    handleSubmit,
  }) => (
    <form onSubmit={handleSubmit}>
      <Row>
        <TextInput s={12}
          id='dishName'
          label='Dish Name'
          value={values.dishName}
          onChange={handleChange}
          data-testid='newDishName'/>
      </Row>
      <Row>
        <Button data-testid='saveNewDishButton' type='submit'>
              Save
        </Button>
      </Row>
    </form>
  )
  render() {
    return (
      <Row>
        <Formik
          initialValues={{ dishName: '' }}
          onSubmit={this.handleSave}
        >
          {this.renderForm}
        </Formik>
      </Row>
    );
  }
}
