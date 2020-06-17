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
      ],
      color: 'green',
      size: 12
    }
  }
  onChooseColor = (param) => {
      this.setState({
        color: param
      })
  }
  onChangeSize = (param) => {
    
    this.setState({
      size: param
    })
  }
  render() {
  return (
    <div className="App container">
      <div className="input-group mb-3 col-md-6">
        <input type="text" className="form-control" />
        <div className="input-group-append">
          <span className="input-group-text" >Search</span>
        </div>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
            <button type="button" className="btn btn-sm btn-success">active</button>
            </td>
            <td>
            <button type="button" className="btn  btn-success">edit</button>
            <button type="button" className="btn  btn-danger">Delete</button>
            </td>
          </tr>
        
        </tbody>
      </table>
      <form>
        <div className="form-group col-md-6">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="formGroupExampleInput2">Status</label>
          
          <select name="" id="input" className="form-control ">
            <option value="">-- Select One --</option>
          </select>
          
        </div>
        <button type="button" className="btn  btn-success">Add</button>
      </form>
    </div>
  );
  }
}

export default App;
