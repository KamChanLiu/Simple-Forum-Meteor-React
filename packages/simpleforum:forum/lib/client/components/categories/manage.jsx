CategoriesManage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe("categoriesAll");

    return {
      categories: Categories.find().fetch()
    };
  },
  renderCategories() {
    return this.data.categories.map((category) => {
      return (<CategoryListItem item={category} />);
    });
  },
  render() {
    return (
      <div>
        <h2>Add</h2>
        <CategoriesAdd />
        <hr />
        <ul>
          {this.renderCategories()}
        </ul>
      </div>
    );
  }
});
