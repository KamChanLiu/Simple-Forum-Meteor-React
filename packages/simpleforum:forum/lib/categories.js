Categories = new Mongo.Collection('categories');

Categories.schema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true
  },
  name: {
    type: String,
    optional: false
  },
  active: {
    type: Boolean,
    optional: false
  }
});

Categories.attachSchema(Categories.schema);
