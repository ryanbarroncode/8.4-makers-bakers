var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var React = require('react');

var models = require('./models/recipe');
var RecipeAdjuster = require('./components/recipe.jsx').RecipeAdjuster;
var AuthContainer = require('./components/auth.jsx').AuthContainer;
var AddRecipe = require('./components/add_recipe.jsx').AddRecipe;

var parse = require('./parse.js');


var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'index',
    'auth/': 'auth',
    'recipes/': 'recipeList',
    'recipes/:id/edit/': 'recipeAddEdit',
    'recipes/add/': 'recipeAddEdit',
    'recipes/:id': 'recipeDetail',
  },

  initialize: function(){
    parse.setup({
         BASE_API_URL: 'https://tiny-parse-server.herokuapp.com'
       });
     },

  recipeList: function(){
    console.log('recipes');
    var recipe = new models.Recipe({'name': 'Pasta', 'servings': 4});
    recipe.get('ingredients').add([
      {'name': 'flour', 'qty': 2, 'units': 'cups'},
      {'name': 'water', 'qty': 5, 'units': 'tbsp'},
    ]);

    ReactDOM.render(
      React.createElement(RecipeAdjuster, {recipe: recipe}),
      document.getElementById('app')
    )
  },

  recipeAddEdit: function(){
    console.log('recipes');
    var recipe = new models.Recipe({'name': 'Pasta', 'servings': 4});
    recipe.get('ingredients').add([
      {'name': 'flour', 'qty': 2, 'units': 'cups'},
      {'name': 'water', 'qty': 5, 'units': 'tbsp'},
    ]);
    ReactDOM.render(
    React.createElement(AddRecipe, { recipe: recipe }),
    document.getElementById('app')
   );
  },

  index: function(){
    ReactDOM.render(
  React.createElement(AuthContainer),
  document.getElementById('app')
  );
},
  auth: function(){
    console.log('auth');
    var recipe = new models.Recipe({'name': 'Pasta', 'servings': 4});
    recipe.get('ingredients').add([
      {'name': 'flour', 'qty': 2, 'units': 'cups'},
      {'name': 'water', 'qty': 5, 'units': 'tbsp'},
    ]);

    ReactDOM.render(
      React.createElement(AuthContainer),
      document.getElementById('app')
    )
  }
});

var router = new AppRouter();

module.exports = {
  router
}
