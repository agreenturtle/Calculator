var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var CreateHistory =  require('history/lib/createHashHistory');

var History = new CreateHistory({
  queryKey: false
});

var Home = require('./components/Pages/Base/BasePage.jsx');
var Index = require('./components/Pages/Index/IndexPage.jsx');

var Routes = (
  <Router history={History}>
    <Route path="/" component={Home}>
      <IndexRoute component={Index} />
    </Route>
  </Router>
);

module.exports = Routes;
