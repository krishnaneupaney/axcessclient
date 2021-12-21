import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer, Sidebar } from './components';
import About from './pages/SignUp/About';
import Terms from './pages/SignUp/Terms';
import Privacy from './pages/SignUp/Privacy';
import License from './pages/SignUp/License';
import Ourwhy from './pages/SignUp/Ourwhy';
import Login from './pages/SignUp/Login';
import Lender from './pages/SignUp/Lender';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/about' component={About} />
        <Route path='/lenders' component={Lender} />
        <Route path='/terms' component={Terms} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/licenses' component={License} />
        <Route path='/why' component={Ourwhy} />
        <Route path='/login' component={Login} />

      </Switch>
      
      <Footer /><Sidebar />
    </Router>
  
  );
}

export default App;
