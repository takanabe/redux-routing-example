import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import Header from '../components/Header';
import Footer from '../components/Footer';

@connect(state => ({ routerState: state.router,
                   currentLocation : state.router.location.pathname
}))

class Parent extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const {currentLocation,children} = this.props;
    return (
      <div>
        <Header />
         <h1>Curren Location: {currentLocation}</h1>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/child_a">ChildA</Link></li>
           <li><Link to="/child_b/xxx">ChildB</Link></li>
           <li><Link to="/child_b/xxx/gchild_a">Grand Child A</Link></li>
           <li><Link to="/child_b/xxx/gchild_b">Grand Child B</Link></li>
         </ul>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
)(Parent);
