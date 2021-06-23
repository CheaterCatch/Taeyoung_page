import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Sidemenu from './components/Sidemenu';
import Testtitle from './components/Testtitle';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode : 'rank',
    }
  }
	render() {
		return (
      <div>
        <Navbar></Navbar>
        <content>
          <div>
            <Sidemenu onChangeMode={function(_mode){
              this.setState({
                mode:_mode
              })
            }.bind(this)}></Sidemenu>
            <Testtitle></Testtitle>
          </div>
        </content>
      </div>
		);
	}
}
export default App;