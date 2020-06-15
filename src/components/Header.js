import React from 'react';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="navbar">
            
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <a className="navbar-brand" href="#">Title</a>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
          </nav>
        </div>
    );
  }
}

export default Header;
