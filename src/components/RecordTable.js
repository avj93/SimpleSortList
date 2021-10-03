import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Contents from './Contents';

class RecordTable extends Component {
    constructor() {
        super();
        this.people = [
            {
                name: "Veronica Mize",
                dob: "11/29/2011"
            }, {
                name: "Cecilia Olsson",
                dob: "09/16/1992"
            }, {
                name: "Peter Parker",
                dob: "01/16/1992"
            }, {
                name: "Jimmy Shergil",
                dob: "12/12/2001"
            }, {
                name: "Alexander Alfred",
                dob: "02/09/1891"
            }, {
                name: "Janice Shroyer",
                dob: "12/01/1982"
            }, {
                name: "Ralph White",
                dob: "11/30/2011"
            }, {
                name: "Deborah T. Decker",
                dob: "10/31/1999"
            }
        ];
    }

    sortBy() {
        const list = Array.from(this.people);
        if (this.props.sortBy === "name") {
            list.sort((a,b) => String(a.name || '').localeCompare(String(b.name || '')));
        } else {
            list.sort();
        }
        
        return list;
    }

    render() {
        console.log(this.props.sortBy);

        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                                <TableRow>
                                    <TableCell>Insert Name</TableCell>
                                    <TableCell>Insert DOB</TableCell>
                                </TableRow>
                    <Contents list={this.sortBy()} sortBy={this.props.sortBy} />
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

RecordTable.propTypes = {
    sortBy: PropTypes.string
};

export default RecordTable;
