import React, {Component} from 'react';
import './App.css';
import DisplaySimpson from './DisplaySimpson';
import axios from 'axios';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataApi: ''
    };
    this.getQuote = this.getQuote.bind(this)
  }
 

  getQuote() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          dataApi: data[0]
        });
    });
  }


  render () {
    return (
        <div className="App">
          <DisplaySimpson image={this.state.dataApi.image} name={this.state.dataApi.character} quote={this.state.dataApi.quote}/>
          <button type="button" onClick={this.getQuote}>Get Simpson's Quote</button>
        </div>
      );
  }
  
}

export default App;
