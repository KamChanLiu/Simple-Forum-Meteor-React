Message = React.createClass({
  propTypes: {    
    message: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>
        <b>{this.props.message.title}</b> - {this.props.message.message}
      </li>
    );
  }
});
