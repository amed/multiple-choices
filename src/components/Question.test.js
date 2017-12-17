import React from 'react';

import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import Question from './Question';

configure({ adapter: new Adapter() });

const data = require('../fixtures/data.json');

describe('<Question />', () => {
  it('renders correct question text', () => {
    const question = render(<Question question={data[0]} />);
    expect(question.find('.question-text').text()).to.equal(data[0].question)
  });
});
