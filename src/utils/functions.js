// moved as external function because of enzyme redux issue.
export const examinationFinalResults = (answers, questions) => {
  let questionsArr = []
  let correctAnswersCount = 0
  let incorrectAnswersCount = 0
  questions.map((question) => {
    let status
    if (answers[question.id] === question.correct_answer_id) {
      correctAnswersCount += 1
      status = 'correct'
    } else {
      incorrectAnswersCount += 1
      status = 'incorrect'
    }
    questionsArr.push({
      ...question,
      answeredId: answers[question.id],
      status})
  })
  const obj = {
    correctAnswersCount,
    incorrectAnswersCount,
    questions: questionsArr
  }
  return (obj)

}

export default {}
