Meteor.publish('categories', function(){
  return Categories.find({ active : true });
});

Meteor.publish('categoriesAll', function(){
  return Categories.find();
});
