AuthErrors = React.createClass({
    propTypes: {
        errors: React.PropTypes.array
    },
    renderErrors() {
      return this.props.errors.map((errorMessage) => {
        return <li key={errorMessage}>{errorMessage}</li>;
      });
    },
    render() {
        if (this.props.errors) {
            return (
                <ul>
                  {this.renderErrors()}
                </ul>
            )
        }
    }
});
