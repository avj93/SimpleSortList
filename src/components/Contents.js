import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class Contents extends Component {

    state = {
        list: this.props.people && this.sortBy("name") || []
    }

    sortBy(param) {
        const list = Array.from(this.props.people);
        if (param === "name") {
            list.sort((a,b) => String(a.name || '').localeCompare(String(b.name || '')));
        } else {
            list.sort();
        }
        
        return list;
    }

    render() {
        const { list } = this.state;

        return list.map((item) => (
            <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.dob}</TableCell>
            </TableRow>
        ))
    }
}

Contents.propTypes = {
    people: PropTypes.array
};

export default Contents;