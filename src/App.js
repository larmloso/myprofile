import './App.css';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Heard from './components/Home/Heard';
// import Footer from './components/Pages/Footer/Footer';
// import SignUp from './components/Pages/SignUp/SignUp';
// import SignIn from './components/Pages/SignIn/SignIn';
// import Tracking from './components/Pages/Tracking/Tracking';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='' exact component={Heard}/>

      </Switch>
    </Router>
  );
}

export default App;
