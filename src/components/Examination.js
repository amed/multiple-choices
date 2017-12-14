import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectChoice} from '../redux/actions';

import './Examination.css';

class Examination extends Component {
  state = { currentQuestions: null }

  startQuiz () {
    this.selectQuestion(1)
  }

  selectQuestion (questionId) {
    this.setState({currentQuestions: questionId})
  }

  render() {
    const {currentQuestions} = this.state
    return (
      <div className="Examination container m-5">
        <h1 className="p-3">Examination</h1>
        {(currentQuestions === null)
          ? (
            <div>
              <p className="py-3">If you are ready please click start</p>
              <p className="py-3 text-center">
                <a href="#" className="btn btn-lg btn-primary" onClick={ () => {this.startQuiz()} }>
                  START
                </a>
              </p>
            </div>
          )
        : (
            <p className="py-3">You clicked start</p>
          )
      }

      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = ({ selectChoice })

export default connect(mapStateToProps,mapDispatchToProps)(Examination)
