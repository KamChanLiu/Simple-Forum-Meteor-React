CategoriesAdd = React.createClass({
  addCategory(e){
    e.preventDefault();
    let nameNode = this.refs.inputName;
    let activeNode = this.refs.inputActive;

    let category  = {
      name: nameNode.value.trim(),
      active: activeNode.checked
    };

    Meteor.call("addCategory", category);

    nameNode.value = "";
    activeNode.value = "";
  },
  render() {
    return (
      <div>
        <form onSubmit={this.addCategory}>
          Name<br/><input type="text" ref="inputName" /><br />
        Active<br/><input type="checkbox" ref="inputActive" /><br/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
});
