Meteor.methods({
  addPost: function(post) {
    check(post, Posts.simpleSchema());
    // TODO: Check logged in
    return Posts.insert(post);
  },
  deletePost: function(postId) {
    var post = Posts.findOne(postId);
    // TODO: Check authorisation
    // Don't actually delete it
    Posts.update(postId, { $set: { active: false } });
  }
});
