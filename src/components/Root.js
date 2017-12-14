import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadData} from '../redux/actions';
import Examination from './Examination'
import './Root.css';

class Root extends Component {
  componentDidMount () {
    this.props.loadData()
  }

  render() {
    return (
      <div className="Root container">
        <header className="Root-header col-12 text-center">
          <h1 className="Root-title mt-5 mb-3 ">Multiple Choices</h1>
          <p className="Root-intro">
            A quiz which is made with React
          </p>
        </header>
        <div className="col-10 mx-auto my-5 bg-danger">
          <Examination />
        </div>
        {console.log({props: this.props})}
        <a href='#' onClick= { () => {console.log(this.props)} }>Test action </a>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  test: state
})

const mapDispatchToProps = ({ loadData })

export default connect(mapStateToProps,mapDispatchToProps)(Root)
