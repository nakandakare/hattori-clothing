import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument, /*addCollectionAndDocuments*/} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
//import {selectCollectionsForPreview} from './redux/shop/shop.selector';


class App extends React.Component {
  
  componentDidMount() {
    const {setCurrentUserFunc} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { // onAuthStateChanged = Siempre escucha si hay un usuario
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => { //onSnapShot = listening to userRef (listening to anychange from database) but set the first date 
          setCurrentUserFunc({
              id: snapShot.id,
              ...snapShot.data()
          })
        });
      } 
      setCurrentUserFunc(userAuth); //currentUser to null

     //addCollectionAndDocuments('collections', collectionsArray.map(({title,items}) => ({title, items}))); //al devolver denuevo con "{ }" se retorna como objetos.
    })
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
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to ='/' />) : (<SignInAndSignUp />)} />
      </Switch>
    </div>
  )
  };
}

const mapStateToProps = (state) => ({ // user = state.user
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({ //dispatch an action
  setCurrentUserFunc: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps ,mapDispatchToProps)(App);
