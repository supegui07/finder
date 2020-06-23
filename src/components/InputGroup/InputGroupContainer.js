import React, { Component } from "react";
import PropTypes from "prop-types";

class InputGroupContainer extends Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      onChange: PropTypes.func,
    };
  }
  state = { inputValue: "" };
  inputTextRef = React.createRef();

  getInputTextProps = ({ onChange, ...props }) => {
    return {
      value: this.state.inputValue,
      inputTextRef: this.inputTextRef,
      onChange: (value) => {
        this.setState({ inputValue: value }, () => onChange(value));
      },
      ...props,
    };
  };

  getLabelProps = ({ text }) => {
    return {
      text,
      onClick: () => this.inputTextRef.current.focus(),
    };
  };

  getStateAndHelpers() {
    return {
      getLabelProps: this.getLabelProps,
      getInputTextProps: this.getInputTextProps,
    };
  }

  render() {
    return this.props.children
      ? this.props.children(this.getStateAndHelpers())
      : null;
  }
}

export default InputGroupContainer;
