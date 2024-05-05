import React from 'react';
import './header.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
  }
  render() {
    return (
      <div>
          <img
            className="img-title"
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Ancien_logo_LNH.svg/747px-Ancien_logo_LNH.svg.png"
            alt="nhl old logo"
          />
        <h4 className="header-title">
          &nbsp; {this.title}
        </h4>
      </div>
    );
  }
}

export default Filter;
