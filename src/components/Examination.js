import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectChoice} from '../redux/actions';
import Question from './Question'
import { examinationFinalResults as finalResults } from '../utils/functions.js'
import './Examination.css';

class Examination extends Component {
  constructor(props) {
    super(props)
    this.handleAnswerSelect = this.handleAnswerSelect.bind(this)
  }

  state = {
    currentQuestionIndex: null,
    answers: {}
  }

  startQuiz () {
    this.setState({currentQuestionIndex: 1})
  }

  restartQuiz () {
    this.setState({currentQuestionIndex: 1, answers: {}})
  }

  questionFilter (questionIndex) {
    return this.props.questions.filter((question) => {
       return question.id === questionIndex
    })[0]
  }

  handleAnswerSelect (questionId, answerId) {
    const {answers} = this.state
    let newAnswers = {...answers, [questionId]: answerId}
    this.setState({
      currentQuestionIndex: questionId + 1,
      answers: newAnswers
    })
  }

  totalQuestionsCount () {
    return (this.props.questions.length * 1)
  }

  render () {
    const {answers,currentQuestionIndex} = this.state
    return (
      <div className="Examination container m-auto col-lg-10 col-sm-12 no-gutters">
        <h1 className="p-3">Examination</h1>
        {( currentQuestionIndex === null )
          ? ( <Start onClick={() => this.startQuiz()} /> )
          : (currentQuestionIndex <= this.totalQuestionsCount())
            ? ( <div className='container question no-gutters'>
                <Progess
                  current={currentQuestionIndex}
                  total={this.totalQuestionsCount()} />
                  <Question
                    question = { this.questionFilter(currentQuestionIndex) }
                    onClick = { this.handleAnswerSelect } />
            </div>)
            : ( <End
                  finalResults={finalResults(answers, this.props.questions)}
                  onRestartClick={() => this.restartQuiz()} /> )}
      </div>

    );
  }
}

const End = ({finalResults, onRestartClick}) => {
  return (
    <div>
      <p className="pt-3"></p>
      <div className="py-5 text-center">
        <h4><span className="badge badge-success">Correct {finalResults.correctAnswersCount}</span></h4>
        <h4><span className="badge badge-danger">Incorrect {finalResults.incorrectAnswersCount}</span></h4>
        <div className='text-left my-5'>
          {finalResults.questions.map((question, index) => {
            console.log(question)
            return (
              <div key={index} className={'alert' + ( (question.status==='correct') ? ' alert-success' : ' alert-danger' )} role="alert">
                <h5 className="alert-heading">{question.id}</h5>
                <p>{question.question}</p>
                <div className="answers mb-0">
                  {question.answers.map((answer, index) => {
                    if (question.status === 'correct') {
                      return(
                        <div key={index} className={'btn btn-sm' + ( (index === question.correct_answer_id) ? ' btn-success' : ' btn-secondary' )}>
                          {answer}
                        </div>
                      )
                    } else {
                      return(
                        <div key={index} className={'btn btn-sm' + (
                          (index === question.correct_answer_id) ? ' btn-success' :  ( (index !== question.answeredId) ? ' btn-secondary' : ' btn-danger' )
                        )}>
                          {answer}
                        </div>
                      )
                    }

                  })}
                </div>
              </div>
            )
          })}
        </div>
        <a href="#" className="btn btn-lg btn-primary" onClick={ () => {onRestartClick()} }>
          Do the quiz again!
        </a>
      </div>
    </div>
  )
}

const Start = ({onClick}) => {
  return (
    <div className='pt-5'>
      <p className="py-3">If you are ready please click start.</p>
      <p className="py-5 text-center">
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


const mapStateToProps = (state) => ({
  questions: state.questions
})

const mapDispatchToProps = ({ selectChoice })

export default connect(mapStateToProps,mapDispatchToProps)(Examination)
