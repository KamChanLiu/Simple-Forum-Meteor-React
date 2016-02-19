MainHeader = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand">SimpleForum</a>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/search">Search</a>
              </li>
            </ul>
            <UserMenu />
          </div>
        </div>
      </nav>
    );
  }
});
