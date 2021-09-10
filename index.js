class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakLen: 5,
      sessionLen: 25
    }
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

ReactDOM.render(<App />, document.getElementById('root'))