class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakLen: 5,
      sessionLen: 25,
      timeLeft: 1500
    }
  }

  clockify() {
    let minutes = Math.floor(this.state.timeLeft / 60);
    let seconds = this.state.timeLeft - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row-container row justify-content-center align-items-center">
          <SetBreak
            breakLen={this.state.breakLen}
          />
          <SetSession
            sessionLen={this.state.sessionLen}
          />
          <Timer
            timeLeft={this.clockify()}
          />
        </div>
      </div>
    )
  }
}

class SetBreak extends React.Component {
  render() {
    return (
      <div className="set-break-container">
        <span id="break-label">Break Length</span>
        <span id="break-length">{this.props.breakLen}</span>
        <i id='break-increment' class="fa fa-arrow-up"></i>
        <i id='break-decrement' class="fa fa-arrow-down"></i>
      </div>
    )
  }
}

class SetSession extends React.Component {
  render() {
    return (
      <div className="set-session-container">
        <span id="session-label">Session Length</span>
        <span id="session-length">{this.props.sessionLen}</span>
        <i id='session-increment' class="fa fa-arrow-up"></i>
        <i id='session-decrement' class="fa fa-arrow-down"></i>
      </div>
    )
  }
}

class Timer extends React.Component {
  render() {
    return (
      <div>
        <span id="timer-label">
          Session
        </span>
        <div id="time-left">
          {this.props.timeLeft}
        </div>
        <button id="start_stop">START/STOP</button>
        <button id="reset">RESET</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))