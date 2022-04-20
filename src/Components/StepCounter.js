import React, { Component } from "react";
import "./StepCounter.css";

class StepCounter extends Component {
  state = {
    count: 0,
    step: 1,
  };

  counter = (number) => {
    this.setState({
      count: this.state.count + number,
    });
  };

  stepCount = (num) => {
    this.setState({
      step: this.state.step + num,
    });
  };

  render() {
    const { count, step } = this.state;
    return (
      <div className="step-counter-container">
        <div className="step-counter-box">
          <div className="header">
            <h1>
              <span>{count}</span> metr
            </h1>
            <button className="btn" onClick={() => this.counter(step)}>
              go
            </button>
          </div>
          <div className="section">
            <h1>
              step size <span>{step}</span> metr
            </h1>
            <button className="btn" onClick={() => this.stepCount(1)}>
              step
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StepCounter;
