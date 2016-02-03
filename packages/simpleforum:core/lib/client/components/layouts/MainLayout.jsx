MainLayout = React.createClass({
    render() {
        return (
          <div>
            <MainHeader />
            <div className="container">
              {this.props.content}
              <MainFooter />
            </div>
          </div>
        )
    }
});
