import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import TakeSurvey from './components/TakeSurvey/TakeSurvey';
import Questions from './components/Questions/Questions'

function App() {
  return (
    <div className="App">
  <Banner />
  <TakeSurvey />
  <Questions />
    </div>
  );
}

export default App;
