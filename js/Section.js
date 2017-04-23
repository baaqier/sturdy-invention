class Section extends React.Component {
  render() {
    return (
      <div className='section'>
        <div className='section-name'>{this.props.section.sectionName}</div>
        <div className='question-list'>
          {
            this.props.section.questionList.map((q, i) =>
              <Question
                key={i}
                question={q}
                onChange={value => this.props.onChange(i, value)}
              />
            )
          }
        </div>
      </div>
    )
  }
}
