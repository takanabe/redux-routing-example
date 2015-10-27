import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { pushState } from 'redux-router';
import { connect } from 'react-redux';

class ChildA extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <h1> Child A Component</h1>
        {this.props.children}
      </div>
    );
  }
}


ChildA.propTypes = {
};


export default connect(
)(ChildA);
