import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {isTimerRunning: false}

  onStartOrPause = () => {
    this.setState(prevState => {
      const {isTimerRunning} = prevState
      return {
        isTimerRunning: !isTimerRunning,
      }
    })
  }

  renderTimerController = () => {
    const {isTimerRunning} = this.state
    const startOrPauseImgUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const startOrPauseAltText = isTimerRunning ? 'pause icon' : 'play icon'

    return (
      <div className="buttons-container">
        <button
          type="button"
          className="start-button"
          onClick={this.onStartOrPause}
        >
          <img
            src={startOrPauseImgUrl}
            alt={startOrPauseAltText}
            className="play-icon"
          />
        </button>
        <p className="start-text">{isTimerRunning ? 'Pause' : 'Start'}</p>
        <button type="button" className="reset-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
            alt="reset"
            className="reset-icon"
          />
        </button>
        <p className="reset-text">Reset</p>
      </div>
    )
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="timer-details-container">
          <div className="timer-container">
            <div className="time-container">
              <h1 className="time">25.00</h1>
              <p className="time-status">
                {isTimerRunning ? 'Running' : 'Paused'}
              </p>
            </div>
          </div>
          <div className="count-buttons">
            {this.renderTimerController()}
            <div>
              <p className="set-time-text">Set Timer Limit</p>
              <div className="inc-dec-container">
                <button type="button" className="decrement-button">
                  -
                </button>
                <p className="initial-time">25</p>
                <button type="button" className="increment-button">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
