import React, { Component } from 'react';
import { Button, TextInput, Row } from "react-materialize";
import { Formik } from 'formik';

export class NewRestaurantForm extends Component {
    validate = (values) => {
      const errors = {};
      if (values.inputText === '') {
        errors.inputText= 'Cant be blank!';
      }
      return errors;
    }

    handleSave = (values, { resetForm }) => {
      const { inputText } = values;
      const { onSave } = this.props;
      onSave(inputText);
      resetForm();
    }

    handleClose=({ resetForm }) => () => {
      resetForm();
      this.props.onCancel();
    }

    renderForm = ({ values, errors, handleChange, handleSubmit, resetForm }) => (
      <form onSubmit={handleSubmit}>
        <TextInput
          s={12} m={8} l={10}
          label='Restaurant Name'
          name='inputText'
          value={values.inputText}
          error={errors.inputText}
          onChange={handleChange}
          data-testid="newRestaurantName" />
        <Button
          s={12} m={4} l={2}
          data-testid="saveNewRestaurantButton"
          type='submit'
        > Save </Button>
        <Button
          s={12} m={4} l={2}
          data-testid="closeModalButton"
          type='button'
          onClick={this.handleClose({ resetForm })}>
            Cancelar
        </Button>
      </form>
    )

    render() {
      return (
        <Row>
          <Formik
            initialValues={{ inputText: '' }}
            onSubmit={this.handleSave}
            validate={this.validate}
          >
            {this.renderForm}
          </Formik>
        </Row>);
    }
}

export default NewRestaurantForm;
