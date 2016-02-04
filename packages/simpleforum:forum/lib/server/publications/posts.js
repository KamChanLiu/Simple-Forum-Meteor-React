Meteor.publish('posts', function(threadId){
  return Posts.find({ threadId:threadId, active:true });
});
