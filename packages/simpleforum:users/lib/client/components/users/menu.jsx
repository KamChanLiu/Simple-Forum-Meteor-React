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
        <li>
          <a>Hello {currentUser.username}</a>
        </li>
      );

      var logoutAction = (
        <li>
          <a href="#" onClick={this.logoutUser}>Logout</a>
        </li>
      );
    } else {
      userAction = (
        <li>
          <a href="/user/login">Login</a>
        </li>
      );

      var registerAction = (
        <li>
          <a href="/user/register">Register</a>
        </li>
      );
    }

    return (
      <ul className="nav navbar-nav navbar-right">
        {userAction}
        {logoutAction}
        {registerAction}
      </ul>
    );
  }
});
