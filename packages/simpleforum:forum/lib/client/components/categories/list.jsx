CategoriesList = React.createClass({
  propTypes: {
    categories: React.PropTypes.array.isRequired,
    categoryOnClick: React.PropTypes.func.isRequired,
    selectedCategory: React.PropTypes.string
  },
  renderCategories() {
    return this.props.categories.map((category) => {
      var categoryClass = this.props.selectedCategory == category.name ? 'active' : '';
      categoryClass += ' btn btn-default';

      return (<button
          value={category.name}
          key={category.name}
          onClick={this.props.categoryOnClick}
          type="button"
          className={categoryClass}>
          {category.name}
        </button>);
    });
  },
  render() {
    return (
      <div className="btn-group" role="group" aria-label="...">
        {this.renderCategories()}
      </div>
    );
  }
});
