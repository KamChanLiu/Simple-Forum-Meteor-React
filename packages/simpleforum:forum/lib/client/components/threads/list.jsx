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
      threads: Threads.find().fetch()
    }
  },
  renderThreads() {
    return this.data.threads.map((thread) => {
      return (<ThreadListItem item={thread} />);
    });
  },
  render() {
    return (
      <div className="row thread-list">        
        {this.renderThreads()}
      </div>
    );
  }
});
