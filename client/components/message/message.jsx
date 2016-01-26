Message = React.createClass({
  propTypes: {
    key: React.PropTypes.object.isRequired,
    message: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <li key={this.props.key}>
        {this.props.message}
      </li>
    );
  }
});
