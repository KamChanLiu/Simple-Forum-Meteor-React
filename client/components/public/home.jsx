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
      return <Message key={message._id.valueOf()} message={message} />;
    });
  },
  addMessage(){
    var newMessage = {
      title: "new message",
      message: "test"
    };

    Meteor.call("addMessage", newMessage);
  },
  render() {
    return (
      <div>
        <ul>
          {this.renderMessages()}
        </ul>
        <MessageAdd />
      </div>
    )
  }
});
