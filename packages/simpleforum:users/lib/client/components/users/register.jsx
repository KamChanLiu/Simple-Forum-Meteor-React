UserRegister = React.createClass({
    getInitialState() {
        return {
            errors: []
        }
    },
    registerUser(event) {
        event.preventDefault();

        var username = this.refs.usernameInput.value.trim();
        var email = this.refs.emailInput.value.trim();
        var password = this.refs.passwordInput.value.trim();
        var confirmPassword = this.refs.confirmPasswordInput.value.trim();

        var errors = [];

        if (!username) {
          errors.push("Username required");
        }

        if (!email) {
            errors.push("Email required");
        }

        if (!password) {
            errors.push("Password required");
        }

        if (password !== confirmPassword) {
          errors.push("Passwords do not match");
        }

        this.setState({
            errors: errors
        });

        if (errors.length) {
            return;
        }

        Accounts.createUser({
          username: username,
          email: email,
          password: password
        }, (error) => {
          if (error) {
            this.setState({
              errors: [error.reason]
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
                <h1>Register</h1>
                <form onSubmit={this.registerUser}>
                    <FormErrors errors={this.state.errors} />
                    <div className="form-group">
                      <label>Username</label>
                      <input className="form-control" name="Username" type="text" ref="usernameInput" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input className="form-control" name="Email" type="text" ref="emailInput" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" name="Password" type="password" ref="passwordInput" />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input className="form-control" name="ConfirmPassword" type="password" ref="confirmPasswordInput" />
                    </div>
                    <input className="btn btn-primary" type="submit" />
                </form>
              </div>
            </div>
        )
    }
});
