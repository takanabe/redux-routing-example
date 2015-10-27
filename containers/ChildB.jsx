import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChildB extends Component {
  render() {
    return (
      <div>
        <h1> Child B Component</h1>
        {this.props.children}
      </div>
    );
  }
}


ChildB.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildB);
