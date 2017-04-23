class EntryPage extends React.Component {
  render() {
    return (
      <div className='entry-page'>
        <div className='well'>
          <h1>Site Visit Feedback</h1>
          <div className='entry-body'>
            <p>Dear Customer,</p>
            <p>We thank you for your interest shown on Bashyaam - Pinnacle Crest.</p>
            <p>Your valuable feedback will help us to serve you better. Please take few minutes to submit your feedback.</p>
          </div>
          <input type='button' onClick={this.props.goToFeedback} value='GIVE FEEDBACK'/>
        </div>
      </div>
    )
  }
}
