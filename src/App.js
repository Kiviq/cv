import React, { Component } from 'react';
import Header from './components/Header';
import HeaderAll from './components/onepage/HeaderAll';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import HomeAll from './components/onepage/HomeAll';
import Home from './components/Home';
import './App.scss';
import Contact from './components/Contact';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
	    <BrowserRouter>
		    <div className="App">
			    {window.location.pathname !== '/onepage' && <Header />}
			    {window.location.pathname === '/onepage' && <HeaderAll />}
			    <div className="page-content">
			    	<Switch>
				    	// <Route path='/onepage' exact component={HomeAll}/>
				    	<Route path='/' exact component={HomeAll}/>
				    	<Route path='/skills' exact component={Skills}/>
				    	<Route path='/contact' exact component={Contact}/>
				    </Switch>
			    </div>
			    < Footer />
		    </div>
	    </BrowserRouter>
    );
  }
}

export default App;
