var React = require('react');
var Backbone = require('backbone');

var Recipe = require('../models/recipe').Recipe;

var BaseLayout = require('../layouts/base.jsx').BaseLayout;

class IngredientForm extends React.Component{
  constructor(props){
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    this.props.ingredient.set({ [e.target.name]: e.target.value });
    console.log(this.props.ingredient);
  }

  render(){
    return(
      <div>
        <input type='text' name='amount' onChange={this.handleInput}/>
        <input type='text' name='unit' onChange={this.handleInput}/>
        <input type='text' name='ingredient' onChange={this.handleInput}/>
      </div>
    )
  }
}

class AddRecipe extends React.Component{
  constructor(props){
    super(props);

    var recipe = new Recipe();

    this.state = {
      recipe
    }

    this.addIngredient = this.addIngredient.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  addIngredient(e) {
    e.preventDefault();
    var recipe = this.state.recipe;
    var ingredients = recipe.get('ingredients');
    ingredients.add({});
    recipe.set({ ingredients: ingredients });
    this.setState({ recipe });
  }

  saveRecipe(e){
    e.preventDefault();
    console.log('recipe', this.state.recipe);
  }

  render(){
    var ingredients = this.state.recipe.get('ingredients').map(function(ingredient, index){
      return <IngredientForm key={index} ingredient={ingredient} />
    })
    return(
      <div className="wrapper">

      <BaseLayout />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Basic Information <hr/></h3>
                <div className="form-group col-md-4">
                <img src="https://unsplash.it/500/200"/>
                </div>
                <div className="form-group col-md-4">
                  <input className="form-control" name="username"  type="text" placeholder="Recipe Name" />
                  <input className="form-control" name="username"  type="text" placeholder="Who made this Recipe?" />
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <p>
                      This recipe will make
                      <input className="form-control amount-recipe" type="text" placeholder="Amount of servings" />
                      <input className="form-control amount-recipe" type="text" placeholder="Type of Food" />
                    </p>
                  </div>

                  <div className="step1 row col-md-12">
                    <h3>Step 1 <hr/></h3>
                    { ingredients }
                    <button onClick={this.addIngredient}>Click to Add Ingredient</button>
                    <button onClick={this.saveRecipe}>Click to Save Recipe</button>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <span>
                      <input  type="text" placeholder="Amount" />
                      <input  type="text" placeholder="Unit" />
                      <input  type="text" placeholder="Ingredient" />
                      <textarea type="text" placeholder="Direction for this step" name="directions" />
                    </span>
                  </div>
                </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

module.exports = {
  AddRecipe
}
