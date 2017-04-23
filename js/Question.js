class Question extends React.Component {

  renderQuestion({type, value}) {
    if (type === 'rating') {
      return (
        <Rating
          value={value}
          onChange={this.props.onChange}
        />
      )
    } else if (type === 'textbox') {
      return (
        <TextBox
          value={value}
          onChange={this.props.onChange}
        />
      )
    }
  }

  render() {
    return (
      <div className='question'>
        <div className='question-label'>
          {this.props.question.label}
        </div>
        {this.renderQuestion(this.props.question)}
      </div>
    )
  }
}
