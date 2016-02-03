Threads = new Mongo.Collection('threads');

Threads.schema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
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
    type: String,
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
    optional: true,
    autoValue: function() {
      if (this.isInsert) {
        return true;
      }
    }
  }
});

Threads.attachSchema(Threads.schema);
