Threads.index = lunr(function() {
  this.field('title', {boost: 10});
  this.field('body');
  this.ref('_id');
});

var query = Threads.find();

(function() {
  var initialising = true;
  query.observeChanges({
    added: function(id, thread) {
      if (!initialising) {
        thread._id = id;
        Threads.index.add(thread);
      }
    },
    changed: function(id, thread) {
      Threads.index.remove({ _id: id });
      
      if (thread.active) {
        thread._id = id;
        Threads.index.add(thread);
      }
    },
    removed: function(id) {
      Threads.index.remove({ _id: id });
    }
  });
  initialising = false;
})();

_.each(query.fetch(), function(thread){
  Threads.index.add(thread);
});
