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
            <div>
              <h1>Login</h1>
              <form onSubmit={this.loginUser}>
                  <AuthErrors errors={this.state.errors} />
                  <label>Username</label><br/>
                  <input name="Username" type="text" ref="usernameInput" /><br />
                  <label>Password</label><br/>
                  <input name="Password" type="password" ref="passwordInput" /><br />
                  <br /><br />
                  <input type="submit" />
              </form>
            </div>
        )
    }
});
