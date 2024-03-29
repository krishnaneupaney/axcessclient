import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Lenders from './pages/Lenders/Lenders';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer, Sidebar } from './components';
import About from './pages/SignUp/About';
import Terms from './pages/SignUp/Terms';
import Privacy from './pages/SignUp/Privacy';
import License from './pages/SignUp/License';
import Ourwhy from './pages/SignUp/Ourwhy';
 import Lender from './pages/SignUp/Lender';
import Auth from './pages/SignUp/Auth';
import acceptableusepolicy from './pages/SignUp/acceptableusepolicy';
import LoanForm from './components/Loan/LoanForm';
import Resources from './pages/Services/Resources';
import Landlord from './pages/Landlord/Landlord';
import { Bills } from './pages/Bills/Bills';
import ContactForm from './pages/SignUp/Contact'
import CustomerStories from './pages/Stories/CustomerStories';
import RentReport from './pages/SignUp/RentReport';
    
function App() {

  return (
    <BrowserRouter>

      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/renters' component={Services} />
        <Route path='/landlords' component={Landlord} />
        <Route path='/lenders' component={Lenders} />
        <Route path='/bills' component={Bills} />
        <Route path='/stories' component={CustomerStories} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/about' component={About} />
        <Route path='/lender' component={Lender} />
        <Route path='/terms' component={Terms} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/licenses' component={License} />
        <Route path='/why' component={Ourwhy} />
        <Route path='/auth' component={Auth} />
        <Route path='/form' component={LoanForm} />
        <Route path='/report' component={RentReport} />
        <Route path='/acceptableuseofpolicy' component={acceptableusepolicy} />
        <Route path='/resources' component={Resources} />
        <Route path='/contact' component={ContactForm} />
   
       </Switch>
      <Footer />
      <Sidebar />
    </BrowserRouter>
  
  );
}

export default App;
