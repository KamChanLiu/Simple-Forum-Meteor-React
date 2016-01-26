Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe("messages");
    return {
      messages: Messages.find().fetch()
    }
  },
  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message key={message._id} message={message.title} />;
    });
  },
  render() {
    return (
      <div>
        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    )
  }
});
