PostsItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    userId: React.PropTypes.string
  },
  deletePost() {
    if (confirm('Are you sure you want to delete this post?')) {
      Meteor.call('deletePost', this.props.item._id);
    }
  },
  render() {
    if (this.props.item.authorId == this.props.userId) {
        var deleteButton = (<span onClick={this.deletePost} role="button" className="glyphicon glyphicon-remove" aria-hidden="true" />);
    }

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
            {deleteButton}
          </span>
          <h3></h3>
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
