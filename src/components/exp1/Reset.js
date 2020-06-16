import React from 'react';
class Reset extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    console.log('thanhdc')
    return (
        <div >
           <button className="btn btn-primary">Reset</button>
      </div>
    );
  }
}

export default Reset;
