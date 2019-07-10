import React, { Component } from 'react';
import logo from './images/logo.svg';
import textLogo from './images/textLogo.svg'
import downArrow from './images/downArrow.svg'
import './App.css';
import LineChartComponent from './components/LineChartComponent';

export default class App extends Component {
  constructor() {
    super();
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
  }

  showResults= () => {
    this.setState({
      hasBeenClicked: true
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={textLogo} className="App-textLogo" alt="logo"/>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-title">
            Welcome to Pangaea!
          </p>
          <p className="App-subtitle">
            What do people think about: {this.state.hasBeenClicked}
          </p>
          <form>
            <input type="text" className="App-entryBox" autocomplete="off" name="query" />
            <input type="submit" className="App-submitButton" value="Submit" onClick={this.showResults} />
          </form>

          {this.state.hasBeenClicked && (
          <p className="App-resultsTitle" id="resultsTitle" hidden={!this.state.hasBeenClicked}> Results found!</p>)
          }
          {this.state.hasBeenClicked && (
          <img src={downArrow} className="App-downArrow" alt="logo" id="resultsArrow" hidden={!this.state.hasBeenClicked}/>)
          }
          
        </header>
        <div class="App-horizontalLine"></div>
        <header className="App-chartHeader">
          <p className="App-title">
            Query Results
          </p><LineChartComponent/>
        </header>
      </div>
    );
  }
}
