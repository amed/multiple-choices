import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectChoice} from '../redux/actions';

import './Root.css';

class Root extends Component {
  render() {
    return (
      <div className="Root">
        <header className="Root-header">
          <h1 className="Root-title">Root Component</h1>
        </header>
        <p className="Root-intro">
          This is start
        </p>
        {console.log({props: this.props})}
        <a href='#' onClick= { () => {this.props.selectChoice(1)} }>Test action </a>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = ({ selectChoice })

export default connect(mapStateToProps,mapDispatchToProps)(Root)
