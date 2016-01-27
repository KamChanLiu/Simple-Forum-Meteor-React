Messages = new Mongo.Collection('messages');

MessageSchema = new SimpleSchema({
  "title": {
    type: String,
    label: "Title"
  },
  "message": {
    type: String,
    label: "Message"
  }
});

Messages.attachSchema(MessageSchema);
