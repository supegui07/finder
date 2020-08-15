import { Component } from 'react';
import PropTypes from "prop-types";

class NavBarContainer extends Component {

  handleClick = () => {
    const { onClick } = this.props;
    onClick()
  }

  getLinkProps = (props) => {
    return {
      onClick: this.handleClick,
      selected: '',
      ...props
    }
  }

  getStateAndHelpers() {
    return {
      getLinkProps: this.getLinkProps,
    };
  }

  render() {
    const { children } = this.props;
    return children
      ? children(this.getStateAndHelpers())
      : null;
  }
}

NavBarContainer.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NavBarContainer;