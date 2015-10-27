import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class GrandChildA extends Component {
  render() {
    return (
      <div>
        <h1> Grand Child B Component</h1>
      </div>
    );
  }
}


GrandChildA.propTypes = {
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
)(GrandChildA);
