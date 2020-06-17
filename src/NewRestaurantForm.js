import React, { Component } from 'react';

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
                <input
                    type='text'
                    value={this.state.input}
                    onChange={this.handleChange}
                    data-test="newRestaurantName" />
                <button type='button' data-test="saveNewRestaurantButton" onClick={this.handleSave}> Save </button>
            </div>
        );
    }
}

export default NewRestaurantForm;
