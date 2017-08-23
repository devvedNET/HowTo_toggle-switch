import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      value: props.checked ? true : false
    }
  }

  handleClick(evt) {
    const switchState = !this.state.value;
    this.setState({ value: switchState }, () => {
      if (this.props.fn) {
        this.props.fn(this.state);
      }
    });
  }

  render() {
    return (
      <div onClick={evt => this.handleClick(evt)} 
           className={this.state.value ? 
            `ToggleSwitch ${this.props.size || 'Small'} On` : 
            `ToggleSwitch ${this.props.size || 'Small'}`}>

        <div className={this.state.value ? 'Switch On' : 'Switch'}></div>
      </div>
    );
  }
}

ToggleSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  fn: PropTypes.func,
  size: PropTypes.oneOf(['Small', 'SM', 'Medium', 'MD', 'Large', 'LG']),
  value: PropTypes.bool
};

export default ToggleSwitch;
