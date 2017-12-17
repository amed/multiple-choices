import { examinationFinalResults } from './functions'
// import { expect } from 'chai';

const answers = {
  1: 1,
  2: 2,
  3: 0,
  4: 0,
  5: 1,
  6: 1,
  7: 2,
  8: 0
}
const questions = require('../fixtures/data.json')
const expectedStructure = {
  correctAnswersCount: 3,
  incorrectAnswersCount: 5,
  questions:
     [ { id: 1,
         question: 'Nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo?',
         answers: ['Answer#1', 'Answer#2', 'Answer#3'],
         correct_answer_id: 1,
         answeredId: 1,
         status: 'correct' },
       { id: 2,
         question: 'Libero nam dui proin leo odio porttitor id consequat in consequat?',
         answers: ['Answer#1', 'Answer#2', 'Answer#3'],
         correct_answer_id: 0,
         answeredId: 2,
         status: 'incorrect' },
       { id: 3,
         question: 'Habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum?',
         answers: ['Answer#1', 'Answer#2', 'Answer#3'],
         correct_answer_id: 2,
         answeredId: 0,
         status: 'incorrect' },
       { id: 4,
         question: 'Orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a?',
         answers: ['Answer#1', 'Answer#2', 'Answer#3'],
         correct_answer_id: 1,
         answeredId: 0,
         status: 'incorrect' },
       { id: 5,
         question: 'Odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam?',
         answers: ['Answer#1', 'Answer#2', 'Answer#3'],
         correct_answer_id: 2,
         answeredId: 1,
         status: 'incorrect' },
       { id: 6,
         question: 'Curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem?',
         answers: ['Answer#1', 'Answer#2', 'Answer#3'],
         correct_answer_id: 1,
         answeredId: 1,
         status: 'correct' },
       { id: 7,
         question: 'Orci luctus et ultrices posuere cubilia curae nulla dapibus dolor?',
         answers: ['Answer#1', 'Answer#2', 'Answer#3'],
         correct_answer_id: 2,
         answeredId: 2,
         status: 'correct' },
       { id: 8,
         question: 'Integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in?',
         answers: ['Answer#1', 'Answer#2', 'Answer#3'],
         correct_answer_id: 0,
         answeredId: 0,
         status: 'incorrect' } ] }

describe('examinationFinalResults', () => {
  it('checks for correct data structure', () => {
    expect(examinationFinalResults(answers, questions)).toEqual(expectedStructure)
  })
})
