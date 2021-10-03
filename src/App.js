import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  state = {
    sortBy: 'name'
  }
  
  onSortBySelection = (value) => {
    this.setState({
      sortBy: value
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter onChange={this.onSortBySelection} sortBy={this.state.sortBy}></Filter>
        <RecordTable sortBy={this.state.sortBy}></RecordTable>
      </div>
    );
  }
}

export default App;
