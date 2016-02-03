ThreadsAdd = React.createClass({
  getInitialState: function() {
    return {
      threadCategory: '',
      errors: []
    };
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe('categories');
    return {
      currentUser: Meteor.user(),
      categories: Categories.find().fetch()
    }
  },
  createThread(e){
    e.preventDefault();

    var category = this.state.threadCategory;
    var title = this.refs.titleInput.value.trim();
    var body = this.refs.bodyInput.value.trim();

    var errors = [];

    if (!category || category === '') {
      errors.push("Category required");
    }

    if (!title) {
      errors.push("Title required");
    }

    if (!body) {
      errors.push("Body required");
    }

    this.setState({
      errors: errors
    });

    if (errors.length) {
      return;
    }

    let thread  = {
      title: title,
      body: body,
      category: category,
      author: this.data.currentUser.username,
      authorId: this.data.currentUser._id
    };

    Meteor.call('addThread', thread, function(error, result){
      var threadId = result;
      FlowRouter.go('/thread/' + threadId);
    });
  },
  setCategory(e) {
    this.setState({ threadCategory: e.target.value });
  },
  renderCategories() {
    return this.data.categories.map((category) => {
      var categoryClass = this.state.threadCategory == category.name ? 'active' : '';
      categoryClass += ' btn btn-default';

      return (<button
          value={category.name}
          key={category.name}
          onClick={this.setCategory}
          type="button"
          className={categoryClass}>
          {category.name}
        </button>);
    });
  },
  render() {
    if (!this.data.currentUser) {
      return (
        <div className="row">
          <div className="alert alert-danger">
            You must <a href="/user/login">Login</a> to access this page.
          </div>
        </div>
      )
    }

    return (
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
          <h1>New Thread</h1>
          <form onSubmit={this.createThread}>
            <FormErrors errors={this.state.errors} />
            <div className="form-group">
              <label>Category</label>
              <br />
              <div className="btn-group" role="group" aria-label="...">
                {this.renderCategories()}
              </div>
            </div>
            <div className="form-group">
              <label>Title</label>
              <input className="form-control" name="Title" type="text" ref="titleInput" />
            </div>
            <div className="form-group">
              <label>Body</label>
              <textArea className="form-control" name="Body" type="text" ref="bodyInput" />
            </div>
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    );
  }
});
