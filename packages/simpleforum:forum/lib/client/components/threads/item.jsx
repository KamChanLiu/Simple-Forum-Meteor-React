ThreadsItem = React.createClass({
  propTypes: {
      item: React.PropTypes.object.isRequired
  },
  render() {
    var id = this.props.item._id.valueOf();

    return(
      <div className="thread-list-item panel panel-default">
        <div className="panel-heading">
          <span className="post-detail pull-right">
            <span className="glyphicon glyphicon-user" aria-hidden="true" />
            <span>
              {this.props.item.author}
            </span>
            <span className="glyphicon glyphicon-time" aria-hidden="true" />
            <span>
              {moment(this.props.item.createdAt).fromNow()}
            </span>
          </span>
          <h3 className="panel-title">{this.props.item.title}</h3>
        </div>
        <div className=" panel-body">
          <p>
            {this.props.item.body}
          </p>
        </div>
      </div>
    );
  }
});
