import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Article from './components/Article';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
	render() {
		return (
      <div>
        <Navbar></Navbar>
        <Article></Article>
      </div>
		);
	}
}
export default App;