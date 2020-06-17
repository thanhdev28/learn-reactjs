import React from 'react';
class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  setColor = () => {
    return {
      color: this.props.color,
      fontSize: this.props.size + 'px'
    };
  }
  render() {
    return (
        <div className="col-md-12">
            <p style={ this.setColor() }>noi dung ket qua</p>
      </div>
    );
  }
}

export default Result;
