ThreadsList = React.createClass({
  getInitialState: function() {
    return {
      threadCategory: ''
    };
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe('threads');

    return {
      threads: Threads.find({}, {sort: {createdAt: -1}}).fetch()
    }
  },
  renderThreads() {
    return this.data.threads.map((thread) => {
      return (<ThreadListItem item={thread} />);
    });
  },
  render() {
    return (
      <div className="row">
        <div>
          <ThreadsCreateButton />
        </div>
        <div className="row spacer"></div>
        <div>
          <div className="thread-list">
            {this.renderThreads()}
          </div>
        </div>
      </div>
    );
  }
});
