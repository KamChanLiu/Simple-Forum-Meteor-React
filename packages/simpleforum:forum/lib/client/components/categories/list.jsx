CategoriesList = React.createClass({
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
        <ul>
        </ul>
      </div>
    );
  }
});
