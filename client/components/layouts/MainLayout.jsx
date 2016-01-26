MainLayout = React.createClass({
    render() {
        return (
            <div>
              <MainHeader />
                {this.props.content}
              <MainFooter />
            </div>
        )
    }
});
