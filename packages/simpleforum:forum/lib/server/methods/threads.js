Meteor.methods({
  addThread: function(thread) {
    check(thread, Threads.simpleSchema());
    // TODO: Check logged in
    return Threads.insert(thread);
  },
  deleteThread: function(threadId) {
    var thread = Threads.findOne(threadId);
    // TODO: Check authorisation
    // Don't actually delete it
    Threads.update(threadId, { $set: { active: false } });
  }
});
