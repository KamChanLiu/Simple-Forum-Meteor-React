ThreadsList = React.createClass({
  propTypes: {
    threads: React.PropTypes.array.isRequired,
    selectedCategory: React.PropTypes.string
  },
  renderThreads() {
    return this.props.threads.map((thread) => {
      return (<ThreadListItem key={thread._id} item={thread} />);
    });
  },
  render() {
    return (
      <div>
        <h3>{this.props.selectedCategory}</h3>
        <div className="thread-list">
          {this.renderThreads()}
        </div>
      </div>
    );
  }
});
