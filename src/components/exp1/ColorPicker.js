import React from 'react';
class ColorPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', '#ccc']
    }
  }
  showColor = (color) => {
      return {
          backgroundColor: color,
          marginLeft: '10px',
          padding: '10px',
          cursor: 'pointer'
      }
  }
  activeColor = (color) => {
      this.props.onChooseColor(color)
  }
  render() {
    return (
        <div className="card">
        <h5 className="card-header">Color picker</h5>
        <div className="card-body">
          {
            this.state.colors.map((color, i) => {
            return <span key={i} onClick={ () => this.activeColor(color) } style={ this.showColor(color) }></span>
            })
          }
         
        </div>
      </div>
    );
  }
}

export default ColorPicker;
