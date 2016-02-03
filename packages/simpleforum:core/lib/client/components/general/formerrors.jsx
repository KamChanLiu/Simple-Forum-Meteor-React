FormErrors = React.createClass({
    propTypes: {
        errors: React.PropTypes.array
    },
    renderErrors() {
      return this.props.errors.map((errorMessage) => {
        return <li key={errorMessage}>{errorMessage}</li>
      });
    },
    render() {
        if (this.props.errors.length) {
            return (
              <div className="alert alert-danger">
                <button className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <ul>
                  {this.renderErrors()}
                </ul>
              </div>
            )
        } else {
          return null;
        }
    }
});
