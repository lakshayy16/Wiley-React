import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import FirstClass from './components/FirstClass';
import Namaste from './components/Namaste';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <FirstClass name ='Lakshay' desig='Learner'/>
      <FirstClass name ='Pranav' d7esig='Teacher'/>
      <Welcome name ='Pranav' desig='Teacher'/>
      <Welcome name ='Lakshay' desig='Learner'/>
      <Namaste />
      <Greetings/>
    </div>
  );
}

export default App;
