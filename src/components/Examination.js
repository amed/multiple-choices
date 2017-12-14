import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectChoice} from '../redux/actions';

import './Examination.css';

class Examination extends Component {
  render() {
    return (
      <div className="Examination container">
        <h1>Examination</h1>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = ({ selectChoice })

export default connect(mapStateToProps,mapDispatchToProps)(Examination)
