class TextBox extends React.Component {
  render() {
    return (
      <div className='textbox'>
        <textarea
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
        />
      </div>
    )
  }
}
