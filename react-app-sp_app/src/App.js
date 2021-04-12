import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Home from './Home';
import About from './About';
import ContactUS from './ContactUs';
import NotFound from './NotFound';
import Footer from './Footer';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUS} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
