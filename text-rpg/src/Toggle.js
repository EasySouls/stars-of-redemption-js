import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToogleOn: true };

    // This binding is necessary to make 'this' work in the callback if not being used with '()'
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState((prevState) => ({ isToogleOn: !prevState.isToggleOn }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToogleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
