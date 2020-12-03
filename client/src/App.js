import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './page/Home';
import BlogPostPage from './page/BlogPostPage';
import { Provider } from 'react-redux';
import store from './store';
import AllCollection from './page/AllCollection';
import BrandPage from './page/BrandPage';
import ShopPage from './page/ShopPage';
import ProductPage from './page/ProductPage'
import Contact from './page/Contact';
import About from './page/About';
import Team from './page/Team';
import Faq from './page/Faq';
import Shipping from './page/Shipping';
import Login from './page/Login';
import Signup from './page/Signup';
import ForgotPassword from './page/ForgotPassword';
import Logout from './page/Logout'
import Cart from './page/Cart';
import BrandDetails from './page/BrandDetails';
import Profile from './page/Profile';
import './css/commonHeader.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/blog/:blogName" exact component={BlogPostPage} />
          <Route path="/Collection" exact component={AllCollection}/>
          <Route path="/Brand" exact component={BrandPage} />
          <Route path='/BrandDetails/:BrandName' exact component={BrandDetails}/>
          <Route path="/Shop/:productType" exact component={ShopPage} />
          <Route path="/Shop/:productType/Product/:productName" exact component={ProductPage} />
          <Route path="/Shipping" exact component={Shipping} />
          <Route path='/Contact' exact component={Contact}/>
          <Route path='/About' exact component={About}/>
          <Route path='/Team' exact component={Team} />
          <Route path='/Faq' exact component={Faq} />
          <Route path='/Login' exact component={Login}/>
          <Route path='/Signup' exact component={Signup}/>
          <Route path="/Logout" exact component={Logout} />
          <Route path="/ForgotPassword" exact component={ForgotPassword}/>
          <Route path="/Profile" exact component={Profile}/>
          <Route path='/Cart' exact component={Cart} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
