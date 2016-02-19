ThreadsSearch = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe('threads');
    return {
      threads: Threads.find().fetch()
    }
  },
  getInitialState() {
    return {
      threadResults: []
    };
  },
  handleSearch(e) {
    var searchTerm = e.target.value;

    if (searchTerm) {
      var self = this;

      Meteor.call('searchThreads', searchTerm, function(error, result){
        if(error) {
          console.log("error", error);
        }
        if(result) {
          var results = [];
          var data = self.data.threads;

          _.each(result, function(result){
            if (result.score > 0) {
              results.push(_.findWhere(data, { _id: result.ref }));
            }
          });

          self.setState({threadResults: results});
        }
      });
    } else {
      this.setState({threadResults: []});
    }
  },
  renderResults() {
    return (<ThreadsList threads={this.state.threadResults} />);
  },
  render() {
    return (
      <div className="row">
        <h3>Search</h3>
        <input type="text" placeholder="search" onChange={this.handleSearch}></input>
        {this.renderResults()}
      </div>
    );
  }
});
