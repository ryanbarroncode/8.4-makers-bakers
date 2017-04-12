var React = require('react');

class BaseLayout extends React.Component{
  render(){
    return(
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Makers Bakers</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#auth/">Login <span className="sr-only">(current)</span></a></li>
                <li className=""><a href="#recipes/">Home <span className="sr-only">(current)</span></a></li>
                  <li className=""><a href="#recipes/add/">Add Recipe <span className="sr-only">(current)</span></a></li>
            </ul>


              {this.props.children}

          </div>
        </nav>
      </div>



    )
  }
}

module.exports =  {
  BaseLayout
}
