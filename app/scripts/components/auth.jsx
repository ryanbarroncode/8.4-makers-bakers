var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');

var User = require('../models/login_model.js').User;
var parse = require('../parse.js');

var apiUrl = 'https://tiny-parse-server.herokuapp.com';

var BaseLayout = require('../layouts/base.jsx').BaseLayout;



class AuthContainer extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
   return (
     <BaseLayout>
       <h1> If you do the cookin by the book! You will have a cake! </h1>
       <LoginForm />
       <SignupForm />
     </BaseLayout>
   )
 }
};

var LoginForm = React.createClass({
  getInitialState: function(){
    return{
      username: '',
      password: ''
    }
  },

  handleLoginSubmit: function(e){
    e.preventDefault();
    console.log(this.state);

    $.get(apiUrl + "/login?" + $.param(this.state)).then(function(data){
      console.log(data);
      var user = JSON.stringify(data);
      console.log(user);
      localStorage.setItem('user', user);
    });


},
handleEmailChange: function(e){
  this.setState({username: e.target.value})
},
handlePasswordChange: function(e){
  this.setState({password: e.target.value})
},

  render: function(){
    return(
      <div className="col-xs-6">
        <h1>Log In</h1>

        <form onSubmit={this.handleLoginSubmit} id="login">
          <div className="form-group">
            <input onChange={this.handleEmailChange} className="form-control" name="username" id="email-login" type="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <input onChange={this.handlePasswordChange} className="form-control" name="password" id="password-login" type="password" placeholder="Password" />
          </div>

          <input className="btn btn-primary" type="submit" href="#recipe/" value="Login" />
        </form>

      </div>
    )
  }
});

var SignupForm = React.createClass({
  getInitialState: function(){
    return{
      username: '',
      password: ''
    }
  },
    handleSignupSubmit: function(e){
      e.preventDefault();
  console.log(this.state);
  var newUser = new User(this.state);
  newUser.save();
  },

  handleEmailChange: function(e){
    this.setState({username: e.target.value})
  },

  handlePasswordChange: function(e){
    this.setState({password: e.target.value})
  },

  render: function(){
    return(
      <div className="col-xs-6">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleSignupSubmit} id="signup">
          <div className="form-group">
            <input onChange={this.handleEmailChange} className="form-control" name="email" id="email-signup" type="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <input onChange={this.handlePasswordChange} className="form-control" name="password" id="password-signup" type="password" placeholder="Password" />
          </div>

          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
        </div>
    )
  }
});



module.exports = {
AuthContainer
}
