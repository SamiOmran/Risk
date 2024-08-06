import React from 'react';
import Timer from './Timer';

class QuestionScreen extends React.Component {
  render() {
    const { question, onTimeEnd } = this.props;
    const options = [];

    if (question.options) {
        question.options.forEach(option => {
          options.push(<li class="q-option">{option}</li>);
        });
    }

    return (
      <div className="q-page">
        {/* <h3>السؤال للفئة <span style={{ color: "rgb(255, 100, 100)" }} >{question.category} </span>بوزن <span style={{ color: "rgb(255, 100, 100)" }} >{question.value} </span>علامات</h3> */}

        <h1>{question.question}</h1>

        <ul> {options} </ul>

        <Timer initialTime={30} onTimeEnd={onTimeEnd} />
      </div>
    );
  }
}

export default QuestionScreen;
