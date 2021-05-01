import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Subnav from './components/Subnav';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Header />
      <Subnav />
      <Timeline />
      <Timeline />
      <Timeline />
    </div>
  );
}

export default App;
