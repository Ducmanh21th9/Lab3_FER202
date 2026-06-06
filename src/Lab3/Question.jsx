import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  // Method to handle option selection
  handleOptionSelect = (option) => {
    this.setState({ selectedOption: option }, () => {
      // Auto-submit after a small delay for active feedback transition
      setTimeout(() => {
        this.handleSubmit();
      }, 300);
    });
  }

  // Method to submit the answer
  handleSubmit = () => {
    const { selectedOption } = this.state;
    if (selectedOption !== null) {
      this.props.onAnswer(selectedOption);
      this.setState({ selectedOption: null });
    }
  }

  render() {
    const { question } = this.props;
    const { selectedOption } = this.state;
    if (!question) return null;

    return (
      <div className="question-card">
        <span className="question-badge">Question {question.id}</span>
        <h2 className="question-text">{question.question}</h2>
        <ul className="options-list">
          {question.options.map((option, index) => {
            const isSelected = selectedOption === option;
            return (
              <li 
                key={index} 
                className={`option-item ${isSelected ? 'selected' : ''}`}
                onClick={() => this.handleOptionSelect(option)}
              >
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="option-link"
                >
                  {option}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Question;
