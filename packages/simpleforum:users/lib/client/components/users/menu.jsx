UserMenu = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  logoutUser() {
    Meteor.logout();
  },
  render() {
    var userAction;
    var currentUser = this.data.currentUser;

    if (currentUser) {
      userAction = (
        <a>Hello {currentUser.username}</a>
      );

      var logoutAction = (
        <a href="#" onClick={this.logoutUser}>Logout</a>
      );
    } else {
      userAction = (
        <a href="user/login">Login</a>
      );

      var registerAction = (
        <a href="/user/register">Register</a>
      );
    }

    return (
      <div>
        {userAction}&nbsp;|&nbsp;
        {logoutAction}
        {registerAction}
      </div>
    );
  }
});
