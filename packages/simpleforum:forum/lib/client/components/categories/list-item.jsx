CategoryListItem = React.createClass({
  propTypes: {
      item: React.PropTypes.object.isRequired
  },
  toggleActive() {
    Meteor.call("toggleActiveCategory", this.props.item._id.valueOf(), !this.props.item.active);
  },
  delete() {
    Meteor.call("deleteCategory", this.props.item._id.valueOf());
  },
  render() {
    var id = this.props.item._id.valueOf();

    return(
      <li key={id}>
        {this.props.item.name}
        <button onClick={this.toggleActive}>{ this.props.item.active ? 'active' : 'inactive' }</button>
        <button onClick={this.delete}>delete</button>
      </li>
    );
  }
});
