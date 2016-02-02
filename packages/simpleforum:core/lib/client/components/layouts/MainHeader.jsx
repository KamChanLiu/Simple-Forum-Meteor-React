MainHeader = React.createClass({
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
        <UserMenu />
        <hr />
      </div>
    );
  }
});
