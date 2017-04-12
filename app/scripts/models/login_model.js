var Backbone = require('backbone');

var User = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://tiny-parse-server.herokuapp.com/users/'
});

var Login = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://tiny-parse-server.herokuapp.com/users/'

});

module.exports = {
  User,
  Login,
};
