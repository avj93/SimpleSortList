import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types'

class Filter extends Component {
    onChange = (event) => {
        const sortBy = event.target.name;
        this.props.onChange(sortBy);
    }

    render() {
        return (
            <div className="checkboxes">
                <Checkbox name="name" checked={this.props.sortBy==='name'} onChange={this.onChange} value='name' />
                <label>Name</label>
                <Checkbox name="age" checked={this.props.sortBy==='age'} onChange={this.onChange} value='age' />
                <label>Age</label>
            </div>
        );
    }
}

Filter.propTypes = {
    sortBy: PropTypes.string
};

export default Filter;