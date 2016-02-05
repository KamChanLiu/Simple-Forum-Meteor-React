ThreadsCreateButton = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  createThread() {
    FlowRouter.go('/threads/add');
  },
  render() {
    if (!this.data.currentUser) {
      return (
        <div className="row">
          <div className="alert alert-info">
            Please <a href="/user/login">login</a> to create a new thread.
          </div>
        </div>
      );
    } else {
      return (
          <button onClick={this.createThread} className="btn btn-success" type="button">
            CREATE &nbsp;
            <span className="glyphicon glyphicon-plus" />
          </button>

      );
    }
  }
});
