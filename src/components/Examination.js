import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectChoice} from '../redux/actions';
import Question from './Question'
import './Examination.css';

class Examination extends Component {
  state = { currentQuestionIndex: null }

  startQuiz () {
    this.selectQuestion(1)
  }
  restartQuiz () {
    this.selectQuestion(1)
  }

  selectQuestion (questionId) {
    this.setState({currentQuestionIndex: questionId})
  }
  questionFilter (questionIndex) {
    return this.props.questions.filter( (question) => {
       return question.id === questionIndex
    })[0]
  }

  totalQuestionsCount () {
    return (this.props.questions.length * 1)
  }

  render() {
    const {currentQuestionIndex} = this.state
    return (
      <div className="Examination container m-5">
        <a href='#' onClick = {() => {this.setState({currentQuestionIndex: 9})}}>Set to 9</a> <br/>
        <a href='#' onClick = {() => {this.setState({currentQuestionIndex: 8})}}>Set to 8</a> <br/>
        <a href='#' onClick = {() => {this.setState({currentQuestionIndex: 1})}}>Set to 1</a> <br/>
        <a href='#' onClick = {() => {this.setState({currentQuestionIndex: null})}}>Set to null</a>
        <h1 className="p-3">Examination</h1>
        {( currentQuestionIndex === null )
          ? ( <Start onClick={() => this.startQuiz()} /> )
          : (currentQuestionIndex <= this.totalQuestionsCount())
            ? ( <div className='container'>
                <Progess
                  current={currentQuestionIndex}
                  total={this.totalQuestionsCount()} />
                  <Question
                    question = { this.questionFilter(currentQuestionIndex) }
                    onClick = { () => {this.handleAnswerSelect} } />
            </div>)
            : ( <End onClick={() => this.restartQuiz()} /> )}



      </div>
    );
  }
}

const Start = ({onClick}) => {
  return (
    <div>
      <p className="py-3">If you are ready please click start.</p>
      <p className="py-3 text-center">
        <a href="#" className="btn btn-lg btn-primary" onClick={ () => {onClick()} }>
          START
        </a>
      </p>
    </div>
  )
}

const Progess = ({current, total}) => {
  const style = () => {
    return ( {width: `${currentProgressPrecentage()}%`} )
  }
  const currentProgressPrecentage = () => {
    return ( (current * 100 ) / total )
  }
  return (
    <div className="progress">
      <div
        className="progress-bar" role="progressbar" style={style()} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        { current } / {   total }
      </div>
    </div>
  )
}

const End = ({onClick}) => {
  return (
    <div>
      <p className="py-3">Everything is done! Thanks.</p>
      <p className="py-3 text-center">
        <a href="#" className="btn btn-lg btn-primary" onClick={ () => {onClick()} }>
          Restart the quiz
        </a>
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  questions: state.questions
})

const mapDispatchToProps = ({ selectChoice })

export default connect(mapStateToProps,mapDispatchToProps)(Examination)
