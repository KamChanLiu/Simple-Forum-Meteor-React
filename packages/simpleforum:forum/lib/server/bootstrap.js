Meteor.startup(() => {
  if (Categories.find().count() == 0) {
    Categories.insert({
        name: 'General',
        active: true
      });

    Categories.insert({
        name: 'Random',
        active: true
      });
  }
});
