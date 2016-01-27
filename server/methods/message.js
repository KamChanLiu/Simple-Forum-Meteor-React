Meteor.methods({
  addMessage: function(message) {
    check(message, Messages.simpleSchema());
    Messages.insert(message);
  }
});
