import React, { Component } from 'react';

class NavBarContainer extends Component {

  handleClick = () => {
    this.props.onClick()
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
    return this.props.children
      ? this.props.children(this.getStateAndHelpers())
      : null;
  }
}

export default NavBarContainer;