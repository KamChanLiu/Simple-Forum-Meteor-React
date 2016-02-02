CategoriesList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe("categories");

    return {
      categories: Categories.find({ active:true }).fetch()
    };
  },
  renderCategories() {
    return this.data.categories.map((category) => {
      return (
        <li key={category._id}>
          <a>{category.name}</a>
        </li>);
    });
  },
  render() {
    return (
      <ul>
        {this.renderCategories()}
      </ul>
    );
  }
});
