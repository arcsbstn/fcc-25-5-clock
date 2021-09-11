const SESSION = 'session'
const BREAK = 'break'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakLen: 5,
      sessionLen: 25,
      timeLeft: 1500,
      timerType: SESSION,
      isTimerRunning: false,
      intervalId: ''
    }
    this.handleDecrementBreak = this.handleDecrementBreak.bind(this)
    this.handleIncrementBreak = this.handleIncrementBreak.bind(this)
    this.handleDecrementSession = this.handleDecrementSession.bind(this)
    this.handleIncrementSession = this.handleIncrementSession.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.toggleStartStopTimer = this.toggleStartStopTimer.bind(this)
  }

  handleDecrementBreak() {
    if (!this.state.isTimerRunning) {
      if (this.state.timerType === BREAK) {
        this.setState({
          breakLen: this.state.breakLen - 1,
          timeLeft: this.state.timeLeft - 60
        })
      }
    }
  }

  handleIncrementBreak() {
    if (!this.state.isTimerRunning) {
      if (this.state.timerType === BREAK) {
        this.setState({
          breakLen: this.state.breakLen + 1,
          timeLeft: this.state.timeLeft + 60
        })
      }
    }
  }

  handleDecrementSession() {
    if (!this.state.isTimerRunning) {
      if (this.state.timerType === SESSION) {
        this.setState({
          sessionLen: this.state.sessionLen - 1,
          timeLeft: this.state.timeLeft - 60
        })
      }
    }
  }

  handleIncrementSession() {
    if (!this.state.isTimerRunning) {
      if (this.state.timerType === SESSION) {
        this.setState({
          sessionLen: this.state.sessionLen + 1,
          timeLeft: this.state.timeLeft + 60
        })
      }
    }
  }

  resetTimer() {
    clearInterval(this.state.intervalId)
    this.setState({
      breakLen: 5,
      sessionLen: 25,
      timeLeft: 1500,
      timerType: SESSION,
      isTimerRunning: false,
      intervalId: ''
    })
  }

  runTimer() {
    let intervalId = setInterval(() => {
      this.setState({
        timeLeft: this.state.timeLeft - 1
      })
    }, 1000)
    this.setState({
      intervalId
    })
  }

  toggleStartStopTimer() {
    if (!this.state.isTimerRunning) {
      this.runTimer()
      this.setState({ isTimerRunning: true })
    } else {
      clearInterval(this.state.intervalId)
      this.setState({
        isTimerRunning: false,
        intervalId: ''
      })
    }
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
            incTimerId='session-increment'
            handleIncrementTimer={this.handleIncrementSession}
          />
          <Timer
            timeLeft={this.clockify()}
            resetTimer={this.resetTimer}
            toggleStartStopTimer={this.toggleStartStopTimer}
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
        <button id='start_stop' onClick={this.props.toggleStartStopTimer}>START/STOP</button>
        <button id='reset' onClick={this.props.resetTimer}>RESET</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
