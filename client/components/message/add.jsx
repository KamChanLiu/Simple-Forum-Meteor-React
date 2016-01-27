MessageAdd = React.createClass({  
  addMessage(e){
    e.preventDefault();
    let titleNode = this.refs.inputTitle;
    let messageNode = this.refs.inputMessage;

    let newMessage  = {
      title: titleNode.value.trim(),
      message: messageNode.value.trim()
    };

    Meteor.call("addMessage", newMessage);

    titleNode.value = "";
    messageNode.value = "";
  },
  render() {
    return (
      <div>
        <form onSubmit={this.addMessage}>
          Title<br/><input type="text" ref="inputTitle" /><br />
          Message<br/><input type="text" ref="inputMessage" /><br/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
});
