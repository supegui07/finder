import { Component } from "react";
import PropTypes from "prop-types";

class FormContainerSignIn extends Component {
  constructor(props){
    super(props);
    const { initialState } = this.props;
    this.state = initialState; 
  }

  getFormProps = ({ onSubmit }) => {
    const { form } = this.state;
    return {
      onSubmit: (e) => {
        e.preventDefault();
        onSubmit(form);
      },
    };
  };

  getInputProps = (key, onChange) => {
    const { form } = this.state;
    return {
      value: form[key],
      onChange: (value) => {
        this.setState(
          { form: { ...form, [key]: value } },
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
    const { children } = this.props;
    return children
      ? children(this.getStateAndHelpers())
      : null;
  }
}

FormContainerSignIn.propTypes = {
  initialState: PropTypes.object,
}

FormContainerSignIn.defaultProps = {
  initialState: {
    form: {
      "": "",
    },
  }
}

export default FormContainerSignIn;
