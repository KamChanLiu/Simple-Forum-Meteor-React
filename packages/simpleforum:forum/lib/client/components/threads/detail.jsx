ThreadsDetail = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe('thread', this.props.threadId);
    Meteor.subscribe('posts', this.props.threadId);

    return {
      currentUser: Meteor.user(),
      thread: Threads.findOne({ _id:this.props.threadId }),
      posts: Posts.find({ threadId:this.props.threadId }).fetch()
    }
  },
  renderPosts() {
    if (this.data.posts) {
      return this.data.posts.map((post) => {
        return <PostsItem key={post._id} item={post} userId={this.data.currentUser ? this.data.currentUser._id : null} />
      });
    }
  },
  render() {
    if (this.data.thread) {
      return (
        <div>
          <ThreadsItem item={this.data.thread} />
          {this.renderPosts()}
          <PostsAdd currentUser={this.data.currentUser} threadId={this.data.thread._id.valueOf()} />
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
});
