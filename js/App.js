class App extends React.Component {
  state = {
    isEntry: true,
    isExit: false
  }

  goToFeedback(data) {
    this.setState({
      isEntry: false,
      isExit: false
    })
  }

  goToExit(data) {
    this.setState({
      isEntry: false,
      isExit: true
    }, () => {
      this.props.onSubmit(data)
    });
  }

  render() {
    return (
      <div className='app'>
        {
          this.state.isEntry
            ? <EntryPage goToFeedback={this.goToFeedback.bind(this)}/>
            : null
        }
        {
          !this.state.isEntry && !this.state.isExit
            ? <Feedback goToExit={this.goToExit.bind(this)}/>
            : null
        }
        {
          this.state.isExit
            ? <ExitPage />
            : null
        }
      </div>
    )
  }
}
