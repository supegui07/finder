import React, { Component } from "react";
import PropTypes from "prop-types";

class FormContainerSignIn extends Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      initialState: PropTypes.object,
    };
  }
  static defaultProps = {
    initialState: {
      form: {
        "": "",
      },
    },
  };
  initialState = { ...this.props.initialState };
  state = this.initialState;

  getFormProps = ({ onSubmit }) => {
    return {
      onSubmit: (e) => {
        e.preventDefault();
        onSubmit(this.state.form);
      },
    };
  };

  getInputProps = (key, onChange) => {
    return {
      value: this.state.form[key],
      onChange: (value) => {
        this.setState(
          { form: { ...this.state.form, [key]: value } },
          () => onChange && onChange(key, value)
        );
      },
    };
  };

  getStateAndHelpers() {
    return {
      getFormProps: this.getFormProps,
      getInputProps: this.getInputProps,
    };
  }

  render() {
    return this.props.children
      ? this.props.children(this.getStateAndHelpers())
      : null;
  }
}

export default FormContainerSignIn;
