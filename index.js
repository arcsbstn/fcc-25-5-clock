class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakLen: 5,
      sessionLen: 25,
      timeLeft: 1500
    }
    this.handleDecrementBreak = this.handleDecrementBreak.bind(this)
    this.handleIncrementBreak = this.handleIncrementBreak.bind(this)
    this.handleDecrementSession = this.handleDecrementSession.bind(this)
    this.handleIncrementSession = this.handleIncrementSession.bind(this)
  }

  handleDecrementBreak = () => {
    this.setState({
      breakLen: this.state.breakLen - 1
    })
  }

  handleIncrementBreak = () => {
    this.setState({
      breakLen: this.state.breakLen + 1
    })
  }

  handleDecrementSession = () => {
    this.setState({
      sessionLen: this.state.sessionLen - 1
    })
  }

  handleIncrementSession = () => {
    this.setState({
      sessionLen: this.state.sessionLen + 1
    })
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
            handleDecrementBreak={this.handleDecrementBreak}
            handleIncrementBreak={this.handleIncrementBreak}
          />
          <SetSession
            sessionLen={this.state.sessionLen}
            handleIncrementSession={this.handleIncrementSession}
            handleDecrementSession={this.handleDecrementSession}
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
        <button onClick={this.props.handleIncrementBreak}>
          <i id='break-increment' class="fa fa-arrow-up"></i>
        </button>
        <button onClick={this.props.handleDecrementBreak}>
          <i id='break-decrement' class="fa fa-arrow-down"></i>
        </button>
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
        <button onClick={this.props.handleIncrementSession}>
          <i id='session-increment' class="fa fa-arrow-up"></i>
        </button>
        <button onClick={this.props.handleDecrementSession}>
          <i id='session-decrement' class="fa fa-arrow-down"></i>
        </button>
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