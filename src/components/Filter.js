import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {
    onChange = (event) => {
        this.props.onChange(event ? event.target.name : '');
    }
    render() {
        return (
        <div className="checkboxes">
            <Checkbox name="name" onSelect={this.onChange} />
            <label>Name</label>
            <Checkbox name="age" onSelect={this.onChange} />
            <label>Age</label>
        </div>
        );
    }
}

export default Filter;