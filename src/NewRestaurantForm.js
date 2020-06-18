import React, { Component } from 'react';
import { Button, TextInput } from "react-materialize";

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
            <div>
                <TextInput
                    label='Restaurant Name'
                    value={this.state.input}
                    onChange={this.handleChange}
                    data-test="newRestaurantName" />
                <Button type='button' data-test="saveNewRestaurantButton" onClick={this.handleSave}> Save </Button>
            </div>
        );
    }
}

export default NewRestaurantForm;
