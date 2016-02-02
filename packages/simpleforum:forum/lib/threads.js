Threads = new Mongo.Collection('threads');

Threads.schema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true
  },
  title: {
    type: String,
    optional: false,
    max: 500
  },
  body: {
    type: String,
    optional: false,
    max: 5000
  },
  category: {
    type: [String],
    optional: false
  },
  author: {
    type: String,
    optional: false
  },
  authorId: {
    type: String,
    optional: false
  },
  replyCount: {
    type: Number,
    optional: true
  },
  lastReplyUser: {
    type: String,
    optional: true
  },
  lastReplyAt: {
    type: Date,
    optional: true
  },
  active: {
    type: Boolean,
    optional: false
  }
});

Threads.attachSchema(Threads.schema);
