class Rating extends React.Component {

  state = {}

  onHover(rate) {
    this.setState({
      value: rate
    })
  }

  getRatingText(ratingValue) {
    if (!ratingValue) {
      return null;
    }
    const ratingTexts = this.props.ratingTexts || [
      'Poor',
      'Average',
      'Satisfied',
      'Good',
      'Delighted'
    ]
    return ratingTexts[ratingValue - 1];
  }

  render() {
    const ratingText =
      this.getRatingText(this.state.value)
      || this.getRatingText(this.props.value)
    return (
      <div className='rating'>
        <ReactRating
          initialRate={this.props.value}
          empty='empty glyphicon glyphicon-star-empty'
          full='filled glyphicon glyphicon-star'
          onChange={this.props.onChange}
          onRate={this.onHover.bind(this)}
        />
        <span className='rating-text'>{ratingText}</span>
      </div>
    )
  }
}
