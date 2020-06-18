import React, { Component } from 'react';
import { Button, TextInput, Row } from "react-materialize";

export class NewRestaurantForm extends Component {
    state = { input: '' };

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    handleSave = () => {
        const { input } = this.state;
        const { onSave } = this.props;
        onSave(input);
    }

    render() {
        return (
            <Row>
                <TextInput
                    s={12}
                    m={8}
                    l={10}
                    label='Restaurant Name'
                    value={this.state.input}
                    onChange={this.handleChange}
                    data-test="newRestaurantName" />
                <Button
                    s={12}
                    m={4}
                    l={2}
                    type='button'
                    data-test="saveNewRestaurantButton"
                    onClick={this.handleSave}> Save </Button>
            </Row>
        );
    }
}

export default NewRestaurantForm;
