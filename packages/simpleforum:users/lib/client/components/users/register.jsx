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
            <div>
              <h1>Register</h1>
              <form onSubmit={this.registerUser}>
                  <AuthErrors errors={this.state.errors} />
                  <label>Username</label><br/>
                  <input name="Username" type="text" ref="usernameInput" /><br />
                  <label>Email</label><br/>
                  <input name="Email" type="text" ref="emailInput" /><br />
                  <label>Password</label><br/>
                  <input name="Password" type="password" ref="passwordInput" /><br />
                  <label>Confirm Password</label><br/>
                  <input name="ConfirmPassword" type="password" ref="confirmPasswordInput" />
                  <br /><br />
                  <input type="submit" />
              </form>
            </div>
        )
    }
});
