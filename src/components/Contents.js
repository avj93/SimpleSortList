import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class Contents extends Component {
    render() {
        const { list } = this.props;

        return list.map((item) => (
            <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.dob}</TableCell>
            </TableRow>
        ))
    }
}

Contents.propTypes = {
    list: PropTypes.array
};

export default Contents;