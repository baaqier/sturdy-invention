class Feedback extends React.Component {
  state = {
    page: 0,
    pageData: siteData
  }

  onQuestionChange(questionNo, value) {
    this.state.pageData[this.state.page].questionList[questionNo].value = value
    this.setState(this.state)
  }

  onSubmit() {
    this.props.goToExit(this.state.pageData)
  }

  onPageChange(diff) {
    this.setState({
      page: this.state.page + diff
    })
  }

  render() {
    return (
      <div className='feedback'>
        <div className='well'>
          <div className='heading'>
            <h1>Customer Satisfaction Survey</h1>
          </div>
          <Section
            section={this.state.pageData[this.state.page]}
            onChange={this.onQuestionChange.bind(this)}
          />
          <Navigation
            isFirstPage={this.state.page === 0}
            isLastPage={this.state.page === this.state.pageData.length - 1}
            onNext={() => this.onPageChange(1)}
            onPrevious={() => this.onPageChange(-1)}
            onSubmit={this.onSubmit.bind(this)}
          />
        </div>
      </div>
    )
  }
}
