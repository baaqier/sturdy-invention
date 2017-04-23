class Navigation extends React.Component {
  render() {
    return (
      <div className='navigation'>
        {
          !this.props.isFirstPage
            ? <input type='button' className='previous' value='< Previous' onClick={this.props.onPrevious}/>
            : null
        }
        {
          !this.props.isLastPage
            ? <input type='button' className='next' value='Next >' onClick={this.props.onNext}/>
            : null
        }
        {
          this.props.isLastPage
            ? <input type='button' className='submit' value='Submit' onClick={this.props.onSubmit}/>
            : null
        }
      </div>
    )
  }
}
