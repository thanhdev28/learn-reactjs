import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Product from './components/Product';
import ColorPicker from './components/exp1/ColorPicker';
import SizeSetting from './components/exp1/SizeSetting';
import Result from './components/exp1/Result';
import Reset from './components/exp1/Reset';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products : [
        {
          id: 1,
          name: 'iphone',
          price: 100000
        },
        {
          id: 2,
          name: 'samsung',
          price: 200000
        },
        {
          id: 3,
          name: 'oppo',
          price: 320000
        }
      ]
    }
  }
  render() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-md-6">
        <ColorPicker></ColorPicker>
        </div>
        <div className="col-md-6">
          <SizeSetting></SizeSetting>
        </div>
      </div>
      <div className="row">
        <Result></Result>
      </div>
      <div className="row">
        <Reset></Reset>
      </div>
    </div>
  );
  }
}

export default App;
