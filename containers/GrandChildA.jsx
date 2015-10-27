import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class GrandChildB extends Component {
  render() {
    return (
      <div>
        <h1> Grand Child A Component</h1>
      </div>
    );
  }
}


GrandChildB.propTypes = {
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
)(GrandChildB);
