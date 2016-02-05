ThreadListItem = React.createClass({
  propTypes: {
      item: React.PropTypes.object.isRequired
  },
  render() {
    var id = this.props.item._id.valueOf();
    var threadLink = `/thread/${id}`;

    return(
      <div className="thread-list-item panel panel-default">
        <div className="panel-heading">
          <a href={threadLink}>
            <h3 className="panel-title">{this.props.item.title}</h3>
          </a>
        </div>
        <div className=" panel-body">
          <span>
            <span className="glyphicon glyphicon-user" aria-hidden="true" />
            {this.props.item.author}
          </span>
          <span>
            <span className="glyphicon glyphicon-time" aria-hidden="true" />
            {moment(this.props.item.createdAt).fromNow()}
          </span>
          <span>
            <span className="glyphicon glyphicon-comment" aria-hidden="true" />
            {this.props.item.replyCount ? this.props.item.replyCount : 0}
          </span>
        </div>
      </div>
    );
  }
});
