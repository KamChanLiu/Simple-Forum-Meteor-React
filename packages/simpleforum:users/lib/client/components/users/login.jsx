UserLogin = React.createClass({
    getInitialState() {
        return {
            errors: []
        }
    },
    loginUser(event) {
        event.preventDefault();

        var username = this.refs.usernameInput.value.trim();
        var password = this.refs.passwordInput.value.trim();

        var errors = [];

        if (!username) {
          errors.push("Username required");
        }

        if (!password) {
            errors.push("Password required");
        }

        this.setState({
            errors: errors
        });

        if (errors.length) {
            return;
        }

        Meteor.loginWithPassword(username, password, (err) => {
          if (err) {
            this.setState({
              errors: [err.reason]
            });

            return;
          } else {
            FlowRouter.go('/');
          }
        });
    },
    render() {
        return (
            <div className="row">
              <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                <h1>Login</h1>
                <form onSubmit={this.loginUser}>
                    <FormErrors errors={this.state.errors} />
                    <div className="form-group">
                      <label>Username</label>
                      <input className="form-control" name="Username" type="text" ref="usernameInput" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" name="Password" type="password" ref="passwordInput" />
                    </div>
                    <input className="btn btn-primary" type="submit" />
                </form>
              </div>
            </div>
        )
    }
});
