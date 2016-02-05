Meteor.methods({
  addPost: function(post) {
    check(post, Posts.simpleSchema());

    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    return Posts.insert(post);
  },
  deletePost: function(postId) {
    var post = Posts.findOne(postId);

    if (post.authorId !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    } else {
      Posts.update(postId, { $set: { active: false } });
    }
  }
});
