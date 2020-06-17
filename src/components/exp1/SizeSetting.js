import React from 'react';
class SizeSetting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: 12
    }
  }
  changeSize = (value) => {
      this.setState({
        size: this.state.size + value
      })
      this.props.onChangeSize(this.state.size)
  }
  render() {
    console.log('thanhdc')
    return (
        <div className="card">
        <h5 className="card-header">Size setting</h5>
        <div className="card-body">
          <p>{ this.state.size }</p>
          <button type="button" onClick={() => this.changeSize(-1) } className="btn btn-success">giam</button>
          <button type="button" onClick={() => this.changeSize(1) } className="btn btn-success">tang</button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
