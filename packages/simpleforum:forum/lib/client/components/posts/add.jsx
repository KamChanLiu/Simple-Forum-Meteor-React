PostsAdd = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object,
    threadId: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return {
      errors: []
    };
  },
  createPost(e){
    e.preventDefault();

    var threadId = this.props.threadId;
    var bodyNode = this.refs.bodyInput;
    var body = bodyNode.value.trim();

    var errors = [];

    if (!body) {
      errors.push("Body required");
    }

    this.setState({
      errors: errors
    });

    if (errors.length) {
      return;
    }

    let post  = {
      body: body,
      author: this.props.currentUser.username,
      authorId: this.props.currentUser._id,
      threadId: threadId
    };

    bodyNode.value = '';
    Meteor.call('addPost', post, function(error, result){
      if (result) {
        Meteor.call('addThreadReplyCount', threadId);
      }
    });
  },
  render() {
    if (!this.props.currentUser) {
      return (
        <div className="row">
          <div className="alert alert-danger">
            You must <a href="/user/login">Login</a> to post.
          </div>
        </div>
      )
    }

    return (
      <div className="row">
        <form onSubmit={this.createPost}>
          <FormErrors errors={this.state.errors} />
          <div className="form-group">
            <label>Reply</label>
            <textArea className="form-control" name="Body" type="text" ref="bodyInput" />
          </div>
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    );
  }
});
