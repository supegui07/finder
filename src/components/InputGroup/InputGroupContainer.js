import React, { Component } from "react";

class InputGroupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }

  inputTextRef = React.createRef();

  getInputTextProps = ({ onChange, ...props }) => {
    const { inputValue } = this.state;
    return {
      value: inputValue,
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
    const {children} = this.props; 
    return children
      ? children(this.getStateAndHelpers())
      : null;
  }
}

export default InputGroupContainer;
