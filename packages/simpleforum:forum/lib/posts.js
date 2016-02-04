Posts = new Mongo.Collection('posts');

Posts.schema = new SimpleSchema({
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
  body: {
    type: String,
    optional: false,
    max: 5000
  },
  author: {
    type: String,
    optional: false
  },
  authorId: {
    type: String,
    optional: false
  },
  threadId: {
    type: String,
    optional: false
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

Posts.attachSchema(Posts.schema);
