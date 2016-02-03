Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var filter = {};

    if (this.state.threadCategory !== '') {
      filter = { category:this.state.threadCategory }
    }

    Meteor.subscribe('categories');
    Meteor.subscribe('threads');

    return {
      categories: Categories.find({ active:true }).fetch(),
      threads: Threads.find(filter, {sort: {createdAt: -1}}).fetch()
    };
  },
  getInitialState: function() {
    return {
      threadCategory: ''
    };
  },
  handleCategoryOnClick(e) {
    this.setState({ threadCategory:e.target.value });
  },
  render() {
    return (
      <div>
        <div className="row">
          <ThreadsCreateButton />
        </div>
        <div className="row spacer"></div>
        <div className="row">
          <CategoriesList
            categories={this.data.categories}
            categoryOnClick={this.handleCategoryOnClick}
            selectedCategory={this.state.threadCategory} />
        </div>
        <div className="row spacer"></div>
        <div className="row">
          <ThreadsList
            threads={this.data.threads}
            selectedCategory={this.state.threadCategory} />
        </div>
      </div>
    )
  }
});
