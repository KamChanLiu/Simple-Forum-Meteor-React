Meteor.startup(() => {
  if (Messages.find().count() == 0) {
    Messages.insert({
        title: 'Hello World',
        message: 'Hello World Message'
      });
  }
});
