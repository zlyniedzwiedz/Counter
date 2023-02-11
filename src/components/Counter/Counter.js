import React, { Component } from 'react';
import css from './Counter.module.css';
export class Counter extends Component {
  state = {
    value: 0,
    step: 1,
  };

  add = () => {
    this.setState(state => ({
      value: this.state.value + this.state.step,
    }));
  };
  addStep = () => {
    this.setState(state => ({
      step: this.state.step + 1,
    }));
  };
  substract = () => {
    this.setState(state => ({
      value: this.state.value - this.state.step,
    }));
  };
  substractStep = () => {
    this.setState(state => ({
      step: this.state.step - 1,
    }));
  };
  reset = () => {
    this.setState({
      value: 0,
      step: 1,
    });
  };

  render() {
    // const { step } = this.props;

    return (
      <div>
        <p className={css.counterDisplay}>{this.state.value}</p>
        <div className={css.buttonGroup}>
          <button className={css.counterButton} onClick={this.add}>
            +
          </button>
          <button className={css.counterButton} onClick={this.substract}>
            -
          </button>
        </div>
        <div className={css.buttonGroup}>
          <p className={css.counterStep}>Step: {this.state.step}</p>
          <button className={css.counterButton} onClick={this.addStep}>
            Increase step
          </button>
          <button className={css.counterButton} onClick={this.substractStep}>
            Decrease step
          </button>
        </div>
        <div className={css.buttonGroup}>
          <button className={css.counterButton} onClick={this.reset}>
            Reset counter!
          </button>
        </div>
      </div>
    );
  }
}
