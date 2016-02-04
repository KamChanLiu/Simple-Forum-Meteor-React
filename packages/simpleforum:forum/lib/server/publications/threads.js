Meteor.publish('threads', function(){
  return Threads.find({ active:true });
});

Meteor.publish('thread', function(threadId){
  check(threadId, String);
  return Threads.find({ _id:threadId, active:true });
});
