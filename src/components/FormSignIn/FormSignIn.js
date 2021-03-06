import React from "react";
import PropTypes from "prop-types";
import FormContainerSignIn from "./FormSignInContainer";
import InputGroup from "../InputGroup/InputGroup";
import Button from "../Button/Button";

const FormSignIn = ({ onSignIn }) => {
  const initialState = {
    form: {
      userName: "",
      password: "",
    },
  };

  const handleInputChange = (key, value) => {
    // console.log(key, value);
  };

  const handleSubmit = (user) => {
    onSignIn(user);
  };

  return (
    <div>
      <FormContainerSignIn initialState={initialState}>
        {({ getFormProps, getInputProps }) => {
          return (
            <form
              {...getFormProps({
                onSubmit: handleSubmit,
              })}
            >
              <InputGroup
                id="user-name"
                type="text"
                placeholder="User Name"
                {...getInputProps("userName", handleInputChange)}
              />
              <InputGroup
                id="password"
                type="text"
                placeholder="Password"
                {...getInputProps("password", handleInputChange)}
              />
              <Button text="Log In" type="submit" />
            </form>
          );
        }}
      </FormContainerSignIn>
    </div>
  );
};

FormSignIn.propTypes = {
  onSignIn: PropTypes.func,
};

export default FormSignIn;
