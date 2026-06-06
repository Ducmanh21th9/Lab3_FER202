import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter"
        },
        // Add more questions here
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false
    };
  }

  // Method to check answer and move to the next question
  handleAnswer = (selectedOption) => {
    const { questions, currentQuestion, score } = this.state;
    const currentQ = questions[currentQuestion];
    
    // Check if the answer is correct
    let nextScore = score;
    if (selectedOption === currentQ.answer) {
      nextScore += 1;
    }

    // Move to next question
    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < questions.length) {
      this.setState({
        score: nextScore,
        currentQuestion: nextQuestionIndex
      });
    } else {
      this.setState({
        score: nextScore,
        quizEnd: true
      });
    }
  }

  // Method to reset the quiz
  handleReplay = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false
    });
  }

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;

    return (
      <div className="quiz-wrapper">
        {!quizEnd ? (
          <Question 
            question={questions[currentQuestion]}
            onAnswer={this.handleAnswer}
          />
        ) : (
          <Score 
            score={score}
            totalQuestions={questions.length}
            onReplay={this.handleReplay}
          />
        )}
      </div>
    );
  }
}

export default QuizApp;
