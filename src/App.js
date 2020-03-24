import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
//import {auth, createUserProfileDocument, /*addCollectionAndDocuments*/} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {selectCurrentUser, selectIsFetching} from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession} from './redux/user/user.actions';
import WithSpinner from './components/with-spinner/with-spinner.component';
//import {selectCollectionsForPreview} from './redux/shop/shop.selector';

const SignInAndSignUpWithSpinner = WithSpinner(SignInAndSignUp);

class App extends React.Component {
  
  componentDidMount() {
    const { checkUserSession} = this.props;
    checkUserSession()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpWithSpinner isLoading={this.props.isFetching}/>)} />
      </Switch>
    </div>
  )
  };
}

const mapStateToProps = (state) => ({ 
  currentUser: selectCurrentUser(state),
  isFetching: selectIsFetching(state)
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
