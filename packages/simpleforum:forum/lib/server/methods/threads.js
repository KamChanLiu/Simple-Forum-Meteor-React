Meteor.methods({
  addThread: function(thread) {
    check(thread, Threads.simpleSchema());

    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    return Threads.insert(thread);
  },
  deleteThread: function(threadId) {
    var thread = Threads.findOne(threadId);
    // TODO: Check authorisation
    // Don't actually delete it
    Threads.update(threadId, { $set: { active: false } });
  },
  addThreadReplyCount: function(threadId) {
    var thread = Threads.findOne(threadId);
    var count = thread.replyCount + 1;
    Threads.update(threadId, { $set: {replyCount: count} });
  }
});
