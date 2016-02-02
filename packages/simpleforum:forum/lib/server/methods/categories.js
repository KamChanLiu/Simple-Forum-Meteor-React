Meteor.methods({
  addCategory: function(category) {
    check(category, Categories.simpleSchema());
    Categories.insert(category);
  },
  deleteCategory: function(categoryId) {
    var category = Categories.findOne(categoryId);
    // TODO: Check authorisation
    Categories.remove(categoryId);
  },
  toggleActiveCategory: function(categoryId, active) {
    check(active, Boolean);

    var category = Categories.findOne(categoryId);
    Categories.update(categoryId, { $set: { active: active } });
  }
});
