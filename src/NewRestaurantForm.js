import React, { Component } from 'react';
import { Button, TextInput, Row } from "react-materialize";
import { Formik } from 'formik';

export class NewRestaurantForm extends Component {
    validate = (values) => {
      console.log('oi');
      const errors = {};
      if (values.inputText === '') {
        console.log('vazio');
        errors.inputText= 'Cant be blank!';
      }
      console.log(errors);
      return errors;
    }

    handleSave = (values, { resetForm }) => {
      const { inputText } = values;
      const { onSave } = this.props;
      onSave(inputText);
      resetForm();
    }

    render() {
      return (
        <Row>
          <Formik
            initialValues={{ inputText: '' }}
            onSubmit={this.handleSave}
            validate={this.validate}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextInput
                  s={12} m={8} l={10}
                  label='Restaurant Name'
                  id="inputText"
                  value={values.inputText}
                  error={errors.inputText}
                  onChange={handleChange}
                  data-test="newRestaurantName" />
                <Button
                  s={12} m={4} l={2}
                  data-test="saveNewRestaurantButton"
                  type='submit'
                > Save </Button>
              </form>
            )}

          </Formik>
        </Row>);
    }
}

export default NewRestaurantForm;
