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

  handleDecrementBreak() {
    this.setState({
      breakLen: this.state.breakLen - 1,
      timeLeft: this.state.timeLeft - 60
    })
  }

  handleIncrementBreak() {
    this.setState({
      breakLen: this.state.breakLen + 1,
      timeLeft: this.state.timeLeft + 60
    })
  }

  handleDecrementSession() {
    this.setState({
      sessionLen: this.state.sessionLen - 1,
      timeLeft: this.state.timeLeft - 60
    })
  }

  handleIncrementSession() {
    this.setState({
      sessionLen: this.state.sessionLen + 1,
      timeLeft: this.state.timeLeft + 60
    })
  }

  clockify() {
    let minutes = Math.floor(this.state.timeLeft / 60)
    let seconds = this.state.timeLeft - minutes * 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    minutes = minutes < 10 ? '0' + minutes : minutes
    return minutes + ':' + seconds
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row-container row justify-content-center align-items-center'>
          <SetTimerLength
            timerLabelId='break-label'
            timerLabel='Break Length'
            timerLen={this.state.breakLen}
            timerLenId='break-length'
            decTimerId='break-decrement'
            handleDecrementTimer={this.handleDecrementBreak}
            incTimerId='break-increment'
            handleIncrementTimer={this.handleIncrementBreak}
          />
          <SetTimerLength
            timerLabelId='session-label'
            timerLabel='Session Length'
            timerLen={this.state.sessionLen}
            timerLenId='session-length'
            decTimerId='session-decrement'
            handleDecrementTimer={this.handleDecrementSession}
            incTimerId='break-increment'
            handleIncrementTimer={this.handleIncrementSession}
          />
          <Timer
            timeLeft={this.clockify()}
          />
        </div>
      </div>
    )
  }
}

class SetTimerLength extends React.Component {
  render() {
    return (
      <div className='set-timer-length-container'>
        <span id={this.props.timerLabelId}>{this.props.timerLabel}</span>
        <span id={this.props.timerLenId}>{this.props.timerLen}</span>
        <button onClick={this.props.handleIncrementTimer}>
          <i id={this.props.incTimerId} class='fa fa-arrow-up'></i>
        </button>
        <button onClick={this.props.handleDecrementTimer}>
          <i id={this.props.decTimerId} class='fa fa-arrow-down'></i>
        </button>
      </div>
    )
  }
}

class Timer extends React.Component {
  render() {
    return (
      <div>
        <span id='timer-label'>
          Session
        </span>
        <div id='time-left'>
          {this.props.timeLeft}
        </div>
        <button id='start_stop'>START/STOP</button>
        <button id='reset'>RESET</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
