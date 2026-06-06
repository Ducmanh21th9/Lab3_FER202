import React, { Component } from 'react';

class Score extends Component {
  handleShare = () => {
    const { score, totalQuestions } = this.props;
    alert(`Tôi đã hoàn thành bài trắc nghiệm với số điểm: ${score}/${totalQuestions}!`);
  }

  render() {
    const { score, totalQuestions, onReplay } = this.props;

    return (
      <div className="score-card">
        <h1 className="quiz-ended-title">Quiz Ended</h1>
        <h2 className="score-value">Your Score: {score} <span className="total-questions">/ {totalQuestions}</span></h2>
        
        <div className="score-actions">
          <button onClick={onReplay} className="btn-replay">
            Replay
          </button>
          <button onClick={this.handleShare} className="btn-share">
            Share Result
          </button>
        </div>
      </div>
    );
  }
}

export default Score;
